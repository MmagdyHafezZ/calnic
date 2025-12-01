'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { TextInput, PasswordInput, Button, Title, Text, Box, Stack, Flex, Alert, Anchor, Loader, Paper } from '@mantine/core';
import { IconUser, IconLock, IconAlertCircle } from '@tabler/icons-react';
import { useAuthStore } from '../store';

export default function LoginPage() {
    const router = useRouter();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const { login, isLoading, error, clearError } = useAuthStore();
    useEffect(() => {
        const state = useAuthStore.getState();
        if (state.isAuthenticated) {
            if (state.user?.role === 'doctor') {
                router.push('/doctor/dashboard');
            } else {
                router.push('/dashboard');
            }
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
                router.push('/dashboard');
            }
        }
    };

    const LoadingScreen = ({ message }) => (
        <Box
            style={{
                position: 'absolute',
                inset: 0,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'rgba(255,255,255,0.8)',
                backdropFilter: 'blur(4px)',
                zIndex: 20
            }}
        >
            <Paper shadow="md" p="lg" radius="xl" withBorder style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                <Loader color="blue" />
                <Text fw={600}>{message}</Text>
            </Paper>
        </Box>
    );

    return (
        <Flex mih="100vh" direction={{ base: 'column', lg: 'row' }} style={{ position: 'relative' }}>
            <Box
                w={{ base: '100%', lg: '50%' }}
                style={{
                    background: 'linear-gradient(to bottom right, #3b82f6, #2563eb)',
                    position: 'relative',
                    overflow: 'hidden'
                }}
                display={{ base: 'none', lg: 'flex' }}
            >
                <Box
                    style={{
                        position: 'relative',
                        zIndex: 10,
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        padding: '0 4rem',
                        color: 'white'
                    }}
                >
                    <Title order={1} size="4.5rem" fw={700} mb="md">
                        Calnic
                    </Title>
                    <Title order={2} size="2rem" fw={300} mb={64}>
                        Medical Clinic
                    </Title>
                    <Text size="xl" fw={300} maw={400}>
                        Changing Healthcare in Calgary
                        <br />
                        One Patient at a Time
                    </Text>
                </Box>

                <Box
                    style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        width: '100%',
                        height: '66%'
                    }}
                >
                    <svg viewBox="0 0 500 500" style={{ width: '100%', height: '100%', opacity: 0.3 }}>
                        <path
                            d="M250,450 C250,450 50,300 50,180 C50,100 100,50 160,50 C200,50 230,70 250,100 C270,70 300,50 340,50 C400,50 450,100 450,180 C450,300 250,450 250,450 Z"
                            fill="rgba(59, 130, 246, 0.5)"
                        />
                    </svg>
                </Box>
            </Box>

            <Flex
                w={{ base: '100%', lg: '50%' }}
                align="center"
                justify="center"
                px={{ base: 32, sm: 64 }}
                py={{ base: 48, sm: 96 }}
            >
                <Box w="100%" maw={448}>
                    <Stack align="center" mb={48}>
                        <Flex align="center" gap="sm" mb="md">
                            <Title order={1} size="3rem" c="blue.6">
                                Welcome
                            </Title>
                        </Flex>
                        <Text size="lg" c="dimmed" ta="center">
                            Enter your Calnic Username and Password to Sign In
                        </Text>
                    </Stack>

                    {error && (
                        <Alert icon={<IconAlertCircle size={16} />} color="red" mb="xl">
                            {error}
                        </Alert>
                    )}

                    <form onSubmit={handleSubmit}>
                        <Stack gap="lg">
                            <TextInput
                                placeholder="Username"
                                size="lg"
                                leftSection={<IconUser size={20} />}
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                                styles={{
                                    input: {
                                        backgroundColor: '#f3f4f6',
                                        border: 'none',
                                        padding: '1rem 1rem 1rem 3rem'
                                    }
                                }}
                            />

                            <PasswordInput
                                placeholder="Password"
                                size="lg"
                                leftSection={<IconLock size={20} />}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                styles={{
                                    input: {
                                        backgroundColor: '#f3f4f6',
                                        border: 'none',
                                        padding: '1rem 1rem 1rem 3rem'
                                    }
                                }}
                            />

                            <Button
                                type="submit"
                                size="lg"
                                fullWidth
                                loading={isLoading}
                                radius="xl"
                                styles={{
                                    root: {
                                        height: '56px',
                                        fontSize: '1.25rem',
                                        fontWeight: 600
                                    }
                                }}
                            >
                                {isLoading ? 'Logging in...' : 'Login'}
                            </Button>
                        </Stack>
                    </form>

                    <Text ta="center" mt="xl" c="dimmed">
                        Trouble logging in?{' '}
                        <Anchor href="#" c="blue" underline="never">
                            Contact Calnic IT
                        </Anchor>
                    </Text>
                </Box>
            </Flex>
            {isLoading && <LoadingScreen message="Signing you in..." />}
        </Flex>
    );
}

function RuntimeContextCard() {
    const title = `Netlify Context: running in ${ctx} mode.`;
    if (ctx === 'dev') {
        return (
            <Card title={title}>
                <p>Next.js will rebuild any page you navigate to, including static pages.</p>
            </Card>
        );
    } else {
        const now = new Date().toISOString();
        return (
            <Card title={title}>
                <p>This page was statically-generated at build time ({now}).</p>
            </Card>
        );
    }
}
