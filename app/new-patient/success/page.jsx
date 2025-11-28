'use client';

import { useEffect, useState } from 'react';
import { AppShell, Box, Paper, Title, Text, Group, Button, Menu, Stack } from '@mantine/core';
import { IconStethoscope, IconUser, IconMenu2 } from '@tabler/icons-react';

export default function NewPatientSuccessPage() {
    const [user, setUser] = useState(() => {
        if (typeof window !== 'undefined') {
            const userStr = localStorage.getItem('user');
            return userStr ? JSON.parse(userStr) : null;
        }
        return null;
    });
    const [patient, setPatient] = useState(() => {
        if (typeof window !== 'undefined') {
            const pStr = localStorage.getItem('newPatient');
            return pStr ? JSON.parse(pStr) : null;
        }
        return null;
    });

    useEffect(() => {
        if (typeof window !== 'undefined' && !patient) {
            window.location.href = '/new-patient';
        }
    }, [patient]);

    useEffect(() => {
        if (!user && typeof window !== 'undefined') {
            window.location.href = '/';
        }
    }, [user]);

    const formatDob = (dob) => {
        if (!dob) return '';
        try {
            const d = new Date(dob);
            return d.toLocaleDateString(undefined, {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            });
        } catch {
            return dob;
        }
    };

    if (!user || !patient) {
        return (
            <Box style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
                <Text c="dimmed">Loading...</Text>
            </Box>
        );
    }

    const handleLogout = () => {
        localStorage.removeItem('user');
        window.location.href = '/';
    };

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
                                {user?.name || 'User'}
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
                <Box
                    maw={1100}
                    mx="auto"
                    style={{
                        minHeight: 'calc(100vh - 70px)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        paddingTop: 0
                    }}
                >
                    <Paper
                        p="xl"
                        radius="xl"
                        withBorder
                        style={{
                            background: 'white',
                            borderRadius: 28,
                            boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
                            minHeight: 520,
                            width: '100%',
                            maxWidth: 1100,
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center'
                        }}
                    >
                        <Stack align="center" gap="lg" w="100%">
                            <Title order={1} c="blue.6" ta="center" mb="xl">
                                New Patient Added
                            </Title>

                            <Text fw={600} size="lg" ta="center">
                                Name:{' '}
                                <Text span fw={500}>
                                    {patient.name || '—'}
                                </Text>
                            </Text>
                            <Text fw={600} size="lg" ta="center">
                                Date of Birth:{' '}
                                <Text span fw={500}>
                                    {formatDob(patient.dob) || '—'}
                                </Text>
                            </Text>
                            <Text fw={600} size="lg" ta="center">
                                Personal Healthcare Number:{' '}
                                <Text span fw={500}>
                                    {patient.healthNumber || '—'}
                                </Text>
                            </Text>
                            <Text fw={600} size="lg" ta="center">
                                Phone Number:{' '}
                                <Text span fw={500}>
                                    {patient.phone || '—'}
                                </Text>
                            </Text>

                            <Group justify="center" mt="xl">
                                <Button
                                    variant="light"
                                    color="gray"
                                    radius="xl"
                                    size="lg"
                                    onClick={() => (window.location.href = '/dashboard')}
                                >
                                    Return to Menu
                                </Button>
                                <Button radius="xl" size="lg" onClick={() => (window.location.href = '/dashboard')}>
                                    Make a Booking
                                </Button>
                            </Group>
                        </Stack>
                    </Paper>
                </Box>
            </AppShell.Main>
        </AppShell>
    );
}
