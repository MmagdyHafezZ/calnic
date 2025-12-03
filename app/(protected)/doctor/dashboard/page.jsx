'use client';

import { useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import dayjs from 'dayjs';
import { Calendar, dayjsLocalizer, Views } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import {
    AppShell,
    Box,
    Button,
    Card,
    Group,
    Stack,
    Title,
    Select,
    Text,
    Paper,
    Badge,
    Modal,
    Divider
} from '@mantine/core';
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react';
import { useAppointmentsStore, useDoctorsStore, usePatientsStore, useAuthStore } from '../../../../store';
import { diagnosticQuestions } from '../../../../data/diagnostic-questions';

const localizer = dayjsLocalizer(dayjs);

export default function DoctorDashboardPage() {
    const router = useRouter();
    const { user, isAuthenticated } = useAuthStore();
    const { appointments, selectedAppointment, selectAppointment, clearSelectedAppointment } = useAppointmentsStore();
    const { doctors, updateDoctorStatus } = useDoctorsStore();
    const { patients } = usePatientsStore();

    const [view, setView] = useState(Views.WEEK);
    const [currentDate, setCurrentDate] = useState(new Date());
    const [status, setStatus] = useState('Appt');
    const [detailsOpen, setDetailsOpen] = useState(false);

    const doctor = useMemo(() => {
        if (!user) return null;
        return doctors.find((d) => d.id === user.doctorId || d.name === user.name);
    }, [user, doctors]);

    const flatDiagnosticQuestions = useMemo(() => {
        return diagnosticQuestions.flatMap((section) =>
            section.questions.map((q) => ({
                id: q.id,
                prompt: q.prompt,
                options: q.options || []
            }))
        );
    }, []);

    useEffect(() => {
        if (!isAuthenticated || !user || user.role !== 'doctor') {
            router.push('/doctor');
        }
    }, [isAuthenticated, user, router]);

    useEffect(() => {
        if (doctor?.status) {
            setStatus(doctor.status);
        }
    }, [doctor]);

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

    const upcoming = useMemo(() => {
        if (!doctor) return [];
        return doctorEvents
            .filter((apt) => dayjs(apt.start).isAfter(dayjs().subtract(1, 'day')))
            .sort((a, b) => dayjs(a.start).valueOf() - dayjs(b.start).valueOf())
            .slice(0, 10);
    }, [doctorEvents]);

    const eventStyleGetter = (event) => {
        let backgroundColor = doctor?.color || '#3b82f6';
        let color = '#ffffff';
        if (event.isTimeOff) {
            backgroundColor = '#fef3c7';
            color = '#92400e';
        }
        const isSelected =
            selectedAppointment &&
            ((selectedAppointment.id && selectedAppointment.id === event.id) ||
                (selectedAppointment.start && event.start && dayjs(selectedAppointment.start).isSame(event.start)));
        if (isSelected) {
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
                padding: '2px 4px',
                fontWeight: 500
            }
        };
    };

    const isWithinClinicHours = (startDate) => {
        const slot = dayjs(startDate);
        const isWeekend = slot.day() === 0 || slot.day() === 6;
        const opening = isWeekend ? slot.hour(9).minute(0) : slot.hour(8).minute(0);
        const closing = isWeekend ? slot.hour(14).minute(0) : slot.hour(17).minute(0);
        return slot.isSameOrAfter(opening) && slot.isBefore(closing);
    };

    const slotPropGetter = (date) => {
        const isWeekend = dayjs(date).day() === 0 || dayjs(date).day() === 6;
        if (!isWithinClinicHours(date)) {
            return {
                style: {
                    backgroundColor: isWeekend ? '#f1f5f9' : '#f3f4f6',
                    color: '#9ca3af'
                }
            };
        }
        return {};
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

    const handleSelectEvent = (event) => {
        selectAppointment(event);
        setDetailsOpen(true);
    };

    const handleUpdateStatus = (value) => {
        if (!doctor) return;
        setStatus(value);
        updateDoctorStatus(doctor.id, value, doctor.color);
    };

    const handleAddTimeOff = () => {
        if (!doctor || !timeOffStart || !timeOffEnd) return;
        addDoctorTimeOff(
            doctor.id,
            doctor.name,
            new Date(timeOffStart),
            new Date(timeOffEnd),
            timeOffReason || 'Time Off'
        );
        setTimeOffOpen(false);
        setTimeOffStart('');
        setTimeOffEnd('');
        setTimeOffReason('Time Off');
    };

    const getPatientDetails = (name) => patients.find((p) => p.name === name);

    const renderAppointmentDetails = (apt) => {
        if (!apt) return null;
        const patient = getPatientDetails(apt.patientName);
        const diagSummary =
            apt.diagnosticAnswers &&
            flatDiagnosticQuestions
                .filter((q) => apt.diagnosticAnswers[q.id])
                .map((q) => {
                    const ans = apt.diagnosticAnswers[q.id];
                    const option = q.options.find((o) => o.value === ans?.value);
                    const baseLabel = ans?.value === 'other' ? 'Other' : option?.label || ans?.value || '—';
                    const answerText =
                        ans?.value === 'other'
                            ? ans?.otherText
                                ? `${option?.label ? `${option.label} — ` : ''}${ans.otherText}`
                                : option?.label || 'Other'
                            : baseLabel;
                    return { id: q.id, prompt: q.prompt, answer: answerText || '—' };
                });
        return (
            <Stack gap="xs">
                <Title order={4}>{apt.patientName}</Title>
                <Text size="sm" c="dimmed">
                    {dayjs(apt.start).format('dddd, MMM D, YYYY h:mm A')} - {dayjs(apt.end).format('h:mm A')}
                </Text>
                {apt.type && (
                    <Badge size="sm" color="blue" variant="light">
                        {apt.type}
                    </Badge>
                )}
                {apt.reason && <Text size="sm">Reason: {apt.reason}</Text>}
                {patient?.email && <Text size="sm">Email: {patient.email}</Text>}
                {patient?.phone && <Text size="sm">Phone: {patient.phone}</Text>}
                {apt.notes && (
                    <>
                        <Divider my="xs" />
                        <Text size="sm">{apt.notes}</Text>
                    </>
                )}
                {apt.diagnosticReason && (
                    <>
                        <Divider my="xs" />
                        <Text size="sm" fw={600}>
                            Diagnostic Reason
                        </Text>
                        <Text size="sm" c="dimmed">
                            {apt.diagnosticReason}
                        </Text>
                    </>
                )}
                {diagSummary && diagSummary.length > 0 && (
                    <>
                        <Divider my="xs" />
                        <Text size="sm" fw={600}>
                            Diagnostic Answers
                        </Text>
                        <Stack gap="xs">
                            {diagSummary.map((item) => (
                                <Box key={item.id}>
                                    <Text size="sm" fw={600}>
                                        {item.prompt}
                                    </Text>
                                    <Text size="sm" c="dimmed">
                                        {item.answer}
                                    </Text>
                                </Box>
                            ))}
                        </Stack>
                    </>
                )}
            </Stack>
        );
    };

    if (!doctor) {
        return null;
    }

    return (
        <AppShell.Main style={{ height: 'calc(100vh - 70px)', overflow: 'hidden' }}>
            <Box style={{ display: 'flex', gap: '1rem', height: '100%', minHeight: 0 }}>
                <Box style={{ width: '260px', flexShrink: 0 }}>
                    <Stack gap="md">
                        <Card withBorder radius="md" shadow="sm">
                            <Stack gap="sm">
                                <Title order={4}>{doctor.name}</Title>
                                <Select
                                    label="Status"
                                    data={['Appt', 'Operating', 'In Break', 'Remote']}
                                    value={status}
                                    onChange={handleUpdateStatus}
                                />
                                <Button variant="outline" onClick={() => router.push('/doctor/availability')}>
                                    Change availability
                                </Button>
                            </Stack>
                        </Card>
                    </Stack>
                </Box>

                <Box style={{ flex: 1, display: 'flex', flexDirection: 'column', minHeight: 0, overflow: 'hidden' }}>
                    <Box
                        style={{
                            flex: 1,
                            backgroundColor: 'white',
                            borderRadius: '8px',
                            padding: '1rem',
                            minHeight: 0
                        }}
                    >
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
                            onSelectEvent={handleSelectEvent}
                            slotPropGetter={slotPropGetter}
                            dayPropGetter={dayPropGetter}
                            min={new Date(1970, 0, 1, 8, 0, 0)}
                            max={new Date(1970, 0, 1, 17, 0, 0)}
                        />
                    </Box>
                </Box>

                <Box
                    style={{
                        width: '320px',
                        flexShrink: 0,
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '1rem',
                        minHeight: 0
                    }}
                >
                    <Card withBorder radius="md" shadow="sm" style={{ flex: 1, minHeight: 0 }}>
                        <Title order={4} mb="sm">
                            Upcoming
                        </Title>
                        <Stack gap="sm" style={{ overflow: 'auto', height: '100%' }}>
                            {upcoming.length === 0 && <Text c="dimmed">No upcoming appointments.</Text>}
                            {upcoming.map((apt) => (
                                <Paper
                                    key={apt.id}
                                    withBorder
                                    p="sm"
                                    style={{ cursor: 'pointer' }}
                                    onClick={() => {
                                        setView(Views.DAY);
                                        setCurrentDate(apt.start);
                                        selectAppointment(apt);
                                        setDetailsOpen(true);
                                    }}
                                >
                                    <Text fw={600} size="sm">
                                        {apt.patientName}
                                    </Text>
                                    <Text size="xs" c="dimmed">
                                        {dayjs(apt.start).format('MMM D, h:mm A')}
                                    </Text>
                                </Paper>
                            ))}
                        </Stack>
                    </Card>
                </Box>
            </Box>

            <Modal
                opened={detailsOpen && !!selectedAppointment}
                onClose={() => setDetailsOpen(false)}
                title={selectedAppointment?.isTimeOff ? 'Time off details' : 'Appointment details'}
                centered
                size="lg"
            >
                {selectedAppointment ? (
                    <Stack gap="sm">
                        {selectedAppointment.isTimeOff ? (
                            <>
                                <Text fw={600}>
                                    {selectedAppointment.doctorName || doctor?.name || 'Doctor'} - Time off
                                </Text>
                                {selectedAppointment.reason && <Text c="dimmed">{selectedAppointment.reason}</Text>}
                                <Text size="sm">
                                    {dayjs(selectedAppointment.start).format('dddd, MMM D, YYYY h:mm A')} -{' '}
                                    {dayjs(selectedAppointment.end).format('h:mm A')}
                                </Text>
                            </>
                        ) : (
                            renderAppointmentDetails(selectedAppointment)
                        )}
                    </Stack>
                ) : (
                    <Text c="dimmed" size="sm">
                        Select an appointment to view details.
                    </Text>
                )}
            </Modal>
        </AppShell.Main>
    );
}
