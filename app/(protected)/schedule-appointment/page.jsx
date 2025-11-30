'use client';

import { Radio, Group, ActionIcon, Box, Title, Button, Card, Stack, Alert, Flex } from '@mantine/core';
import { useState, useCallback, useEffect, useMemo } from 'react';
import useAppointmentsStore from '../../../store/appointmentsStore';
import { Calendar, dayjsLocalizer, Views } from 'react-big-calendar';
import dayjs from 'dayjs';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './calendar.css';
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react';
import { appointments as mockAppointments } from '../../../data/mock-data';
import { useRouter } from 'next/navigation';

export default function SchedulePage() {
    const [selectedDoctor, setSelectedDoctor] = useState('');
    const router = useRouter();
    const [view, setView] = useState(Views.MONTH);
    const [currentDate, setCurrentDate] = useState(new Date());
    const localizer = dayjsLocalizer(dayjs);
    const selectedAppointment = useAppointmentsStore((s) => s.selectedAppointment);
    const selectAppointment = useAppointmentsStore((s) => s.selectAppointment);
    const clearSelectedAppointment = useAppointmentsStore((s) => s.clearSelectedAppointment);
    const addAppointment = useAppointmentsStore((s) => s.addAppointment);
    const hasPendingBooking = !!selectedAppointment;
    const confirmedAppointments = useAppointmentsStore((s) => s.appointments) || [];

    const filteredAppointments = useMemo(() => {
        let all = confirmedAppointments.filter((a) => !a.client);
        if (selectedDoctor) {
            all = all.filter((a) => a.doctorName === selectedDoctor.slice(0, -2));
        }
        return all;
    }, [confirmedAppointments, selectedDoctor]);

    const pendingEvent = useMemo(() => {
        if (selectedAppointment && selectedAppointment.start && selectedAppointment.end) {
            return {
                title: `${selectedAppointment.patientName || 'Patient'} (Pending)`,
                start: selectedAppointment.start,
                end: selectedAppointment.end,
                client: true
            };
        }
        return null;
    }, [selectedAppointment]);

    const events = useMemo(() => {
        if (!selectedDoctor) return [];
        const evs = [...filteredAppointments];
        if (pendingEvent) evs.push(pendingEvent);
        return evs;
    }, [filteredAppointments, pendingEvent, selectedDoctor]);
    const [cannotBookMessage, setCannotBookMessage] = useState('');

    const eventStyleGetter = (event) => {
        let backgroundColor = '#fef3c7';
        let color = '#92400e';
        if (event.type === 'Afternoon Appt Available') {
            backgroundColor = '#d1fae5';
            color = '#065f46';
        }
        return {
            style: {
                backgroundColor,
                color,
                border: 'none',
                borderRadius: '4px',
                fontSize: '0.75rem',
                padding: '2px 4px'
            }
        };
    };

    const handleNavigate = (direction) => {
        const increment = view === Views.DAY ? 'day' : view === Views.WEEK ? 'week' : 'month';
        const newDate =
            direction === 'NEXT'
                ? dayjs(currentDate).add(1, increment).toDate()
                : dayjs(currentDate).subtract(1, increment).toDate();
        setCurrentDate(newDate);
    };

    const handleSelectSlot = useCallback(
        (slotInfo) => {
            if (view === Views.MONTH || view === Views.WEEK) {
                setCurrentDate(slotInfo.start);
                setView(Views.DAY);
                return;
            }

            if (view === Views.DAY) {
                try {
                    setCannotBookMessage('');
                    const booking = JSON.parse(localStorage.getItem('bookingDetails') || 'null');
                    if (!booking) {
                        setCannotBookMessage('No booking details found. Please complete the booking form first.');
                        return;
                    }
                    const duration = booking.duration || 20;
                    if (!duration || duration <= 0) {
                        setCannotBookMessage('Invalid appointment duration. Please set a valid duration.');
                        return;
                    }
                    const start = slotInfo.start;
                    const end = dayjs(start).add(duration, 'minute').toDate();

                    const now = new Date();
                    if (dayjs(start).isBefore(dayjs(now))) {
                        setCannotBookMessage('Cannot book a time that has already passed.');
                        return;
                    }

                    const day = dayjs(start).day();
                    const hour = dayjs(start).hour();
                    const minute = dayjs(start).minute();
                    const isWeekend = day === 0 || day === 6;
                    if (isWeekend) {
                        const startMinutes = hour * 60 + minute;
                        const endMinutes = dayjs(end).hour() * 60 + dayjs(end).minute();
                        const minAllowed = 9 * 60;
                        const maxAllowed = 14 * 60;
                        const allowed = startMinutes >= minAllowed && endMinutes <= maxAllowed;
                        if (!allowed) {
                            setCannotBookMessage(
                                'On weekends the appointment must be fully between 9:00 AM and 2:00 PM.'
                            );
                            return;
                        }
                    } else {
                        const endMinutes = dayjs(end).hour() * 60 + dayjs(end).minute();
                        const maxWeekday = 18 * 60;
                        if (endMinutes > maxWeekday) {
                            setCannotBookMessage('Appointment end time must be before 6:00 PM on weekdays.');
                            return;
                        }
                    }

                    const hasConflict = filteredAppointments.some((ev) => {
                        if (ev.client) return false;
                        if (selectedDoctor && ev.doctorName !== selectedDoctor) return false;
                        const evStart = ev.start instanceof Date ? ev.start : new Date(ev.start);
                        const evEnd = ev.end instanceof Date ? ev.end : new Date(ev.end);
                        return start < evEnd && end > evStart;
                    });

                    if (hasConflict) {
                        setCannotBookMessage(
                            'Selected time conflicts with an existing appointment. Choose another slot.'
                        );
                        return;
                    }

                    const pending = {
                        patientName: booking.patientName || 'Patient',
                        appointmentType: booking.appointmentType || 'Booked',
                        duration,
                        start,
                        end,
                        doctorName: selectedDoctor,
                        notes: booking.notes || ''
                    };
                    try {
                        selectAppointment(pending);
                    } catch (e) {
                        console.error('Failed to save pending booking', e);
                        setCannotBookMessage('Failed to prepare booking. Please try again.');
                    }
                } catch (e) {
                    console.error('Failed to schedule appointment', e);
                    setCannotBookMessage('Failed to schedule appointment. Please try again.');
                }
            }
        },
        [view, filteredAppointments, selectedDoctor, selectAppointment]
    );

    const isSlotAllowed = (date) => {
        if (!selectedDoctor) return false;
        const now = dayjs();
        const slot = dayjs(date);
        if (slot.isBefore(now)) return false;
        let duration = 20;
        try {
            const booking = JSON.parse(localStorage.getItem('bookingDetails') || 'null');
            if (booking?.duration) duration = booking.duration;
        } catch (e) {}

        const end = slot.add(duration, 'minute');

        const day = slot.day();
        const hour = slot.hour();
        const minute = slot.minute();
        const isWeekend = day === 0 || day === 6;
        if (isWeekend) {
            const startMinutes = hour * 60 + minute;
            const endMinutes = end.hour() * 60 + end.minute();
            const minAllowed = 9 * 60;
            const maxAllowed = 14 * 60;
            if (!(startMinutes >= minAllowed && endMinutes <= maxAllowed)) return false;
        } else {
            const endMinutes = end.hour() * 60 + end.minute();
            const minAllowed = 8 * 60;
            const maxAllowed = 18 * 60;
            const startMinutes = hour * 60 + minute;
            if (!(startMinutes >= minAllowed && endMinutes <= maxAllowed)) return false;
        }

        const hasConflict = filteredAppointments.some((ev) => {
            if (ev.client) return false;
            if (selectedDoctor && ev.doctorName !== selectedDoctor) return false;
            const evStart = ev.start instanceof Date ? ev.start : new Date(ev.start);
            const evEnd = ev.end instanceof Date ? ev.end : new Date(ev.end);
            return slot.toDate() < evEnd && end.toDate() > evStart;
        });
        if (hasConflict) return false;

        return true;
    };

    const slotPropGetter = (date) => {
        const allowed = isSlotAllowed(date);
        if (!allowed) {
            return {
                style: {
                    backgroundColor: '#f3f4f6',
                    color: '#9ca3af'
                }
            };
        }
        return {};
    };

    const handleOnSelecting = (range) => {
        const start = range.start || range;
        return isSlotAllowed(start);
    };

    const getHeaderText = () => {
        if (view === Views.DAY) return dayjs(currentDate).format('dddd, MMMM D, YYYY');
        if (view === Views.WEEK) {
            const startOfWeek = dayjs(currentDate).startOf('week');
            const endOfWeek = dayjs(currentDate).endOf('week');
            return `${startOfWeek.format('MMM D')} - ${endOfWeek.format('MMM D, YYYY')}`;
        }
        if (view === Views.MONTH) return dayjs(currentDate).format('MMMM YYYY');
        return '';
    };

    return (
        <Box style={{ display: 'flex', padding: '2rem', gap: '2rem' }}>
            <Card shadow="sm" padding="lg" withBorder style={{ width: '25%', minWidth: '250px', height: '80vh' }}>
                <Radio.Group name="appointment-type" value={selectedDoctor ?? ''} onChange={setSelectedDoctor}>
                    <Box mb="lg">
                        <Title order={3} mb="sm">
                            Family Doctor:
                        </Title>
                        <Stack spacing="sm">
                            <Radio value="Dr. AhmedFD" label="Dr. Ahmed" size="lg" />
                        </Stack>
                    </Box>

                    <Box mb="lg">
                        <Title order={3} mb="sm">
                            Last Seen:
                        </Title>
                        <Stack spacing="sm">
                            <Radio value="Dr. AhmedLS" label="Dr. Ahmed" size="lg" />
                        </Stack>
                    </Box>

                    <Box mb="lg">
                        <Title order={3} mb="sm">
                            Best Symptom Match:
                        </Title>
                        <Stack spacing="sm">
                            <Radio value="Dr. AhmedSM" label="Dr. Ahmed" size="lg" />
                        </Stack>
                    </Box>

                    <Box mb="lg">
                        <Title order={3} mb="sm">
                            Earliest Appointment:
                        </Title>
                        <Stack spacing="sm">
                            <Radio value="Dr. TurnerEA" label="Dr. Turner" size="lg" />
                            <Radio value="Dr. AhmedEA" label="Dr. Ahmed" size="lg" />
                            <Radio value="Dr. MikeEA" label="Dr. Mike" size="lg" />
                            <Radio value="Dr. JoelEA" label="Dr. Joel" size="lg" />
                        </Stack>
                    </Box>
                </Radio.Group>
            </Card>

            <Box style={{ width: '75%', display: 'flex', flexDirection: 'column' }}>
                <Flex align="center" mb="md" style={{ width: '100%' }}>
                    <Button.Group>
                        <Button
                            variant={view === Views.DAY ? 'filled' : 'light'}
                            onClick={() => setView(Views.DAY)}
                            size="sm"
                        >
                            Day
                        </Button>
                        <Button
                            variant={view === Views.WEEK ? 'filled' : 'light'}
                            onClick={() => setView(Views.WEEK)}
                            size="sm"
                        >
                            Week
                        </Button>
                        <Button
                            variant={view === Views.MONTH ? 'filled' : 'light'}
                            onClick={() => setView(Views.MONTH)}
                            size="sm"
                        >
                            Month
                        </Button>
                    </Button.Group>

                    <Box style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
                        <Group spacing="xs">
                            <ActionIcon variant="subtle" size="lg" onClick={() => handleNavigate('PREV')}>
                                <IconChevronLeft size={24} />
                            </ActionIcon>

                            <Title order={2}>{getHeaderText()}</Title>

                            <ActionIcon variant="subtle" size="lg" onClick={() => handleNavigate('NEXT')}>
                                <IconChevronRight size={24} />
                            </ActionIcon>
                        </Group>
                    </Box>
                    <Box style={{ width: '120px' }} />
                </Flex>

                <Box
                    style={{
                        height: '70vh',
                        backgroundColor: 'white',
                        borderRadius: '8px',
                        padding: '1rem',
                        position: 'relative'
                    }}
                >
                    <Calendar
                        localizer={localizer}
                        events={events.map((ev) => ({
                            ...ev,
                            start: ev.start && !(ev.start instanceof Date) ? new Date(ev.start) : ev.start,
                            end: ev.end && !(ev.end instanceof Date) ? new Date(ev.end) : ev.end
                        }))}
                        startAccessor="start"
                        endAccessor="end"
                        style={{ height: '100%' }}
                        view={view}
                        onView={setView}
                        date={currentDate}
                        onNavigate={(date) => setCurrentDate(date)}
                        eventPropGetter={eventStyleGetter}
                        selectable={!!selectedDoctor}
                        slotPropGetter={slotPropGetter}
                        onSelecting={handleOnSelecting}
                        step={20}
                        timeslots={3}
                        onSelectSlot={handleSelectSlot}
                        views={[Views.MONTH, Views.WEEK, Views.DAY]}
                        toolbar={false}
                        min={new Date(2025, 9, 1, 8, 0)}
                        max={new Date(2025, 9, 1, 18, 0)}
                    />
                    {!selectedDoctor && (
                        <Box
                            style={{
                                position: 'absolute',
                                inset: 0,
                                backgroundColor: 'rgba(200,200,200,0.5)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderRadius: '8px',
                                pointerEvents: 'none'
                            }}
                        >
                            <Box
                                style={{
                                    background: 'rgba(255,255,255,0.8)',
                                    padding: '0.75rem 1rem',
                                    borderRadius: 6
                                }}
                            >
                                <Title order={5}>Select a doctor to schedule an appointment</Title>
                            </Box>
                        </Box>
                    )}

                    {cannotBookMessage && (
                        <Box style={{ position: 'absolute', top: 12, right: 12, width: 340, zIndex: 30 }}>
                            <Alert title="Cannot Book" color="red" style={{ padding: '6px 10px', fontSize: '0.95rem' }}>
                                <div style={{ margin: 0, fontSize: '0.9rem' }}>{cannotBookMessage}</div>
                            </Alert>
                        </Box>
                    )}

                    <Box style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '2rem', gap: '1rem' }}>
                        <Button size="lg" variant="outline" color="gray" onClick={() => router.back()}>
                            Back
                        </Button>
                        <Button
                            size="lg"
                            variant="filled"
                            color="blue"
                            disabled={!selectedDoctor || !hasPendingBooking}
                            onClick={() => {
                                if (!selectedAppointment) {
                                    setCannotBookMessage(
                                        'No appointment to confirm. Please schedule an appointment first.'
                                    );
                                    return;
                                }
                                router.push('/confirm-appointment');
                            }}
                        >
                            Next: Confirm
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}
