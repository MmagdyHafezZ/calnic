'use client';

import { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { Box, Loader, Paper, Stack, Text } from '@mantine/core';
import useAuthStore from '../store/authStore';

export default function ProtectedLayout({ children }) {
    const router = useRouter();
    const pathname = usePathname();
    const { isAuthenticated, isLoading } = useAuthStore();
    const [hydrated, setHydrated] = useState(false);

    useEffect(() => {
        // Ensure hydration flag flips on mount even if persist callbacks aren't available.
        setHydrated(true);
        const unsub = useAuthStore.persist?.onFinishHydration?.(() => setHydrated(true));
        return () => unsub?.();
    }, []);

    useEffect(() => {
        if (!hydrated || isLoading) return;
        const { user } = useAuthStore.getState();
        if (!isAuthenticated) {
            router.push('/');
            return;
        }

        const isDoctor = user?.role === 'doctor';
        const isDoctorPath = pathname?.startsWith('/doctor');

        // keep doctors on doctor paths, redirect away from front-desk
        if (isDoctor && !isDoctorPath) {
            router.push('/doctor/dashboard');
        }
        // front-desk users shouldn't be on doctor routes
        if (!isDoctor && isDoctorPath) {
            router.push('/dashboard');
        }
    }, [hydrated, isAuthenticated, isLoading, router, pathname]);

    if (isLoading || !hydrated) {
        return (
            <Box
                style={{
                    minHeight: '100vh',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'linear-gradient(135deg, #f8fafc 0%, #eff6ff 100%)'
                }}
            >
                <Paper shadow="md" radius="xl" p="lg" withBorder>
                    <Stack align="center" gap="sm">
                        <Loader color="blue" />
                        <Text fw={600}>Verifying access…</Text>
                    </Stack>
                </Paper>
            </Box>
        );
    }

    if (!isAuthenticated) {
        return null;
    }

    return <>{children}</>;
}
