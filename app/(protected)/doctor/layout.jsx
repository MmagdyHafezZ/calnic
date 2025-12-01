'use client';

import { AppShell, Button, Group, Menu, Title, Badge } from '@mantine/core';
import { IconMenu2, IconUser, IconStethoscope } from '@tabler/icons-react';
import { useRouter } from 'next/navigation';
import useAuthStore from '../../../store/authStore';
import ProtectedLayout from '../../../components/ProtectedLayer';

export default function DoctorLayout({ children }) {
    const router = useRouter();
    const { user, logout } = useAuthStore();

    const handleLogout = () => {
        logout();
        router.push('/doctor');
    };

    return (
        <ProtectedLayout>
            <AppShell header={{ height: 70 }} padding="md">
                <AppShell.Header>
                    <Group h="100%" px="xl" justify="space-between">
                        <Group style={{ cursor: 'pointer' }} onClick={() => router.push('/doctor/dashboard')}>
                            <IconStethoscope size={32} color="#3b82f6" />
                            <Title order={2} c="blue.6">
                                Doctor
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
                                    {user?.name ?? 'Doctor'}
                                </Button>
                            </Menu.Target>
                            <Menu.Dropdown>
                                <Menu.Label>
                                    <Badge color="blue" variant="light">
                                        {user?.role ?? 'Doctor'}
                                    </Badge>
                                </Menu.Label>
                                <Menu.Item color="red" onClick={handleLogout}>
                                    Logout
                                </Menu.Item>
                            </Menu.Dropdown>
                        </Menu>
                    </Group>
                </AppShell.Header>
                {children}
            </AppShell>
        </ProtectedLayout>
    );
}
