'use client';
import { useRouter } from 'next/navigation';
import { useEffect, useState, useCallback, useMemo } from 'react';
import { Calendar, dayjsLocalizer } from 'react-big-calendar';
import dayjs from 'dayjs';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './calendar.css';
import {
    AppShell,
    Box,
    Button,
    Badge,
    Stack,
    Group,
    Text,
    Title,
    ActionIcon,
    Menu,
    TextInput,
    Paper,
    Avatar,
    ScrollArea,
    Modal,
    Checkbox
} from '@mantine/core';
import {
    IconCalendar,
    IconPlus,
    IconUser,
    IconSearch,
    IconChevronLeft,
    IconChevronRight,
    IconMenu2,
    IconStethoscope,
    IconUsers,
    IconX
} from '@tabler/icons-react';
import { useAuthStore, useAppointmentsStore, useDoctorsStore, usePatientsStore, useUIStore } from '../../../store';
import BookingModal from '../../../components/BookingModal';

const localizer = dayjsLocalizer(dayjs);

export default function DashboardPage() {
    const router = useRouter();

    const { user, isAuthenticated, logout } = useAuthStore();
    const {
        appointments,
        getAppointmentsInRange,
        selectedAppointment,
        selectAppointment,
        clearSelectedAppointment,
        clearRescheduleFlag
    } = useAppointmentsStore();
    const { doctors } = useDoctorsStore();
    const { patients } = usePatientsStore();
    const {
        calendarView,
        currentDate,
        setCalendarView,
        navigateCalendar,
        setCurrentDate,
        patientSearchQuery,
        setPatientSearchQuery,
        selectedDoctors,
        toggleSelectedDoctor,
        selectAllDoctors,
        isAppointmentDetailsModalOpen,
        isBookingModalOpen,
        openAppointmentDetailsModal,
        closeAppointmentDetailsModal,
        openBookingModal,
        closeBookingModal
    } = useUIStore();

    useEffect(() => {
        if (!isAuthenticated) {
            router.push('/');
        }
    }, [isAuthenticated, router]);

    // Initialize currentDate on client side to avoid hydration mismatch
    useEffect(() => {
        if (!currentDate) {
            setCurrentDate(new Date());
        }
    }, [currentDate, setCurrentDate]);

    // Initialize selected doctors with all doctors on mount
    useEffect(() => {
        if (doctors.length > 0 && selectedDoctors.length === 0) {
            selectAllDoctors(doctors.map((d) => d.id));
        }
    }, [doctors, selectedDoctors, selectAllDoctors]);

    const handleSelectEvent = (event) => {
        if (event.start) {
            setCalendarView('day');
            setCurrentDate(event.start);
        }
        selectAppointment(event);
        openAppointmentDetailsModal();
    };

    const handleCloseAppointmentModal = () => {
        closeAppointmentDetailsModal();
        clearSelectedAppointment();
    };

    const eventStyleGetter = (event) => {
        let backgroundColor = '#e5e7eb'; // default gray
        let color = '#374151'; // default dark gray
        let border = 'none';
        const flagged = event.needsReschedule;

        const isSelected =
            selectedAppointment &&
            ((selectedAppointment.id && selectedAppointment.id === event.id) ||
                (selectedAppointment.start && event.start && dayjs(selectedAppointment.start).isSame(event.start)));

        // Special styling for time-off blocks
        if (event.isTimeOff) {
            const doctor = doctors.find((d) => d.id === event.doctorId);
            if (doctor) {
                backgroundColor = doctor.color;
                color = '#ffffff';
                border = `3px solid ${doctor.color}`;
            } else {
                backgroundColor = '#6b7280';
                color = '#ffffff';
                border = '3px solid #4b5563';
            }
            return {
                style: {
                    backgroundColor: backgroundColor + '20', // Add transparency
                    color: '#1f2937',
                    border: border,
                    borderRadius: '4px',
                    fontSize: '0.75rem',
                    padding: '2px 4px',
                    fontWeight: '600',
                    fontStyle: 'italic'
                }
            };
        }

        if (isSelected) {
            return {
                style: {
                    backgroundColor: '#bfdbfe',
                    color: '#1d4ed8',
                    border: '2px solid #2563eb',
                    borderRadius: '4px',
                    fontSize: '0.75rem',
                    padding: '2px 4px',
                    fontWeight: 600
                }
            };
        }

        if (flagged) {
            return {
                style: {
                    backgroundColor: '#fef2f2',
                    color: '#b91c1c',
                    border: '1px solid #ef4444',
                    borderRadius: '999px',
                    fontSize: '0.75rem',
                    padding: '4px 8px',
                    fontWeight: 700,
                    boxShadow: '0 0 0 2px rgba(239,68,68,0.15)'
                }
            };
        }

        // If appointment has a doctor, use doctor's color
        if (event.doctorId) {
            const doctor = doctors.find((d) => d.id === event.doctorId);
            if (doctor) {
                backgroundColor = doctor.color;
                color = '#ffffff'; // white text for colored backgrounds
            }
        } else {
            // Fall back to type-based coloring for appointments without doctors
            if (event.type === 'Morning Appt Available') {
                backgroundColor = '#fef3c7';
                color = '#92400e';
            } else if (event.type === 'Afternoon Appt Full') {
                backgroundColor = '#fee2e2';
                color = '#991b1b';
            } else if (event.type === 'Afternoon Appt Available') {
                backgroundColor = '#d1fae5';
                color = '#065f46';
            }
        }

        return {
            style: {
                backgroundColor,
                color,
                border: 'none',
                borderRadius: '4px',
                fontSize: '0.75rem',
                padding: '2px 4px',
                fontWeight: '500'
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

    // Filter appointments based on selected doctors and patient search
    const getFilteredAppointments = () => {
        let filtered = appointments;

        // Filter by selected doctors
        if (selectedDoctors.length > 0 && selectedDoctors.length < doctors.length) {
            filtered = filtered.filter((apt) => {
                if (!apt.doctorId) return true; // Show appointments without doctors
                return selectedDoctors.includes(apt.doctorId);
            });
        }

        if (patientSearchQuery) {
            const query = patientSearchQuery.toLowerCase();
            filtered = filtered.filter(
                (apt) => apt.patientName?.toLowerCase().includes(query) || apt.title?.toLowerCase().includes(query)
            );
        }

        return filtered;
    };

    if (!isAuthenticated || !user) {
        return (
            <Box style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
                <Text c="dimmed">Loading...</Text>
            </Box>
        );
    }

    // Get today's appointments (excluding time-off blocks)
    const todayAppointments =
        calendarView === 'day'
            ? getFilteredAppointments().filter((apt) => {
                  return (
                      apt.patientName &&
                      dayjs(apt.start).format('YYYY-MM-DD') === dayjs(currentDate).format('YYYY-MM-DD')
                  );
              })
            : calendarView === 'week'
            ? getFilteredAppointments().filter((apt) => {
                  return (
                      apt.patientName &&
                      dayjs(apt.start).isSame(currentDate, 'week') &&
                      dayjs(apt.start).format('YYYY-MM-DD') !== dayjs().format('YYYY-MM-DD')
                  );
              })
            : calendarView === 'month'
            ? getFilteredAppointments().filter((apt) => {
                  return (
                      apt.patientName &&
                      dayjs(apt.start).format('YYYY-MM') === dayjs(currentDate).format('YYYY-MM') &&
                      dayjs(apt.start).format('YYYY-MM-DD') !== dayjs().format('YYYY-MM-DD')
                  );
              })
            : getFilteredAppointments().filter((apt) => {
                  return (
                      apt.patientName &&
                      dayjs(apt.start).format('YYYY') === dayjs(currentDate).format('YYYY') &&
                      dayjs(apt.start).format('YYYY-MM-DD') !== dayjs().format('YYYY-MM-DD')
                  );
              });

    const getCalendarTitle = () => {
        if (!currentDate) return '';
        const date = dayjs(currentDate);
        switch (calendarView) {
            case 'day':
                return date.format('dddd, MMMM D, YYYY');
            case 'week':
                const startOfWeek = date.startOf('week');
                const endOfWeek = date.endOf('week');
                if (startOfWeek.month() === endOfWeek.month()) {
                    return `${startOfWeek.format('MMMM D')} - ${endOfWeek.format('D, YYYY')}`;
                } else {
                    return `${startOfWeek.format('MMM D')} - ${endOfWeek.format('MMM D, YYYY')}`;
                }
            case 'month':
                return date.format('MMMM YYYY');
            case 'agenda':
                return date.format('YYYY');
            default:
                return date.format('MMMM YYYY');
        }
    };
    const getCalendarAppointmentData = (appointments, patientSearchQuery, selectedDoctors, allDoctorIds) => {
        const q = (patientSearchQuery ?? '').trim().toLowerCase();

        const shouldFilterDoctors = selectedDoctors?.length > 0 && selectedDoctors?.length < allDoctorIds.length;

        return appointments
            .filter((apt) => {
                if (shouldFilterDoctors && apt.doctorId && !selectedDoctors?.includes(apt.doctorId)) {
                    return false;
                }

                if (q) {
                    const haystack = `${apt.patientName ?? ''} ${apt.title ?? ''}`.toLowerCase();
                    if (!haystack.includes(q)) return false;
                }

                return true;
            })
            .map((apt) => {
                const start = apt.start instanceof Date ? apt.start : new Date(apt.start);
                const end = apt.end instanceof Date ? apt.end : new Date(apt.end);

                if (Number.isNaN(start.getTime()) || Number.isNaN(end.getTime())) return null;

                return {
                    ...apt,
                    start,
                    end,
                    title: apt.title ?? apt.patientName ?? (apt.type === 'Time Off' ? 'Time Off' : 'Appointment'),
                    isTimeOff: apt.type === 'Time Off'
                };
            })
            .filter(Boolean);
    };

    const rescheduleAppointments = useMemo(
        () => appointments.filter((apt) => apt.needsReschedule),
        [appointments]
    );

    const goToReschedule = (apt) => {
        if (apt.start) {
            setCalendarView('day');
            setCurrentDate(apt.start);
        }
        selectAppointment(apt);
        const doctorParam = apt.doctorId ? `?doctorId=${apt.doctorId}` : '';
        router.push(`/schedule-appointment${doctorParam}`);
    };

    return (
        <>
            <AppShell.Main style={{ height: 'calc(100vh - 70px)', overflow: 'hidden' }}>
                <Box
                    style={{
                        display: 'flex',
                        gap: '1rem',
                        height: '100%',
                        width: '100%',
                        overflow: 'hidden',
                        minHeight: 0
                    }}
                >
                    <Box style={{ width: '220px', flexShrink: 0 }}>
                        <Stack gap="md">
                            <Button
                                size="lg"
                                radius="xl"
                                leftSection={<IconCalendar size={20} />}
                                fullWidth
                                onClick={() => router.push('/book-appointment')}
                            >
                                Book
                            </Button>
                            <Button
                                size="lg"
                                radius="xl"
                                variant="light"
                                leftSection={<IconPlus size={20} />}
                                fullWidth
                                onClick={() => (window.location.href = '/new-patient')}
                            >
                                Add Patient
                            </Button>

                            {rescheduleAppointments.length > 0 && (
                                <Paper p="md" withBorder style={{ backgroundColor: '#fef2f2', borderColor: '#ef4444' }}>
                                    <Group justify="space-between" mb="xs">
                                        <Group gap="xs">
                                            <IconCalendar size={18} color="#b91c1c" />
                                            <Text fw={700} size="sm" c="red.8">
                                                Needs reschedule
                                            </Text>
                                        </Group>
                                        <Badge color="red" variant="filled">
                                            {rescheduleAppointments.length}
                                        </Badge>
                                    </Group>
                                    <Stack gap="sm">
                                        {rescheduleAppointments.map((apt) => (
                                            <Box
                                                key={apt.id}
                                                style={{
                                                    borderBottom: '1px solid #fecdd3',
                                                    paddingBottom: 8,
                                                    cursor: 'pointer'
                                                }}
                                                onClick={() => {
                                                    setCalendarView('day');
                                                    setCurrentDate(apt.start);
                                                    selectAppointment(apt);
                                                    openAppointmentDetailsModal();
                                                }}
                                            >
                                                <Stack gap={4}>
                                                    <Group justify="space-between">
                                                        <Text fw={700} size="sm" c="red.8">
                                                            {apt.patientName || 'Appointment'}
                                                        </Text>
                                                        {apt.doctorName && (
                                                            <Badge size="xs" color="red" variant="light">
                                                                {apt.doctorName}
                                                            </Badge>
                                                        )}
                                                    </Group>
                                                    <Text size="xs" c="dimmed">
                                                        {dayjs(apt.start).format('MMM D, h:mm A')} - {dayjs(apt.end).format('h:mm A')}
                                                    </Text>
                                                    {apt.rescheduleNote && (
                                                        <Text size="xs" c="red.8">
                                                            {apt.rescheduleNote}
                                                        </Text>
                                                    )}
                                                    <Group gap="xs" mt={4}>
                                                        <Button size="xs" color="red" onClick={() => goToReschedule(apt)}>
                                                            Reschedule
                                                        </Button>
                                                        <Button
                                                            size="xs"
                                                            variant="outline"
                                                            color="red"
                                                            onClick={() => clearRescheduleFlag(apt.id)}
                                                        >
                                                            Dismiss
                                                        </Button>
                                                    </Group>
                                                </Stack>
                                            </Box>
                                        ))}
                                    </Stack>
                                </Paper>
                            )}

                            <Paper p="md" mt="xl" withBorder>
                                <Group mb="md" justify="space-between">
                                    <Group gap="xs">
                                        <IconUsers size={20} />
                                        <Text fw={600} size="sm">
                                            Filter by Doctor
                                        </Text>
                                    </Group>
                                    {selectedDoctors.length > 0 && selectedDoctors.length < doctors.length && (
                                        <ActionIcon
                                            size="sm"
                                            variant="subtle"
                                            onClick={() => selectAllDoctors(doctors.map((d) => d.id))}
                                            title="Select All"
                                        >
                                            <IconX size={14} />
                                        </ActionIcon>
                                    )}
                                </Group>
                                <Stack gap="xs">
                                    {doctors.map((doctor) => (
                                        <Group key={doctor.id} justify="space-between">
                                            <Checkbox
                                                checked={selectedDoctors.includes(doctor.id)}
                                                onChange={() => toggleSelectedDoctor(doctor.id)}
                                                label={
                                                    <Group gap="xs">
                                                        <Box
                                                            style={{
                                                                width: 12,
                                                                height: 12,
                                                                borderRadius: '50%',
                                                                backgroundColor: doctor.color
                                                            }}
                                                        />
                                                        <Text size="sm">{doctor.name}</Text>
                                                    </Group>
                                                }
                                                size="sm"
                                            />
                                            <Badge size="sm" color={doctor.colorName} variant="light">
                                                {doctor.status}
                                            </Badge>
                                        </Group>
                                    ))}
                                </Stack>
                            </Paper>
                        </Stack>
                    </Box>

                    <Box
                        style={{ flex: 1, display: 'flex', flexDirection: 'column', minHeight: 0, overflow: 'hidden' }}
                    >
                        <Group justify="center" mb="md" gap="xl">
                            <ActionIcon variant="subtle" size="lg" onClick={() => navigateCalendar('PREV')}>
                                <IconChevronLeft size={24} />
                            </ActionIcon>
                            <Title order={2}>{getCalendarTitle()}</Title>
                            <ActionIcon variant="subtle" size="lg" onClick={() => navigateCalendar('NEXT')}>
                                <IconChevronRight size={24} />
                            </ActionIcon>
                        </Group>

                        <Group justify="center" mb="md">
                            <Button.Group>
                                <Button
                                    variant={calendarView === 'day' ? 'filled' : 'light'}
                                    onClick={() => setCalendarView('day')}
                                    size="sm"
                                >
                                    Day
                                </Button>
                                <Button
                                    variant={calendarView === 'week' ? 'filled' : 'light'}
                                    onClick={() => setCalendarView('week')}
                                    size="sm"
                                >
                                    Week
                                </Button>
                                <Button
                                    variant={calendarView === 'month' ? 'filled' : 'light'}
                                    onClick={() => setCalendarView('month')}
                                    size="sm"
                                >
                                    Month
                                </Button>
                                <Button
                                    variant={calendarView === 'agenda' ? 'filled' : 'light'}
                                    onClick={() => setCalendarView('agenda')}
                                    size="sm"
                                >
                                    Year
                                </Button>
                            </Button.Group>
                        </Group>

                        <Box
                            style={{
                                flex: 1,
                                backgroundColor: 'white',
                                borderRadius: '8px',
                                padding: '1rem',
                                minHeight: 0
                            }}
                        >
                            {/** Ensure start/end are Date objects even if persisted as strings */}
                            <Calendar
                                localizer={localizer}
                                events={useMemo(() => {
                                    return getCalendarAppointmentData(
                                        appointments,
                                        patientSearchQuery,
                                        selectedDoctors,
                                        doctors.map((d) => d.id)
                                    );
                                }, [appointments, patientSearchQuery, selectedDoctors, doctors])}
                                startAccessor="start"
                                endAccessor="end"
                                style={{ height: '100%' }}
                                view={calendarView}
                                onView={setCalendarView}
                                date={currentDate}
                                onNavigate={(date) => setCurrentDate(date)}
                                eventPropGetter={eventStyleGetter}
                                onSelectEvent={handleSelectEvent}
                                toolbar={false}
                                slotPropGetter={slotPropGetter}
                                dayPropGetter={dayPropGetter}
                                min={new Date(1970, 0, 1, 8, 0, 0)}
                                max={new Date(1970, 0, 1, 17, 0, 0)}
                            />
                        </Box>

                        <Modal
                            opened={isAppointmentDetailsModalOpen}
                            onClose={handleCloseAppointmentModal}
                            title={selectedAppointment?.isTimeOff ? 'Time Off Details' : 'Appointment Details'}
                            size="md"
                            centered
                        >
                            {selectedAppointment && (
                                <Stack gap="md">
                                    {selectedAppointment.isTimeOff ? (
                                        <>
                                            <Box>
                                                <Text size="sm" c="dimmed" mb={4}>
                                                    Type
                                                </Text>
                                                <Badge size="lg" variant="filled" color="gray">
                                                    Time Off
                                                </Badge>
                                            </Box>

                                            {selectedAppointment.doctorName && (
                                                <Box>
                                                    <Text size="sm" c="dimmed" mb={4}>
                                                        Doctor
                                                    </Text>
                                                    <Group gap="xs">
                                                        <IconStethoscope size={20} />
                                                        <Text size="md" fw={500}>
                                                            {selectedAppointment.doctorName}
                                                        </Text>
                                                    </Group>
                                                </Box>
                                            )}

                                            {selectedAppointment.reason && (
                                                <Box>
                                                    <Text size="sm" c="dimmed" mb={4}>
                                                        Reason
                                                    </Text>
                                                    <Text size="md" fw={500}>
                                                        {selectedAppointment.reason}
                                                    </Text>
                                                </Box>
                                            )}

                                            <Box>
                                                <Text size="sm" c="dimmed" mb={4}>
                                                    Date
                                                </Text>
                                                <Text size="md" fw={500}>
                                                    {dayjs(selectedAppointment.start).format('dddd, MMMM D, YYYY')}
                                                </Text>
                                            </Box>

                                            <Box>
                                                <Text size="sm" c="dimmed" mb={4}>
                                                    Time
                                                </Text>
                                                <Text size="md" fw={500}>
                                                    {dayjs(selectedAppointment.start).format('h:mm A')} -{' '}
                                                    {dayjs(selectedAppointment.end).format('h:mm A')}
                                                </Text>
                                            </Box>
                                        </>
                                    ) : (
                                        <>
                                            {selectedAppointment.patientName && (
                                                <Box>
                                                    <Text size="sm" c="dimmed" mb={4}>
                                                        Patient Name
                                                    </Text>
                                                    <Group gap="xs">
                                                        <Avatar size="md" color="blue">
                                                            {selectedAppointment.patientName[0]}
                                                        </Avatar>
                                                        <Text size="lg" fw={600}>
                                                            {selectedAppointment.patientName}
                                                        </Text>
                                                    </Group>
                                                </Box>
                                            )}

                                            {selectedAppointment.doctorName && (
                                                <Box>
                                                    <Text size="sm" c="dimmed" mb={4}>
                                                        Doctor
                                                    </Text>
                                                    <Group gap="xs">
                                                        <IconStethoscope size={20} />
                                                        <Text size="md" fw={500}>
                                                            {selectedAppointment.doctorName}
                                                        </Text>
                                                    </Group>
                                                </Box>
                                            )}

                                            <Box>
                                                <Text size="sm" c="dimmed" mb={4}>
                                                    Date
                                                </Text>
                                                <Text size="md" fw={500}>
                                                    {dayjs(selectedAppointment.start).format('dddd, MMMM D, YYYY')}
                                                </Text>
                                            </Box>

                                            <Box>
                                                <Text size="sm" c="dimmed" mb={4}>
                                                    Time
                                                </Text>
                                                <Text size="md" fw={500}>
                                                    {dayjs(selectedAppointment.start).format('h:mm A')} -{' '}
                                                    {dayjs(selectedAppointment.end).format('h:mm A')}
                                                </Text>
                                            </Box>

                                            {selectedAppointment.type && (
                                                <Box>
                                                    <Text size="sm" c="dimmed" mb={4}>
                                                        Appointment Type
                                                    </Text>
                                                    <Badge size="lg" variant="light">
                                                        {selectedAppointment.type}
                                                    </Badge>
                                                </Box>
                                            )}
                                        </>
                                    )}
                                </Stack>
                            )}
                        </Modal>
                    </Box>
                    <Box style={{ width: '300px', flexShrink: 0, minHeight: 0 }}>
                        <Stack gap="md" style={{ height: '100%', minHeight: 0 }}>
                            <TextInput
                                placeholder="Search Patient"
                                leftSection={<IconSearch size={16} />}
                                rightSection={
                                    patientSearchQuery && (
                                        <ActionIcon
                                            size="xs"
                                            variant="subtle"
                                            onClick={() => setPatientSearchQuery('')}
                                        >
                                            <IconX size={14} />
                                        </ActionIcon>
                                    )
                                }
                                radius="xl"
                                value={patientSearchQuery}
                                onChange={(e) => setPatientSearchQuery(e.target.value)}
                            />

                            <Paper
                                p="md"
                                withBorder
                                style={{ flex: 1, display: 'flex', flexDirection: 'column', minHeight: 0 }}
                            >
                                <Title order={4} mb="md">
                                    Appointments
                                </Title>
                                <ScrollArea style={{ flex: 1 }}>
                                    {currentDate && todayAppointments.length !== 0 ? (
                                        <Stack gap="sm">
                                            {todayAppointments.map((apt, idx) => (
                                                <Paper
                                                    key={`${apt.id ?? 'apt'}-${
                                                        apt.start ? new Date(apt.start).getTime() : 'nostart'
                                                    }-${idx}`}
                                                    p="sm"
                                                    withBorder
                                                    onClick={() => {
                                                        setCalendarView('day');
                                                        if (apt.start) setCurrentDate(new Date(apt.start));
                                                        selectAppointment(apt);
                                                    }}
                                                    style={{ cursor: 'pointer' }}
                                                >
                                                    <Group gap="xs" mb="xs">
                                                        <Avatar size="sm" color="blue">
                                                            {apt.patientName[0]}
                                                        </Avatar>
                                                        <Text size="sm" fw={600}>
                                                            {apt.patientName}
                                                        </Text>
                                                    </Group>
                                                    <Group gap="xs" mb="xs">
                                                        <IconStethoscope size={14} />
                                                        <Text size="xs" c="dimmed">
                                                            {apt.doctorName}
                                                        </Text>
                                                    </Group>
                                                    <Group justify="space-between">
                                                        <Text size="xs" fw={500}>
                                                            {dayjs(apt.start).format('ddd Do')}
                                                        </Text>
                                                        <Text size="xs" fw={500}>
                                                            {dayjs(apt.start).format('H:mm')}
                                                        </Text>
                                                    </Group>
                                                </Paper>
                                            ))}
                                        </Stack>
                                    ) : (
                                        <Text c="dimmed" ta="center">
                                            No appointments for today.
                                        </Text>
                                    )}
                                </ScrollArea>
                            </Paper>
                        </Stack>
                    </Box>
                </Box>
            </AppShell.Main>

            <BookingModal opened={isBookingModalOpen} onClose={closeBookingModal} />
        </>
    );
}
