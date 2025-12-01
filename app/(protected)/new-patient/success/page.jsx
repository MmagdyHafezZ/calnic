'use client';

import { useEffect, useMemo } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { AppShell, Box, Paper, Title, Text, Group, Button, Stack } from '@mantine/core';
import { useAuthStore, usePatientsStore } from '../../../../store';

export default function NewPatientSuccessPage() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const { user, isAuthenticated } = useAuthStore();
    const patients = usePatientsStore((state) => state.patients);
    const selectedPatient = usePatientsStore((state) => state.selectedPatient);
    const getPatientById = usePatientsStore((state) => state.getPatientById);

    const patientIdParam = searchParams.get('patientId');
    const patientId = patientIdParam ? Number(patientIdParam) : null;

    const patient = useMemo(() => {
        if (patientId) {
            return getPatientById(patientId);
        }
        return selectedPatient;
    }, [getPatientById, patientId, selectedPatient, patients]);

    useEffect(() => {
        if (!isAuthenticated) {
            router.push('/');
        }
    }, [isAuthenticated, router]);

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

    if (!isAuthenticated || !user) {
        return (
            <Box style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
                <Text c="dimmed">Loading...</Text>
            </Box>
        );
    }

    if (!patient) {
        return (
            <AppShell.Main>
                <Box style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
                    <Stack align="center" gap="md">
                        <Text c="dimmed">Loading patient details...</Text>
                        <Button variant="light" onClick={() => router.push('/new-patient')}>
                            Return to New Patient Form
                        </Button>
                    </Stack>
                </Box>
            </AppShell.Main>
        );
    }

    return (
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
                                onClick={() => router.push('/dashboard')}
                            >
                                Return to Dashboard
                            </Button>
                            <Button
                                radius="xl"
                                size="lg"
                                onClick={() => {
                                    const target = patient?.id
                                        ? `/book-appointment?patientId=${patient.id}`
                                        : '/book-appointment';
                                    router.push(target);
                                }}
                            >
                                Make a Booking
                            </Button>
                        </Group>
                    </Stack>
                </Paper>
            </Box>
        </AppShell.Main>
    );
}
