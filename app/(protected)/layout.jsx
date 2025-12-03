'use client';
import ProtectedLayout from '../../components/ProtectedLayer';
import { AppShell, Button, Group, Title, Menu, Badge } from '@mantine/core';
import { IconUser, IconMenu2, IconStethoscope } from '@tabler/icons-react';
import useAuthStore from '../../store/authStore';
import { useRouter } from 'next/navigation';

export default function ProtectedGroupLayout({ children }) {
    const { user, logout } = useAuthStore();
    const router = useRouter();
    const handleLogout = () => {
        logout();
        router.push('/');
    };

    return (
        <ProtectedLayout>
            <AppShell header={{ height: 70 }} padding="md">
                <AppShell.Header>
                    <Group h="100%" px="xl" justify="space-between">
                        <Group onClick={() => router.push('/')} style={{ cursor: 'pointer' }} gap="xs" align="center">
                            <Title order={2} c="blue.6">
                                Calnic
                            </Title>
                            <img
                                src="/calnic-icon.png"
                                alt="Calnic Logo"
                                width={45}
                                height={45}
                                style={{ marginBottom: '5px' }}
                            />
                        </Group>
                        <Menu shadow="md" width={200}>
                            <Menu.Target>
                                <Button
                                    variant="light"
                                    radius="xl"
                                    leftSection={<IconUser size={16} />}
                                    rightSection={<IconMenu2 size={16} />}
                                >
                                    {user?.name}
                                </Button>
                            </Menu.Target>
                            <Menu.Dropdown>
                                <Menu.Label>
                                    <Group gap="xs">
                                        <Badge color="blue" variant="light">
                                            {user?.role ?? 'User'}
                                        </Badge>
                                    </Group>
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
