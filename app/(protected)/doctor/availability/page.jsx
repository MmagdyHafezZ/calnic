'use client';

import { useEffect, useMemo, useState, useCallback } from 'react';
import { AppShell, Box, Card, Stack, Text, Title, Button, TextInput, Alert, Group, Badge, Paper } from '@mantine/core';
import { useRouter } from 'next/navigation';
import dayjs from 'dayjs';
import { Calendar, dayjsLocalizer, Views } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react';
import { useAuthStore, useAppointmentsStore, useDoctorsStore } from '../../../../store';

const localizer = dayjsLocalizer(dayjs);

export default function DoctorAvailabilityPage() {
    const router = useRouter();
    const { isAuthenticated, user } = useAuthStore();
    const { addDoctorTimeOff, deleteAppointment, appointments, flagAppointmentsForReschedule } = useAppointmentsStore();
    const { doctors } = useDoctorsStore();

    const [start, setStart] = useState('');
    const [end, setEnd] = useState('');
    const [reason, setReason] = useState('Unavailable');
    const [error, setError] = useState('');
    const [step, setStep] = useState('form'); // form | confirm | success
    const [view, setView] = useState(Views.WEEK);
    const [currentDate, setCurrentDate] = useState(new Date());
    const [conflicts, setConflicts] = useState([]);
    const [warning, setWarning] = useState('');
    const [hadConflictOnLastSave, setHadConflictOnLastSave] = useState(false);
    const [selectedDayOffDates, setSelectedDayOffDates] = useState([]); // YYYY-MM-DD strings
    const [pendingTimeOff, setPendingTimeOff] = useState(null);

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

    const calendarEvents = useMemo(() => {
        return pendingTimeOff ? [...doctorEvents, pendingTimeOff] : doctorEvents;
    }, [doctorEvents, pendingTimeOff]);

    const doctorTimeOff = useMemo(() => {
        return doctorEvents
            .filter((ev) => ev.isTimeOff)
            .sort((a, b) => dayjs(a.start).valueOf() - dayjs(b.start).valueOf());
    }, [doctorEvents]);

    const getAppointmentConflicts = useCallback(
        (startDate, endDate) => {
            return doctorEvents.filter((ev) => {
                if (ev.isTimeOff) return false;
                const evStart = ev.start instanceof Date ? ev.start : new Date(ev.start);
                const evEnd = ev.end instanceof Date ? ev.end : new Date(ev.end);
                return startDate < evEnd && endDate > evStart;
            });
        },
        [doctorEvents]
    );

    const isWithinClinicHours = (startDate, endDate) => {
        const slot = dayjs(startDate);
        const slotEnd = dayjs(endDate);
        const isWeekend = slot.day() === 0 || slot.day() === 6;
        const opening = isWeekend ? slot.hour(9).minute(0) : slot.hour(8).minute(0);
        const closing = isWeekend ? slot.hour(14).minute(0) : slot.hour(17).minute(0);
        return slot.isSameOrAfter(opening) && slotEnd.isSameOrBefore(closing);
    };

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
                padding: '2px 4px',
                opacity: event.temp ? 0.65 : 1
            }
        };
    };

    const updateRangeFromSelected = (dates) => {
        if (!dates.length) {
            setStart('');
            setEnd('');
            setPendingTimeOff(null);
            return;
        }
        const sorted = [...dates].sort();
        const first = dayjs(sorted[0]);
        const last = dayjs(sorted[sorted.length - 1]);
        const firstWeekend = first.day() === 0 || first.day() === 6;
        const lastWeekend = last.day() === 0 || last.day() === 6;
        const startDate = first.hour(firstWeekend ? 9 : 8).minute(0).second(0).millisecond(0);
        const endDate = last.hour(lastWeekend ? 14 : 17).minute(0).second(0).millisecond(0);
        setStart(startDate.format('YYYY-MM-DDTHH:mm'));
        setEnd(endDate.format('YYYY-MM-DDTHH:mm'));
        setPendingTimeOff({
            id: 'pending-timeoff',
            title: 'Pending Time Off',
            start: startDate.toDate(),
            end: endDate.toDate(),
            isTimeOff: true,
            type: 'Time Off',
            temp: true
        });
    };

    const selectSlot = (slotInfo) => {
        const baseStart = slotInfo.start instanceof Date ? slotInfo.start : new Date(slotInfo.start);
        const baseEndRaw = slotInfo.end instanceof Date ? slotInfo.end : slotInfo.end ? new Date(slotInfo.end) : null;
        const baseDay = dayjs(baseStart);
        const rawEndDay = baseEndRaw ? dayjs(baseEndRaw) : baseDay;
        if (baseDay.isBefore(dayjs())) {
            setError('Cannot set past time.');
            return;
        }

        const startDay = baseDay.startOf('day');
        let finalDay = rawEndDay.startOf('day');
        // react-big-calendar month selection often gives end at 00:00 of the next day; adjust to avoid off-by-one
        if (rawEndDay.isAfter(baseDay) && rawEndDay.hour() === 0 && rawEndDay.minute() === 0) {
            finalDay = finalDay.subtract(1, 'day');
        }
        const spansDays = finalDay.isAfter(startDay);

        // Full-day blocks when dragging across days or in month view
        if (view === Views.MONTH || spansDays) {
            const days = Math.max(0, finalDay.diff(startDay, 'day'));
            const updated = new Set(selectedDayOffDates);
            for (let i = 0; i <= days; i++) {
                const day = startDay.add(i, 'day').format('YYYY-MM-DD');
                if (updated.has(day)) {
                    updated.delete(day);
                } else {
                    updated.add(day);
                }
            }
            const newDates = Array.from(updated);
            setSelectedDayOffDates(newDates);
            updateRangeFromSelected(newDates);
            setWarning('');
            setConflicts([]);
            setError('');
            return;
        }

        const durationMinutes = 60;
        const baseEnd = baseEndRaw || dayjs(baseStart).add(durationMinutes, 'minute').toDate();
        if (!isWithinClinicHours(baseStart, baseEnd)) {
            setError('Please choose a time between 8am-5pm on weekdays or 9am-2pm on weekends.');
            return;
        }
        const overlaps = getAppointmentConflicts(baseStart, baseEnd);
        setConflicts(overlaps);
        setWarning(
            overlaps.length
                ? 'This time off overlaps existing appointments. Front desk will be notified to reschedule.'
                : ''
        );
        setStart(dayjs(baseStart).format('YYYY-MM-DDTHH:mm'));
        setEnd(dayjs(baseEnd).format('YYYY-MM-DDTHH:mm'));
        setPendingTimeOff({
            id: 'pending-timeoff',
            title: 'Pending Time Off',
            start: baseStart,
            end: baseEnd,
            isTimeOff: true,
            type: 'Time Off',
            temp: true
        });
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
        const spansDays = !dayjs(startDate).isSame(endDate, 'day');
        const overlaps = getAppointmentConflicts(startDate, endDate);
        setConflicts(overlaps);
        setWarning(
            overlaps.length
                ? 'This time off overlaps existing appointments. Front desk will be notified to reschedule.'
                : ''
        );
        if (!spansDays && !isWithinClinicHours(startDate, endDate)) {
            setError('Please choose a time between 8am-5pm on weekdays or 9am-2pm on weekends.');
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
        const daysToBlock = [...new Set(selectedDayOffDates)];
        if (daysToBlock.length > 0) {
            const conflictIds = new Set();
            let lastBlockId = null;
            daysToBlock.forEach((dayStr) => {
                const day = dayjs(dayStr);
                const weekend = day.day() === 0 || day.day() === 6;
                const startDate = day.hour(weekend ? 9 : 8).minute(0).second(0).millisecond(0).toDate();
                const endDate = day.hour(weekend ? 14 : 17).minute(0).second(0).millisecond(0).toDate();
                const overlaps = getAppointmentConflicts(startDate, endDate);
                overlaps.forEach((c) => conflictIds.add(c.id));
                const block = addDoctorTimeOff(doctor.id, doctor.name, startDate, endDate, reason || 'Unavailable');
                lastBlockId = block?.id || lastBlockId;
            });
            if (conflictIds.size > 0) {
                flagAppointmentsForReschedule(
                    Array.from(conflictIds),
                    `${doctor.name} marked time off across ${daysToBlock.length} day(s). Please reschedule conflicting appointments.`,
                    lastBlockId || null
                );
            }
            setHadConflictOnLastSave(conflictIds.size > 0);
            setWarning('');
            setConflicts([]);
            setStep('success');
            setPendingTimeOff(null);
            return;
        }

        const startDate = new Date(start);
        const endDate = new Date(end);
        const overlaps = [...conflicts];
        const timeOffBlock = addDoctorTimeOff(doctor.id, doctor.name, startDate, endDate, reason || 'Unavailable');
        if (overlaps.length > 0) {
            flagAppointmentsForReschedule(
                overlaps.map((c) => c.id),
                `${doctor.name} marked time off ${dayjs(startDate).format('MMM D h:mm A')} - ${dayjs(endDate).format(
                    'h:mm A'
                )}. Please reschedule this appointment.`,
                timeOffBlock?.id
            );
        }
        setHadConflictOnLastSave(overlaps.length > 0);
        setStep('success');
        setWarning('');
        setConflicts([]);
        setPendingTimeOff(null);
    };

    const resetForm = () => {
        setStep('form');
        setError('');
        setWarning('');
        setConflicts([]);
        setHadConflictOnLastSave(false);
        setSelectedDayOffDates([]);
        setPendingTimeOff(null);
    };

    const doctorLabel = doctor?.name ? `Availability for ${doctor.name}` : 'Change Availability';
    const slotPropGetter = (date) => {
        const endDate = dayjs(date).add(60, 'minute').toDate();
        const weekend = dayjs(date).day() === 0 || dayjs(date).day() === 6;
        if (!isWithinClinicHours(date, endDate)) {
            return {
                style: {
                    backgroundColor: weekend ? '#f1f5f9' : '#f3f4f6',
                    color: '#9ca3af'
                }
            };
        }
        return {};
    };

    const onSelecting = (range) => {
        if (view === Views.MONTH) return true;
        const startDate = range.start || range;
        const endDate = range.end || dayjs(startDate).add(60, 'minute').toDate();
        // Allow multi-day drag in week/day without blocking
        if (!dayjs(startDate).isSame(endDate, 'day')) return true;
        return isWithinClinicHours(startDate, endDate);
    };

    const dayPropGetter = (date) => {
        const dayKey = dayjs(date).format('YYYY-MM-DD');
        const isSelected = selectedDayOffDates.includes(dayKey);
        const isWeekend = dayjs(date).day() === 0 || dayjs(date).day() === 6;
        const baseStyle = isWeekend ? { backgroundColor: '#f8fafc' } : {};
        if (isSelected) {
            return {
                style: {
                    ...baseStyle,
                    outline: '2px solid #2563eb',
                    backgroundColor: '#dbeafe'
                }
            };
        }
        return baseStyle ? { style: baseStyle } : {};
    };

    return (
        <AppShell.Main style={{ height: 'calc(100vh - 70px)', overflow: 'hidden' }}>
            <Box style={{ display: 'flex', gap: '1rem', height: '100%', padding: '1rem' }}>
                <Box style={{ width: '360px', flexShrink: 0 }}>
                    <Card withBorder radius="md" shadow="sm" mb="md">
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
                                    {warning && (
                                        <Alert color="yellow" variant="light" title="Conflicts">
                                            <Stack gap={4}>
                                                <Text size="sm">{warning}</Text>
                                                {conflicts.length > 0 && (
                                                    <Stack gap={2}>
                                                        {conflicts.map((c) => (
                                                            <Text key={c.id} size="xs" c="dimmed">
                                                                {c.patientName || 'Appointment'} —{' '}
                                                                {dayjs(c.start).format('MMM D h:mm A')}
                                                            </Text>
                                                        ))}
                                                    </Stack>
                                                )}
                                            </Stack>
                                        </Alert>
                                    )}
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
                                    {hadConflictOnLastSave && (
                                        <Alert color="yellow" variant="light">
                                            Front desk has been notified to reschedule any overlapping appointments.
                                        </Alert>
                                    )}
                                    <Group justify="flex-end">
                                        <Button variant="light" onClick={resetForm}>
                                            Add more
                                        </Button>
                                        <Button onClick={() => router.push('/doctor/dashboard')}>
                                            Back to schedule
                                        </Button>
                                    </Group>
                                </Stack>
                            )}
                        </Stack>
                    </Card>

                    <Card withBorder radius="md" shadow="sm">
                        <Stack gap="sm">
                            <Title order={4}>Unavailable blocks</Title>
                            {doctorTimeOff.length === 0 && <Text c="dimmed">No time off added.</Text>}
                            {doctorTimeOff.map((block) => (
                                <Paper key={block.id} withBorder p="sm">
                                    <Stack gap={2}>
                                        <Text fw={600} size="sm">
                                            {dayjs(block.start).format('MMM D, YYYY h:mm A')}
                                        </Text>
                                        <Text size="xs" c="dimmed">
                                            to {dayjs(block.end).format('MMM D, YYYY h:mm A')}
                                        </Text>
                                        {block.reason && (
                                            <Badge color="gray" variant="light" size="sm">
                                                {block.reason}
                                            </Badge>
                                        )}
                                        <Group justify="flex-end">
                                            <Button
                                                size="xs"
                                                variant="light"
                                                color="red"
                                                onClick={() => deleteAppointment(block.id)}
                                            >
                                                Remove
                                            </Button>
                                        </Group>
                                    </Stack>
                                </Paper>
                            ))}
                        </Stack>
                    </Card>
                </Box>

                <Box style={{ flex: 1, display: 'flex', flexDirection: 'column', minHeight: 0, overflow: 'hidden' }}>
                    <Paper withBorder radius="md" p="md" style={{ flex: 1, minHeight: 0 }}>
                        <Calendar
                            localizer={localizer}
                            events={calendarEvents}
                            startAccessor="start"
                            endAccessor="end"
                            style={{ height: '100%' }}
                            view={view}
                            onView={setView}
                            date={currentDate}
                            onNavigate={(date) => setCurrentDate(date)}
                            eventPropGetter={eventStyleGetter}
                            selectable
                            onSelectSlot={selectSlot}
                            onSelecting={onSelecting}
                            slotPropGetter={slotPropGetter}
                            dayPropGetter={dayPropGetter}
                            min={new Date(1970, 0, 1, 8, 0, 0)}
                            max={new Date(1970, 0, 1, 17, 0, 0)}
                        />
                    </Paper>
                </Box>
            </Box>
        </AppShell.Main>
    );
}
