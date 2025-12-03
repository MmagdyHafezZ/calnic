'use client';

import {
    Flex,
    Textarea,
    Radio,
    Group,
    TextInput,
    Grid,
    Text,
    Box,
    Title,
    Button,
    Stack,
    Card,
    Autocomplete
} from '@mantine/core';
import { useState, useEffect, useMemo, useRef } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { usePatientsStore } from '../../../store';

export default function BookPage() {
    const [patientName, setPatientName] = useState('');
    const [appointmentType, setAppointmentType] = useState('Standard');
    const [medicalHistory, setMedicalHistory] = useState('');
    const [notes, setNotes] = useState('');
    const router = useRouter();
    const searchParams = useSearchParams();
    const patients = usePatientsStore((s) => s.patients);
    const selectPatient = usePatientsStore((s) => s.selectPatient);
    const getPatientById = usePatientsStore((s) => s.getPatientById);
    const hasPrefilledFromParams = useRef(false);

    const patientOptions = useMemo(() => {
        const seen = new Set();
        return patients
            .map((p) => p.name)
            .filter(Boolean)
            .filter((name) => {
                const key = name.toLowerCase();
                if (seen.has(key)) return false;
                seen.add(key);
                return true;
            });
    }, [patients]);

    useEffect(() => {
        if (!appointmentType) {
            setAppointmentType('Standard');
        }
    }, [appointmentType]);

    useEffect(() => {
        if (hasPrefilledFromParams.current) return;
        const prefillId = searchParams.get('patientId');
        if (prefillId) {
            const found = getPatientById(Number(prefillId));
            if (found?.name) {
                hasPrefilledFromParams.current = true;
                setPatientName(found.name);
                selectPatient(found);
            }
        }
    }, [searchParams, getPatientById, selectPatient]);

    const isFormValid = patientName.trim() !== '' && appointmentType;

    return (
        <Box style={{ padding: '2rem', paddingTop: '3rem' }}>
            <Grid gutter="md">
                <Grid.Col span={8}>
                    <Card
                        shadow="sm"
                        padding="lg"
                        withBorder
                        style={{ maxWidth: '60vw', height: '80vh', margin: 'auto', marginTop: '2rem', marginLeft: 0 }}
                    >
                        <Text size="sm" c="dimmed">
                            Fields marked with <span style={{ color: 'var(--mantine-color-red-6)' }}>*</span> are
                            required.
                        </Text>
                        <Grid gutter="md" style={{ marginTop: '2rem' }}>
                            <Grid.Col span={12}>
                                <Title order={3}>
                                    Patient Name: <span style={{ color: 'var(--mantine-color-red-6)' }}>*</span>
                                </Title>
                                <Autocomplete
                                    placeholder="Start typing to search patients..."
                                    data={patientOptions}
                                    variant="filled"
                                    size="md"
                                    style={{ marginTop: '1rem' }}
                                    value={patientName}
                                    onChange={(value) => {
                                        setPatientName(value);
                                        const match = patients.find(
                                            (p) => p.name?.toLowerCase() === value.toLowerCase()
                                        );
                                        if (match) selectPatient(match);
                                    }}
                                    onOptionSubmit={(value) => {
                                        setPatientName(value);
                                        const match = patients.find(
                                            (p) => p.name?.toLowerCase() === value.toLowerCase()
                                        );
                                        if (match) selectPatient(match);
                                    }}
                                />
                                <Button
                                    size="md"
                                    style={{ marginTop: '1rem' }}
                                    onClick={() => {
                                        const targetName = patientName?.trim();
                                        const query = targetName ? `?name=${encodeURIComponent(targetName)}` : '';
                                        router.push(`/new-patient${query}`);
                                    }}
                                >
                                    Add New Patient
                                </Button>

                                <Title padding="lg" order={3} style={{ marginTop: '1.5rem' }}>
                                    Appointment Type: <span style={{ color: 'var(--mantine-color-red-6)' }}>*</span>
                                </Title>
                                <Radio.Group
                                    name="appointment-type"
                                    value={appointmentType || 'Standard'}
                                    onChange={setAppointmentType}
                                >
                                    <Group mt="lg">
                                        <Radio value="Walk-in" label="Walk-in" size="lg" />
                                        <Radio value="Follow-up" label="Follow-up" size="lg" />
                                        <Radio value="Standard" label="Standard" size="lg" />
                                        <Radio value="Specialist" label="Specialist" size="lg" />
                                    </Group>
                                </Radio.Group>

                                <Title order={3} style={{ marginTop: '2rem' }}>
                                    Notes
                                </Title>
                                <Textarea
                                    placeholder="Extra notes..."
                                    autosize
                                    minRows={6}
                                    variant="filled"
                                    size="md"
                                    style={{ width: '100%', marginTop: '1rem' }}
                                    value={notes}
                                    onChange={(e) => setNotes(e.target.value)}
                                />
                            </Grid.Col>
                        </Grid>
                    </Card>
                </Grid.Col>
                <Grid.Col span={4}>
                    <Flex direction="column" mih="85vh" style={{ paddingTop: '2rem' }}>
                        <Box style={{ flexGrow: 1 }}>
                            <Title order={3}>Relevant Medical History:</Title>
                            <Textarea
                                placeholder="List relevant medical history..."
                                autosize
                                minRows={20}
                                variant="filled"
                                size="md"
                                style={{ width: '100%', marginTop: '2rem' }}
                                value={medicalHistory}
                                onChange={(e) => setMedicalHistory(e.target.value)}
                            />
                        </Box>

                        <Group mt="auto">
                            <Button size="xl" onClick={() => router.back()}>
                                Cancel
                            </Button>
                            <Button
                                size="xl"
                                disabled={!isFormValid}
                                onClick={() => {
                                    const bookingDetails = {
                                        patientName,
                                        appointmentType,
                                        medicalHistory,
                                        notes
                                    };

                                    try {
                                        localStorage.setItem('bookingDetails', JSON.stringify(bookingDetails));
                                    } catch (e) {
                                        console.error('Failed to save booking details', e);
                                    }

                                    router.push('/diagnostic');
                                }}
                            >
                                Next: Diagnostic
                            </Button>
                        </Group>
                    </Flex>
                </Grid.Col>
            </Grid>
        </Box>
    );
}
