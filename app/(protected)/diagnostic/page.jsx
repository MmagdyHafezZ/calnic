'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { AppShell, Box, Paper, Stack, Title, Text, Group, Button } from '@mantine/core';
import { useAuthStore, useUIStore } from '../../../store';

export default function DiagnosticIntroPage() {
    const router = useRouter();
    const { isAuthenticated } = useAuthStore();
    const clearDiagnosticRecommendation = useUIStore((s) => s.clearDiagnosticRecommendation);

    useEffect(() => {
        clearDiagnosticRecommendation();
        if (!isAuthenticated) {
            router.push('/');
        }
    }, [clearDiagnosticRecommendation, isAuthenticated, router]);

    return (
        <AppShell.Main>
            <Box maw={900} mx="auto" py="xl" px="md">
                <Paper withBorder radius="xl" p="xl" shadow="sm">
                    <Stack gap="md" align="center">
                        <Title order={1} c="blue.6" ta="center">
                            Do you want the system to help diagnose and pick the right doctor?
                        </Title>
                        <Text ta="center" c="dimmed" maw={640}>
                            We can guide you through a short questionnaire to suggest the best doctor based on symptoms,
                            history, and availability. You can also skip and go straight to scheduling.
                        </Text>
                        <Group justify="center" mt="md" gap="md">
                            <Button size="lg" variant="light" color="gray" onClick={() => router.push('/schedule-appointment')}>
                                Skip
                            </Button>
                            <Button size="lg" radius="xl" onClick={() => router.push('/diagnostic/questions')}>
                                Yes, help me pick
                            </Button>
                        </Group>
                    </Stack>
                </Paper>
            </Box>
        </AppShell.Main>
    );
}
