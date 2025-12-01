'use client';

import { useEffect, useMemo, useState, useCallback } from 'react';
import { AppShell, Box, Card, Stack, Text, Title, Button, TextInput, Alert, Group, Badge, Paper } from '@mantine/core';
import { useRouter } from 'next/navigation';
import dayjs from 'dayjs';
import { Calendar, dayjsLocalizer, Views } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react';
import { useAuthStore, useAppointmentsStore, useDoctorsStore } from '../../../store';

const localizer = dayjsLocalizer(dayjs);

export default function DoctorAvailabilityPage() {
    const router = useRouter();
    const { isAuthenticated, user } = useAuthStore();
    const { addDoctorTimeOff, appointments } = useAppointmentsStore();
    const { doctors } = useDoctorsStore();

    const [start, setStart] = useState('');
    const [end, setEnd] = useState('');
    const [reason, setReason] = useState('Unavailable');
    const [error, setError] = useState('');
    const [step, setStep] = useState('form'); // form | confirm | success
    const [view, setView] = useState(Views.WEEK);
    const [currentDate, setCurrentDate] = useState(new Date());

    const doctor = useMemo(() => {
        if (!user) return null;
        return doctors.find((d) => d.id === user.doctorId || d.name === user.name);
    }, [user, doctors]);

    useEffect(() => {
        if (!isAuthenticated || user?.role !== 'doctor') {
            router.push('/doctor');
        }
    }, [isAuthenticated, user, router]);

    const doctorEvents = useMemo(() => {
        if (!doctor) return [];
        return appointments
            .filter((apt) => apt.doctorId === doctor.id)
            .map((apt) => ({
                ...apt,
                start: apt.start instanceof Date ? apt.start : new Date(apt.start),
                end: apt.end instanceof Date ? apt.end : new Date(apt.end)
            }));
    }, [appointments, doctor]);

    const hasConflict = useCallback(
        (startDate, endDate) => {
            return doctorEvents.some((ev) => {
                const evStart = ev.start instanceof Date ? ev.start : new Date(ev.start);
                const evEnd = ev.end instanceof Date ? ev.end : new Date(ev.end);
                return startDate < evEnd && endDate > evStart;
            });
        },
        [doctorEvents]
    );

    const eventStyleGetter = (event) => {
        let backgroundColor = '#e5e7eb';
        let color = '#1f2937';
        if (event.isTimeOff) {
            backgroundColor = '#fee2e2';
            color = '#991b1b';
        } else if (doctor?.color) {
            backgroundColor = doctor.color;
            color = '#fff';
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

    const selectSlot = (slotInfo) => {
        const baseStart = slotInfo.start instanceof Date ? slotInfo.start : new Date(slotInfo.start);
        const durationMinutes = 60;
        const baseEnd = dayjs(baseStart).add(durationMinutes, 'minute').toDate();
        if (dayjs(baseStart).isBefore(dayjs())) {
            setError('Cannot set past time.');
            return;
        }
        if (hasConflict(baseStart, baseEnd)) {
            setError('Time overlaps an existing appointment or time off.');
            return;
        }
        setStart(dayjs(baseStart).format('YYYY-MM-DDTHH:mm'));
        setEnd(dayjs(baseEnd).format('YYYY-MM-DDTHH:mm'));
        setStep('form');
        setError('');
    };

    const validate = () => {
        setError('');
        if (!start || !end) {
            setError('Start and end time are required.');
            return false;
        }
        const startDate = new Date(start);
        const endDate = new Date(end);
        if (Number.isNaN(startDate.getTime()) || Number.isNaN(endDate.getTime())) {
            setError('Invalid date/time.');
            return false;
        }
        if (dayjs(endDate).isBefore(dayjs(startDate))) {
            setError('End time must be after start time.');
            return false;
        }
        if (hasConflict(startDate, endDate)) {
            setError('Time overlaps an existing appointment or time off.');
            return false;
        }
        if (!reason.trim()) {
            setError('Please provide a reason for unavailability.');
            return false;
        }
        return true;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validate()) return;
        setStep('confirm');
    };

    const handleConfirm = () => {
        if (!doctor) return;
        const startDate = new Date(start);
        const endDate = new Date(end);
        addDoctorTimeOff(doctor.id, doctor.name, startDate, endDate, reason || 'Unavailable');
        setStep('success');
    };

    const resetForm = () => {
        setStep('form');
        setError('');
    };

    const doctorLabel = doctor?.name ? `Availability for ${doctor.name}` : 'Change Availability';

    return (
        <AppShell.Main style={{ height: 'calc(100vh - 70px)', overflow: 'hidden' }}>
            <Box style={{ display: 'flex', gap: '1rem', height: '100%', padding: '1rem' }}>
                <Box style={{ width: '360px', flexShrink: 0 }}>
                    <Card withBorder radius="md" shadow="sm">
                        <Stack gap="sm">
                            <Title order={3}>{doctorLabel}</Title>
                            {error && (
                                <Alert color="red" variant="light">
                                    {error}
                                </Alert>
                            )}

                            {step === 'form' && (
                                <form onSubmit={handleSubmit}>
                                    <Stack gap="sm">
                                        <TextInput
                                            label="Start"
                                            type="datetime-local"
                                            value={start}
                                            onChange={(e) => setStart(e.target.value)}
                                            required
                                        />
                                        <TextInput
                                            label="End"
                                            type="datetime-local"
                                            value={end}
                                            onChange={(e) => setEnd(e.target.value)}
                                            required
                                        />
                                        <TextInput
                                            label="Reason"
                                            placeholder="Unavailable / meeting / break"
                                            value={reason}
                                            onChange={(e) => setReason(e.target.value)}
                                            required
                                        />
                                        <Group justify="flex-end" mt="sm">
                                            <Button variant="outline" onClick={() => router.push('/doctor/dashboard')}>
                                                Cancel
                                            </Button>
                                            <Button type="submit">Review</Button>
                                        </Group>
                                    </Stack>
                                </form>
                            )}

                            {step === 'confirm' && (
                                <Stack gap="sm">
                                    <Title order={4}>Confirm time off</Title>
                                    <Text>
                                        {dayjs(start).format('MMM D, YYYY h:mm A')} -{' '}
                                        {dayjs(end).format('MMM D, YYYY h:mm A')}
                                    </Text>
                                    <Text c="dimmed" size="sm">
                                        Reason: {reason || 'Unavailable'}
                                    </Text>
                                    <Group justify="flex-end">
                                        <Button variant="light" onClick={resetForm}>
                                            Back
                                        </Button>
                                        <Button onClick={handleConfirm}>Confirm</Button>
                                    </Group>
                                </Stack>
                            )}

                            {step === 'success' && (
                                <Stack gap="sm">
                                    <Title order={4}>Availability updated</Title>
                                    <Text c="dimmed" size="sm">
                                        Your time off has been added to the schedule.
                                    </Text>
                                    <Group justify="flex-end">
                                        <Button onClick={() => router.push('/doctor/dashboard')}>
                                            Back to schedule
                                        </Button>
                                    </Group>
                                </Stack>
                            )}
                        </Stack>
                    </Card>
                </Box>

                <Box style={{ flex: 1, display: 'flex', flexDirection: 'column', minHeight: 0, overflow: 'hidden' }}>
                    <Group justify="center" mb="md" gap="md" style={{ position: 'relative' }}>
                        <Button
                            variant="subtle"
                            onClick={() => setCurrentDate(dayjs(currentDate).subtract(1, 'day').toDate())}
                        >
                            <IconChevronLeft size={16} />
                        </Button>
                        <Title order={3} style={{ minWidth: 240, textAlign: 'center' }}>
                            {dayjs(currentDate).format(view === Views.DAY ? 'MMMM D, YYYY' : 'MMMM YYYY')}
                        </Title>
                        <Button
                            variant="subtle"
                            onClick={() => setCurrentDate(dayjs(currentDate).add(1, 'day').toDate())}
                        >
                            <IconChevronRight size={16} />
                        </Button>
                    </Group>
                    <Group justify="center" mb="md" gap="xl">
                        <Button.Group>
                            <Button variant="light" onClick={() => setCurrentDate(new Date())}>
                                Today
                            </Button>
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
                            <Button
                                variant="light"
                                onClick={() => {
                                    setView(Views.AGENDA);
                                    setCurrentDate(new Date());
                                }}
                                size="sm"
                            >
                                Year
                            </Button>
                        </Button.Group>
                    </Group>
                    <Paper withBorder radius="md" p="md" style={{ flex: 1, minHeight: 0 }}>
                        <Calendar
                            localizer={localizer}
                            events={doctorEvents}
                            startAccessor="start"
                            endAccessor="end"
                            style={{ height: '100%' }}
                            view={view}
                            onView={setView}
                            date={currentDate}
                            onNavigate={(date) => setCurrentDate(date)}
                            eventPropGetter={eventStyleGetter}
                            selectable
                            toolbar={false}
                            onSelectSlot={selectSlot}
                        />
                        <Text size="sm" c="dimmed" mt="xs">
                            Select a slot on the calendar to block time off (defaults to 60 minutes).
                        </Text>
                    </Paper>
                </Box>
            </Box>
        </AppShell.Main>
    );
}
