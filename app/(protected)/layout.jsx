'use client';
import ProtectedLayout from '../../components/ProtectedLayer';
import { AppShell, Button, Group, Title, Menu } from '@mantine/core';
import { IconUser, IconMenu2, IconStethoscope } from '@tabler/icons-react';
import useAuthStore from '../../store/authStore';

export default function ProtectedGroupLayout({ children }) {
    const { user } = useAuthStore();
    const handleLogout = () => {
        logout();
        router.push('/');
    };

    return (
        <ProtectedLayout>
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
                                    {user?.name}
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
                {children}
            </AppShell>
        </ProtectedLayout>
    );
}
