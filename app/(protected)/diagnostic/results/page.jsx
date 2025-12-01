'use client';

import { useEffect, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { AppShell, Box, Paper, Stack, Title, Text, Group, Button, Avatar, Badge, SimpleGrid } from '@mantine/core';
import { useAuthStore, useDoctorsStore, useUIStore } from '../../../../store';

const doctorDescriptions = {
    'Dr. Ahmed': 'Family medicine and general wellness. Great for broad concerns and continuity.',
    'Dr. Turner': 'Cardio/respiratory focused. Best for chest, breathing, or blood pressure issues.',
    'Dr. Mike': 'Musculoskeletal and mobility. Ideal for sports injuries and orthopedic follow-ups.',
    'Dr. Joel': 'Neurology and remote consults. Strong for headaches, dizziness, and after-hours triage.'
};

export default function DiagnosticResultsPage() {
    const router = useRouter();
    const { isAuthenticated } = useAuthStore();
    const doctors = useDoctorsStore((s) => s.doctors);
    const setDiagnosticRecommendation = useUIStore((s) => s.setDiagnosticRecommendation);
    const { diagnosticRecommendation, diagnosticRanking } = useUIStore();

    useEffect(() => {
        if (!isAuthenticated) {
            router.push('/');
        }
    }, [isAuthenticated, router]);

    const rankedDoctors = useMemo(() => {
        if (!diagnosticRanking?.length) return doctors;
        const rankMap = new Map();
        diagnosticRanking.forEach((name, idx) => rankMap.set(name, idx));
        return [...doctors].sort((a, b) => {
            const ra = rankMap.has(a.name) ? rankMap.get(a.name) : Number.MAX_SAFE_INTEGER;
            const rb = rankMap.has(b.name) ? rankMap.get(b.name) : Number.MAX_SAFE_INTEGER;
            return ra - rb;
        });
    }, [diagnosticRanking, doctors]);

    const handleSelectDoctor = (doc) => {
        setDiagnosticRecommendation({
            doctorId: doc.id,
            doctorName: doc.name,
            reason: doctorDescriptions[doc.name] || 'Chosen doctor',
            score: 0
        });
        router.push(`/schedule-appointment?doctorId=${doc.id}`);
    };

    const handleNextAvailable = () => {
        if (rankedDoctors.length < 2) {
            if (rankedDoctors[0]) handleSelectDoctor(rankedDoctors[0]);
            return;
        }
        handleSelectDoctor(rankedDoctors[1]);
    };

    if (!isAuthenticated) {
        return null;
    }

    return (
        <AppShell.Main>
            <Box maw={1100} mx="auto" py="xl" px="md">
                <Stack gap="md">
                    <Group justify="space-between" align="center">
                        <Stack gap={4}>
                            <Title order={1} c="blue.6">
                                Recommended Doctors
                            </Title>
                            <Text c="dimmed" size="sm">
                                Based on your answers. Choose a doctor to book a time.
                            </Text>
                        </Stack>
                        <Group gap="sm">
                            <Button variant="light" color="gray" onClick={() => router.push('/diagnostic/questions')}>
                                Change answers
                            </Button>
                            <Button variant="outline" onClick={handleNextAvailable}>
                                Next available doctor
                            </Button>
                        </Group>
                    </Group>

                    {diagnosticRecommendation?.doctorName && (
                        <Paper withBorder radius="md" p="md" shadow="xs">
                            <Group gap="md" align="center">
                                <Avatar color="blue" radius="xl">
                                    {diagnosticRecommendation.doctorName[0]}
                                </Avatar>
                                <Stack gap={2} style={{ flex: 1 }}>
                                    <Text fw={600}>{diagnosticRecommendation.doctorName}</Text>
                                    <Text size="sm" c="dimmed">
                                        {diagnosticRecommendation.reason}
                                    </Text>
                                </Stack>
                                <Button onClick={() => handleSelectDoctor({ id: diagnosticRecommendation.doctorId, name: diagnosticRecommendation.doctorName })}>
                                    Book with this doctor
                                </Button>
                            </Group>
                        </Paper>
                    )}

                    <SimpleGrid cols={{ base: 1, md: 2 }} spacing="md">
                        {rankedDoctors.map((doc) => (
                            <Paper key={doc.id} withBorder radius="md" p="md" shadow="xs">
                                <Group align="flex-start" gap="md">
                                    <Avatar color={doc.colorName || 'blue'} radius="xl">
                                        {doc.name[0]}
                                    </Avatar>
                                    <Stack gap={4} style={{ flex: 1 }}>
                                        <Group gap="xs">
                                            <Text fw={600}>{doc.name}</Text>
                                            <Badge color={doc.colorName || 'blue'} variant="light">
                                                {doc.status}
                                            </Badge>
                                        </Group>
                                        <Text size="sm" c="dimmed">
                                            {doctorDescriptions[doc.name] || 'Available for appointments.'}
                                        </Text>
                                        <Group gap="sm" mt="xs">
                                            <Button size="xs" onClick={() => handleSelectDoctor(doc)}>
                                                Choose doctor
                                            </Button>
                                        </Group>
                                    </Stack>
                                </Group>
                            </Paper>
                        ))}
                    </SimpleGrid>
                </Stack>
            </Box>
        </AppShell.Main>
    );
}
