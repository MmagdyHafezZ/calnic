'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
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
    ScrollArea
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
    IconUsers
} from '@tabler/icons-react';
import { useAuthStore, useAppointmentsStore, useDoctorsStore, useUIStore } from '../../store';

const localizer = dayjsLocalizer(dayjs);

export default function DashboardPage() {
    const router = useRouter();

    const { user, isAuthenticated, logout } = useAuthStore();
    const { appointments, getTodayAppointments } = useAppointmentsStore();
    const { doctors } = useDoctorsStore();
    const {
        calendarView,
        currentDate,
        setCalendarView,
        navigateCalendar,
        setCurrentDate,
        searchQuery,
        setSearchQuery,
    } = useUIStore();

    useEffect(() => {
        if (!isAuthenticated) {
            router.push('/');
        }
    }, [isAuthenticated, router]);

    const handleLogout = () => {
        logout();
        router.push('/');
    };

    const eventStyleGetter = (event) => {
        let backgroundColor = '#fef3c7';
        let color = '#92400e';

        if (event.type === 'Morning Appt Available') {
            backgroundColor = '#fef3c7';
            color = '#92400e';
        } else if (event.type === 'Afternoon Appt Full') {
            backgroundColor = '#fef3c7';
            color = '#92400e';
        } else if (event.type === 'Afternoon Appt Available') {
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

    if (!isAuthenticated || !user) {
        return (
            <Box style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
                <Text c="dimmed">Loading...</Text>
            </Box>
        );
    }

    const todayAppointments = getTodayAppointments();

    return (
        <AppShell header={{ height: 70 }} padding="md">
            <AppShell.Header>
                <Group h="100%" px="xl" justify="space-between">
                    <Group>
                        <IconStethoscope size={32} color="#3b82f6" />
                        <Title order={2} c="blue.6">
                            Calnic
                        </Title>
                    </Group>
                    <Menu shadow="md" width={200}>
                        <Menu.Target>
                            <Button
                                variant="light"
                                radius="xl"
                                leftSection={<IconUser size={16} />}
                                rightSection={<IconMenu2 size={16} />}
                            >
                                {user.name}
                            </Button>
                        </Menu.Target>
                        <Menu.Dropdown>
                            <Menu.Item color="red" onClick={handleLogout}>
                                Logout
                            </Menu.Item>
                        </Menu.Dropdown>
                    </Menu>
                </Group>
            </AppShell.Header>

            <AppShell.Main>
                <Box style={{ display: 'flex', gap: '1rem', height: 'calc(100vh - 100px)' }}>
                    <Box style={{ width: '220px', flexShrink: 0 }}>
                        <Stack gap="md">
                            <Button size="lg" radius="xl" leftSection={<IconCalendar size={20} />} fullWidth>
                                Book
                            </Button>
                            <Button
                                size="lg"
                                radius="xl"
                                variant="light"
                                leftSection={<IconPlus size={20} />}
                                fullWidth
                            >
                                Add Patient
                            </Button>

                            <Paper p="md" mt="xl" withBorder>
                                <Group mb="md">
                                    <IconUsers size={20} />
                                    <Text fw={600} size="sm">
                                        Doctors Availability
                                    </Text>
                                </Group>
                                <Stack gap="xs">
                                    {doctors.map((doctor) => (
                                        <Group key={doctor.id} justify="space-between">
                                            <Text size="sm">{doctor.name}</Text>
                                            <Badge size="sm" color={doctor.color} variant="light">
                                                {doctor.status}
                                            </Badge>
                                        </Group>
                                    ))}
                                </Stack>
                            </Paper>
                        </Stack>
                    </Box>

                    <Box style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                        <Group justify="center" mb="md" gap="xl">
                            <ActionIcon variant="subtle" size="lg" onClick={() => navigateCalendar('PREV')}>
                                <IconChevronLeft size={24} />
                            </ActionIcon>
                            <Title order={2}>{dayjs(currentDate).format('MMMM YYYY')}</Title>
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

                        <Box style={{ flex: 1, backgroundColor: 'white', borderRadius: '8px', padding: '1rem' }}>
                            <Calendar
                                localizer={localizer}
                                events={appointments}
                                startAccessor="start"
                                endAccessor="end"
                                style={{ height: '100%' }}
                                view={calendarView}
                                onView={setCalendarView}
                                date={currentDate}
                                onNavigate={(date) => setCurrentDate(date)}
                                eventPropGetter={eventStyleGetter}
                                toolbar={false}
                            />
                        </Box>
                    </Box>
                    <Box style={{ width: '300px', flexShrink: 0 }}>
                        <Stack gap="md" style={{ height: '100%' }}>
                            <TextInput
                                placeholder="Search Patient"
                                leftSection={<IconSearch size={16} />}
                                radius="xl"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />

                            <Paper p="md" withBorder style={{ flex: 1 }}>
                                <Title order={4} mb="md">
                                    Today&apos;s Appointments
                                </Title>
                                <ScrollArea h="calc(100vh - 220px)">
                                    <Stack gap="sm">
                                        {todayAppointments.map((apt) => (
                                            <Paper key={apt.id} p="sm" withBorder>
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
                                </ScrollArea>
                            </Paper>
                        </Stack>
                    </Box>
                </Box>
            </AppShell.Main>
        </AppShell>
    );
}
