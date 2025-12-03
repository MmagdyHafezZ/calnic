'use client';

import { useState, useCallback, useEffect, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import {
    Radio,
    Group,
    Box,
    Title,
    Button,
    Card,
    Stack,
    Alert,
    Text,
    Badge,
    SimpleGrid,
    Paper,
    Textarea,
    ScrollArea,
    Tooltip,
    ActionIcon
} from '@mantine/core';
import { Calendar, dayjsLocalizer, Views } from 'react-big-calendar';
import dayjs from 'dayjs';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './calendar.css';
import { useAppointmentsStore, useDoctorsStore, useUIStore } from '../../../store';
import { useSearchParams } from 'next/navigation';
import { IconInfoCircle } from '@tabler/icons-react';

const APPOINTMENT_DURATION_BY_TYPE = {
    'Walk-in': 20,
    'Follow-up': 20,
    Standard: 20,
    'Full Exam': 40
};

const getDurationForType = (type) => APPOINTMENT_DURATION_BY_TYPE[type] || null;
const APPOINTMENT_OPTIONS = [
    { value: 'Walk-in', label: 'Walk-in', info: 'Quick visit for immediate needs', duration: '20 minutes' },
    { value: 'Follow-up', label: 'Follow-up', info: 'Post-visit or results review', duration: '20 minutes' },
    { value: 'Standard', label: 'Standard', info: 'General consultation', duration: '20 minutes' },
    { value: 'Full Exam', label: 'Full Exam', info: 'Comprehensive exam', duration: '40 minutes' },
    {
        value: 'Custom',
        label: 'Custom',
        info: 'Set a custom duration by dragging on the calendar',
        duration: 'Manual'
    }
];

export default function SchedulePage() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const localizer = dayjsLocalizer(dayjs);

    const [view, setView] = useState(Views.MONTH);
    const [currentDate, setCurrentDate] = useState(new Date());
    const [selectedDoctor, setSelectedDoctor] = useState('');
    const [appointmentType, setAppointmentType] = useState('Standard');
    const [bookingDetails, setBookingDetails] = useState(null);
    const [duration, setDuration] = useState(APPOINTMENT_DURATION_BY_TYPE.Standard);
    const [manualSymptoms, setManualSymptoms] = useState('');
    const [cannotBookMessage, setCannotBookMessage] = useState('');

    const selectedAppointment = useAppointmentsStore((s) => s.selectedAppointment);
    const selectAppointment = useAppointmentsStore((s) => s.selectAppointment);
    const confirmedAppointments = useAppointmentsStore((s) => s.appointments) || [];

    const doctors = useDoctorsStore((s) => s.doctors) || [];
    const diagnosticRecommendation = useUIStore((s) => s.diagnosticRecommendation);
    const diagnosticAnswers = useUIStore((s) => s.diagnosticAnswers);
    const clearDiagnosticRecommendation = useUIStore((s) => s.clearDiagnosticRecommendation);
    const shouldShowManualSymptoms = useMemo(() => {
        const hasAnswers = diagnosticAnswers && Object.keys(diagnosticAnswers || {}).length > 0;
        return !diagnosticRecommendation && !hasAnswers;
    }, [diagnosticAnswers, diagnosticRecommendation]);

    const selectedDoctorObj = useMemo(() => doctors.find((d) => d.name === selectedDoctor), [doctors, selectedDoctor]);

    useEffect(() => {
        try {
            const saved = JSON.parse(localStorage.getItem('bookingDetails') || 'null');
            setBookingDetails(saved);
            if (saved) {
                const type = saved.appointmentType || saved.type || 'Standard';
                setAppointmentType(type);
                const mapped = getDurationForType(type);
                if (saved.symptoms) {
                    setManualSymptoms(saved.symptoms);
                }
                if (mapped) {
                    setDuration(mapped);
                } else if (saved?.duration && Number.isFinite(saved.duration)) {
                    setDuration(saved.duration);
                } else {
                    setDuration((prev) => prev || APPOINTMENT_DURATION_BY_TYPE.Standard);
                }
            }
        } catch (e) {
            console.error('Failed to load booking details', e);
        }
    }, []);

    useEffect(() => {
        if (!shouldShowManualSymptoms) {
            setManualSymptoms('');
        }
    }, [shouldShowManualSymptoms]);

    const handleAppointmentTypeChange = (type) => {
        setAppointmentType(type);
        const mapped = type === 'Custom' ? null : getDurationForType(type);
        const nextDuration = mapped || duration || APPOINTMENT_DURATION_BY_TYPE.Standard;
        if (mapped) {
            setDuration(mapped);
        }

        if (selectedAppointment) {
            const start =
                selectedAppointment.start instanceof Date
                    ? selectedAppointment.start
                    : new Date(selectedAppointment.start);
            const end =
                selectedAppointment.end instanceof Date ? selectedAppointment.end : new Date(selectedAppointment.end);
            const updatedEnd = mapped && start ? dayjs(start).add(mapped, 'minute').toDate() : end;
            selectAppointment({
                ...selectedAppointment,
                appointmentType: type,
                duration: nextDuration,
                start,
                end: updatedEnd || end
            });
        }
    };

    useEffect(() => {
        if (diagnosticRecommendation?.doctorName) {
            setSelectedDoctor(diagnosticRecommendation.doctorName);
        }
    }, [diagnosticRecommendation]);

    useEffect(() => {
        const doctorId = searchParams.get('doctorId');
        if (doctorId) {
            const doc = doctors.find((d) => String(d.id) === doctorId);
            if (doc) {
                setSelectedDoctor(doc.name);
            }
        }
    }, [searchParams, doctors]);

    const normalizedAppointments = useMemo(
        () =>
            confirmedAppointments.map((ev) => ({
                ...ev,
                start: ev.start instanceof Date ? ev.start : new Date(ev.start),
                end: ev.end instanceof Date ? ev.end : new Date(ev.end)
            })),
        [confirmedAppointments]
    );

    const doctorEvents = useMemo(() => {
        if (!selectedDoctor) return normalizedAppointments;
        return normalizedAppointments.filter((a) => a.doctorName === selectedDoctor);
    }, [normalizedAppointments, selectedDoctor]);

    const hasPendingBooking = !!selectedAppointment;

    const normalizedSelectedAppointment = useMemo(() => {
        if (!selectedAppointment) return null;
        const start =
            selectedAppointment.start instanceof Date ? selectedAppointment.start : new Date(selectedAppointment.start);
        const end =
            selectedAppointment.end instanceof Date ? selectedAppointment.end : new Date(selectedAppointment.end);
        if (Number.isNaN(start?.getTime()) || Number.isNaN(end?.getTime())) return null;
        return { ...selectedAppointment, start, end };
    }, [selectedAppointment]);

    const [rescheduleTarget, setRescheduleTarget] = useState(null);

    useEffect(() => {
        if (normalizedSelectedAppointment?.needsReschedule || normalizedSelectedAppointment?.id) {
            setRescheduleTarget(normalizedSelectedAppointment);
        }
    }, [normalizedSelectedAppointment]);

    const pendingEvent = useMemo(() => {
        if (normalizedSelectedAppointment) {
            return {
                ...normalizedSelectedAppointment,
                title: `${normalizedSelectedAppointment.patientName || 'Patient'} (Pending)`,
                start: normalizedSelectedAppointment.start,
                end: normalizedSelectedAppointment.end,
                client: true,
                doctorName: selectedDoctor || normalizedSelectedAppointment.doctorName
            };
        }
        return null;
    }, [normalizedSelectedAppointment, selectedDoctor]);
    const hasConflict = useCallback(
        (start, end) => {
            return doctorEvents.some((ev) => {
                if (ev.client) return false;
                if (rescheduleTarget?.id && ev.id === rescheduleTarget.id) return false;
                const evStart = ev.start instanceof Date ? ev.start : new Date(ev.start);
                const evEnd = ev.end instanceof Date ? ev.end : new Date(ev.end);
                return start < evEnd && end > evStart;
            });
        },
        [doctorEvents, rescheduleTarget?.id]
    );
    const isSlotWithinHours = (start, end) => {
        const slot = dayjs(start);
        const slotEnd = dayjs(end);
        const isWeekend = slot.day() === 0 || slot.day() === 6;
        const opening = isWeekend ? slot.hour(9).minute(0) : slot.hour(8).minute(0);
        const closing = isWeekend ? slot.hour(14).minute(0) : slot.hour(17).minute(0);
        return slot.isSameOrAfter(opening) && slotEnd.isSameOrBefore(closing);
    };

    useEffect(() => {
        if (!rescheduleTarget) return;
        if (rescheduleTarget.doctorName) {
            setSelectedDoctor(rescheduleTarget.doctorName);
        }
        const resType = rescheduleTarget.appointmentType || rescheduleTarget.type;
        const mapped = getDurationForType(resType);
        if (resType) {
            setAppointmentType(resType);
        }
        if (rescheduleTarget.start && rescheduleTarget.end) {
            const minutes = Math.max(5, dayjs(rescheduleTarget.end).diff(dayjs(rescheduleTarget.start), 'minute'));
            if (mapped) {
                setDuration(mapped);
            } else {
                setDuration(minutes);
            }
        } else if (mapped) {
            setDuration(mapped);
        }
    }, [rescheduleTarget]);
    const events = useMemo(() => {
        return pendingEvent ? [pendingEvent] : [];
    }, [pendingEvent]);

    const eventStyleGetter = (event) => {
        let backgroundColor = '#fef3c7';
        let color = '#92400e';
        if (event.client) {
            backgroundColor = '#bfdbfe';
            color = '#1d4ed8';
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

    const createPendingBooking = useCallback(
        (start, endOverride) => {
            setCannotBookMessage('');
            const booking = rescheduleTarget || bookingDetails;
            if (!booking) {
                setCannotBookMessage('No booking details found. Please complete the booking form first.');
                return;
            }
            if (!selectedDoctor) {
                setCannotBookMessage('Select a doctor first.');
                return;
            }

            const startDate = start instanceof Date ? start : new Date(start);
            const endOverrideDate = endOverride
                ? endOverride instanceof Date
                    ? endOverride
                    : new Date(endOverride)
                : null;
            const activeType = appointmentType || booking.appointmentType || booking.type || 'Standard';
            const mappedDuration = activeType === 'Custom' ? null : getDurationForType(activeType);
            let effectiveDuration = duration || APPOINTMENT_DURATION_BY_TYPE.Standard;

            if (mappedDuration) {
                effectiveDuration = mappedDuration;
                if (duration !== mappedDuration) {
                    setDuration(mappedDuration);
                }
            } else if (endOverrideDate) {
                const diffMinutes = dayjs(endOverrideDate).diff(dayjs(startDate), 'minute');
                if (Number.isFinite(diffMinutes) && diffMinutes > 0) {
                    effectiveDuration = Math.max(5, diffMinutes);
                    if (duration !== effectiveDuration) {
                        setDuration(effectiveDuration);
                    }
                }
            }

            const endDate = dayjs(startDate).add(effectiveDuration, 'minute').toDate();

            if (dayjs(startDate).isBefore(dayjs())) {
                setCannotBookMessage('Cannot book a time that has already passed.');
                return;
            }

            if (!isSlotWithinHours(startDate, endDate)) {
                setCannotBookMessage('Selected time is outside clinic hours.');
                return;
            }

            if (hasConflict(startDate, endDate)) {
                setCannotBookMessage('Selected time conflicts with an existing appointment. Choose another slot.');
                return;
            }

            const pending = {
                patientName: booking.patientName || 'Patient',
                appointmentType: activeType || booking.appointmentType || booking.type || 'Booked',
                duration: effectiveDuration,
                start: startDate,
                end: endDate,
                doctorName: selectedDoctor || booking.doctorName,
                doctorId: selectedDoctorObj?.id || booking.doctorId,
                notes: booking.notes || '',
                medicalHistory: booking.medicalHistory || '',
                symptoms: manualSymptoms || booking.symptoms || '',
                diagnosticAnswers: diagnosticAnswers || {},
                diagnosticReason: diagnosticRecommendation?.reason || '',
                originalAppointmentId: rescheduleTarget?.id || null
            };
            try {
                selectAppointment(pending);
            } catch (e) {
                console.error('Failed to save pending booking', e);
                setCannotBookMessage('Failed to prepare booking. Please try again.');
            }
        },
        [
            bookingDetails,
            hasConflict,
            selectedDoctor,
            duration,
            rescheduleTarget,
            selectedDoctorObj,
            diagnosticAnswers,
            diagnosticRecommendation?.reason,
            appointmentType,
            manualSymptoms
        ]
    );

    const handleSelectSlot = useCallback(
        (slotInfo) => {
            if (!selectedDoctor) {
                setCannotBookMessage('Select a doctor to place a booking.');
                return;
            }

            if (view === Views.MONTH || view === Views.WEEK) {
                setCurrentDate(slotInfo.start);
                setView(Views.DAY);
                return;
            }

            if (view === Views.DAY) {
                createPendingBooking(slotInfo.start, slotInfo.end);
            }
        },
        [selectedDoctor, view, createPendingBooking]
    );

    const availableSlots = useMemo(() => {
        if (!selectedDoctor) return [];
        const today = dayjs().startOf('day');
        const baseDay = dayjs(currentDate).startOf('day');
        const base = baseDay.isBefore(today) ? today : baseDay;
        const isWeekend = base.day() === 0 || base.day() === 6;
        const startHour = isWeekend ? 9 : 8;
        const endHour = isWeekend ? 14 : 17;
        const slots = [];
        const mappedDuration = appointmentType === 'Custom' ? null : getDurationForType(appointmentType);
        const effectiveDuration = mappedDuration || duration;

        for (let h = startHour; h < endHour; h++) {
            for (const m of [0, 20, 40]) {
                const start = base.hour(h).minute(m).toDate();
                const end = dayjs(start).add(effectiveDuration, 'minute').toDate();
                if (!isSlotWithinHours(start, end)) continue;
                if (dayjs(start).isBefore(dayjs())) continue;
                if (hasConflict(start, end)) continue;
                slots.push({ start, end });
            }
        }
        return slots;
    }, [selectedDoctor, currentDate, duration, hasConflict, appointmentType]);

    const getPreviewDuration = useCallback(
        (range) => {
            const start = range.start || range;
            const mapped = appointmentType === 'Custom' ? null : getDurationForType(appointmentType);
            if (mapped) return mapped;
            if (range.end) {
                const diff = dayjs(range.end).diff(dayjs(start), 'minute');
                if (Number.isFinite(diff) && diff > 0) {
                    return diff;
                }
            }
            return duration;
        },
        [appointmentType, duration]
    );

    const slotPropGetter = (date) => {
        const previewDuration = getPreviewDuration({ start: date });
        const end = dayjs(date).add(previewDuration, 'minute').toDate();
        const isWeekend = dayjs(date).day() === 0 || dayjs(date).day() === 6;
        const allowed = selectedDoctor && isSlotWithinHours(date, end) && !hasConflict(date, end);
        if (!allowed) {
            return {
                style: {
                    backgroundColor: isWeekend ? '#f1f5f9' : '#f3f4f6',
                    color: '#9ca3af'
                }
            };
        }
        return {};
    };

    const handleOnSelecting = (range) => {
        const start = range.start || range;
        const effectiveDuration = getPreviewDuration(range);
        const tentativeEnd = dayjs(start).add(effectiveDuration, 'minute').toDate();
        return selectedDoctor && isSlotWithinHours(start, tentativeEnd) && !hasConflict(start, tentativeEnd);
    };

    const dayPropGetter = (date) => {
        const isWeekend = dayjs(date).day() === 0 || dayjs(date).day() === 6;
        if (isWeekend) {
            return {
                style: {
                    backgroundColor: '#f8fafc'
                }
            };
        }
        return {};
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

    const handleQuickSelect = (slot) => {
        setView(Views.DAY);
        setCurrentDate(slot.start);
        createPendingBooking(slot.start, slot.end);
    };

    const doctorLabel = (doc) => (
        <Group gap="xs">
            <Badge color={doc.colorName || 'blue'} variant="light">
                {doc.status}
            </Badge>
            <Text>{doc.name}</Text>
        </Group>
    );

    const selectedDoctorValue = typeof selectedDoctor === 'string' ? selectedDoctor : '';

    return (
        <Box style={{ display: 'flex', padding: '2rem', gap: '2rem', marginTop: '4rem' }}>
            <ScrollArea.Autosize
                shadow="sm"
                padding="lg"
                withBorder
                style={{ width: '28%', minWidth: '260px', height: '80vh', display: 'flex' }}
            >
                <Stack gap="lg" style={{ flex: 1, overflowY: 'auto' }}>
                    <Title order={3}>Select Doctor</Title>

                    {diagnosticRecommendation && (
                        <Alert
                            title="Recommended"
                            color="blue"
                            radius="md"
                            styles={{ title: { fontWeight: 700 } }}
                            icon={
                                <Badge color="blue" variant="filled">
                                    AI
                                </Badge>
                            }
                        >
                            <Stack gap="xs">
                                <Text fw={600}>{diagnosticRecommendation.doctorName}</Text>
                                <Text size="sm" c="dimmed">
                                    {diagnosticRecommendation.reason}
                                </Text>
                                <Group gap="xs">
                                    <Button
                                        size="xs"
                                        onClick={() => setSelectedDoctor(diagnosticRecommendation.doctorName)}
                                    >
                                        Use this doctor
                                    </Button>
                                    <Button size="xs" variant="subtle" onClick={() => clearDiagnosticRecommendation()}>
                                        Dismiss
                                    </Button>
                                </Group>
                            </Stack>
                        </Alert>
                    )}

                    <Radio.Group
                        name="appointment-doctor"
                        value={selectedDoctorValue}
                        onChange={(value) => setSelectedDoctor(value || '')}
                    >
                        <Stack gap="sm">
                            {doctors.map((doc) => (
                                <Radio
                                    key={doc.id}
                                    value={doc.name}
                                    label={doctorLabel(doc)}
                                    size="md"
                                    styles={{ label: { width: '100%' } }}
                                />
                            ))}
                        </Stack>
                    </Radio.Group>
                    <Paper withBorder radius="md" p="md">
                        <Title order={5} mb="xs">
                            Appointment Type
                        </Title>
                        <Radio.Group value={appointmentType} onChange={handleAppointmentTypeChange}>
                            <Stack gap="xs">
                                {APPOINTMENT_OPTIONS.map((opt) => (
                                    <Radio
                                        key={opt.value}
                                        value={opt.value}
                                        styles={{ label: { width: '100%' } }}
                                        label={
                                            <Group gap={6}>
                                                <Text fw={600}>{opt.label}</Text>
                                                <Tooltip
                                                    label={`${opt.info} • ${opt.duration}`}
                                                    withArrow
                                                    position="right"
                                                >
                                                    <ActionIcon size="sm" variant="subtle" color="gray">
                                                        <IconInfoCircle size={14} />
                                                    </ActionIcon>
                                                </Tooltip>
                                            </Group>
                                        }
                                    />
                                ))}
                            </Stack>
                        </Radio.Group>
                    </Paper>
                    <Button
                        variant="light"
                        color="gray"
                        onClick={() => {
                            selectAppointment(null);
                            setRescheduleTarget(null);
                            localStorage.removeItem('bookingDetails');
                        }}
                    >
                        Clear selection
                    </Button>

                    <Paper withBorder radius="md" p="md" style={{ flex: 1, overflow: 'auto' }}>
                        <Title order={4} mb="xs">
                            Quick Times ({dayjs(currentDate).format('MMM D')}) — {duration} min
                        </Title>
                        {selectedDoctor ? (
                            availableSlots.length > 0 ? (
                                <SimpleGrid cols={2} spacing="xs">
                                    {availableSlots.slice(0, 8).map((slot) => (
                                        <Button
                                            key={slot.start.toISOString()}
                                            variant="light"
                                            size="xs"
                                            onClick={() => handleQuickSelect(slot)}
                                        >
                                            {dayjs(slot.start).format('h:mm A')}
                                        </Button>
                                    ))}
                                </SimpleGrid>
                            ) : (
                                <Text size="sm" c="dimmed">
                                    No available times for this day. Pick another day on the calendar.
                                </Text>
                            )
                        ) : (
                            <Text size="sm" c="dimmed">
                                Select a doctor to view available times.
                            </Text>
                        )}
                    </Paper>

                    {shouldShowManualSymptoms && (
                        <Paper withBorder radius="md" p="md">
                            <Title order={5} mb="xs">
                                Symptoms (optional)
                            </Title>
                            <Text size="sm" c="dimmed" mb="xs">
                                Provide symptoms here when you skip the diagnostic questionnaire.
                            </Text>
                            <Textarea
                                placeholder="Add symptoms..."
                                minRows={3}
                                autosize
                                value={manualSymptoms}
                                onChange={(e) => setManualSymptoms(e.target.value)}
                            />
                        </Paper>
                    )}
                </Stack>
            </ScrollArea.Autosize>

            <Box style={{ width: '72%', display: 'flex', flexDirection: 'column' }}>
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
                        events={events}
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
                        dayPropGetter={dayPropGetter}
                        min={new Date(1970, 0, 1, 8, 0, 0)}
                        max={new Date(1970, 0, 1, 17, 0, 0)}
                    />
                    {!selectedDoctor && (
                        <Box
                            style={{
                                position: 'absolute',
                                inset: 0,
                                backgroundColor: 'rgba(245,245,245,0.9)',
                                backdropFilter: 'blur(2px)',
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
                        <Box style={{ position: 'absolute', top: 12, right: 12, width: 360, zIndex: 30 }}>
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
