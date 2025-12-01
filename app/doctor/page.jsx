'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Box, Button, Card, PasswordInput, Stack, Text, TextInput, Title, Alert } from '@mantine/core';
import { IconAlertCircle, IconLock, IconUser } from '@tabler/icons-react';
import { useAuthStore } from '../../store';

export default function DoctorLoginPage() {
    const router = useRouter();
    const { login, isLoading, error, clearError } = useAuthStore();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        if (useAuthStore.getState().isAuthenticated && useAuthStore.getState().user?.role === 'doctor') {
            router.push('/doctor/dashboard');
        }
    }, [router]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        clearError();
        const result = await login(username, password);
        if (result.success) {
            const role = useAuthStore.getState().user?.role;
            if (role === 'doctor') {
                router.push('/doctor/dashboard');
            } else {
                alert('This portal is for doctors only.');
            }
        }
    };

    return (
        <Box style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
            <Card shadow="md" p="xl" radius="lg" withBorder maw={420} w="100%">
                <Stack gap="md">
                    <Title order={2} c="blue.6" ta="center">
                        Doctor Portal
                    </Title>
                    <Text ta="center" c="dimmed">
                        Sign in with your doctor account to view your schedule.
                    </Text>
                    {error && (
                        <Alert icon={<IconAlertCircle size={16} />} color="red">
                            {error}
                        </Alert>
                    )}
                    <form onSubmit={handleSubmit}>
                        <Stack gap="md">
                            <TextInput
                                label="Username"
                                placeholder="doctor username"
                                leftSection={<IconUser size={16} />}
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                            />
                            <PasswordInput
                                label="Password"
                                placeholder="Password"
                                leftSection={<IconLock size={16} />}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                            <Button type="submit" loading={isLoading}>
                                {isLoading ? 'Signing in...' : 'Sign in'}
                            </Button>
                        </Stack>
                    </form>
                </Stack>
            </Card>
        </Box>
    );
}
