'use client';

import { useEffect, useState, useCallback } from 'react';
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
import { appointments, doctors } from '../../data/mock-data';

const localizer = dayjsLocalizer(dayjs);

export default function DashboardPage() {
    const [user, setUser] = useState(() => {
        if (typeof window !== 'undefined') {
            const userStr = localStorage.getItem('user');
            return userStr ? JSON.parse(userStr) : null;
        }
        return null;
    });
    const [currentDate, setCurrentDate] = useState(new Date(2025, 9, 1));
    const [view, setView] = useState('month');

    useEffect(() => {
        if (!user && typeof window !== 'undefined') {
            window.location.href = '/';
        }
    }, [user]);

    const handleLogout = () => {
        localStorage.removeItem('user');
        window.location.href = '/';
    };

    const handleNavigate = useCallback(
        (action) => {
            if (action === 'PREV') {
                setCurrentDate(dayjs(currentDate).subtract(1, 'month').toDate());
            } else if (action === 'NEXT') {
                setCurrentDate(dayjs(currentDate).add(1, 'month').toDate());
            } else if (action === 'TODAY') {
                setCurrentDate(new Date());
            }
        },
        [currentDate]
    );

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

    if (!user) {
        return (
            <Box style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
                <Text c="dimmed">Loading...</Text>
            </Box>
        );
    }

    const todayAppointments = appointments.filter(
        (apt) => apt.patientName && dayjs(apt.start).format('YYYY-MM-DD') === '2025-10-28'
    );

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
                                onClick={() => (window.location.href = '/new-patient')}
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
                            <ActionIcon variant="subtle" size="lg" onClick={() => handleNavigate('PREV')}>
                                <IconChevronLeft size={24} />
                            </ActionIcon>
                            <Title order={2}>{dayjs(currentDate).format('MMMM YYYY')}</Title>
                            <ActionIcon variant="subtle" size="lg" onClick={() => handleNavigate('NEXT')}>
                                <IconChevronRight size={24} />
                            </ActionIcon>
                        </Group>

                        <Group justify="center" mb="md">
                            <Button.Group>
                                <Button
                                    variant={view === 'day' ? 'filled' : 'light'}
                                    onClick={() => setView('day')}
                                    size="sm"
                                >
                                    Day
                                </Button>
                                <Button
                                    variant={view === 'week' ? 'filled' : 'light'}
                                    onClick={() => setView('week')}
                                    size="sm"
                                >
                                    Week
                                </Button>
                                <Button
                                    variant={view === 'month' ? 'filled' : 'light'}
                                    onClick={() => setView('month')}
                                    size="sm"
                                >
                                    Month
                                </Button>
                                <Button
                                    variant={view === 'agenda' ? 'filled' : 'light'}
                                    onClick={() => setView('agenda')}
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
                                view={view}
                                onView={setView}
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
