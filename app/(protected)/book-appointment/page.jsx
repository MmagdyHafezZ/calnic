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
    Autocomplete,
    Tooltip,
    ActionIcon,
    ScrollArea
} from '@mantine/core';
import { useState, useEffect, useMemo, useRef } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { usePatientsStore } from '../../../store';
import { IconInfoCircle } from '@tabler/icons-react';

export default function BookPage() {
    const [patientName, setPatientName] = useState('');
    const [appointmentType, setAppointmentType] = useState('Standard');
    const [medicalHistory, setMedicalHistory] = useState('');
    const [notes, setNotes] = useState('');
    const [hasPatientMatch, setHasPatientMatch] = useState(false);
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
                setHasPatientMatch(true);
            }
        }
    }, [searchParams, getPatientById, selectPatient]);

    const matchedPatient = useMemo(
        () => patients.find((p) => p.name?.toLowerCase() === patientName.trim().toLowerCase()),
        [patients, patientName]
    );
    useEffect(() => {
        setHasPatientMatch(!!matchedPatient);
    }, [matchedPatient]);

    const isFormValid = patientName.trim() !== '' && appointmentType && hasPatientMatch;
    const appointmentOptions = [
        { value: 'Walk-in', label: 'Walk-in', info: 'Quick visit for immediate needs', duration: '20 minutes' },
        { value: 'Follow-up', label: 'Follow-up', info: 'Post-visit or results review', duration: '20 minutes' },
        { value: 'Standard', label: 'Standard', info: 'General consultation', duration: '20 minutes' },
        { value: 'Full Exam', label: 'Full Exam', info: 'Comprehensive exam', duration: '40 minutes' },
        {
            value: 'Custom',
            label: 'Custom',
            info: 'Custom duration set on calendar',
            duration: 'Set manually on schedule'
        }
    ];

    return (
        <Box style={{ padding: '2rem', paddingTop: '3rem' }}>
            <Grid gutter="md">
                <Grid.Col span={8}>
                    <ScrollArea.Autosize style={{ height: '80vh', maxHeight: '80vh' }} type="always" offsetScrollbars>
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
                                {!hasPatientMatch && patientName.trim() !== '' && (
                                    <Button
                                        size="md"
                                        style={{ marginTop: '1rem' }}
                                        onClick={() => {
                                            const targetName = patientName?.trim();
                                            const query = targetName ? `?name=${encodeURIComponent(targetName)}` : '';
                                            router.push(`/new-patient${query}`);
                                        }}
                                    >
                                        Add New Patient (required for new patients)
                                    </Button>
                                )}

                                <Title padding="lg" order={3} style={{ marginTop: '1.5rem' }}>
                                    Appointment Type: <span style={{ color: 'var(--mantine-color-red-6)' }}>*</span>
                                </Title>
                                <Radio.Group
                                    name="appointment-type"
                                    value={appointmentType || 'Standard'}
                                    onChange={setAppointmentType}
                                >
                                    <Group mt="lg">
                                        <Stack gap="sm">
                                            {appointmentOptions.map((opt) => (
                                                <Radio
                                                    key={opt.value}
                                                    value={opt.value}
                                                    size="lg"
                                                    styles={{ label: { width: '100%' } }}
                                                    label={
                                                        <Group gap={8}>
                                                            <Text fw={600}>{opt.label}</Text>
                                                            <Tooltip
                                                                label={`${opt.info} • ${opt.duration}`}
                                                                withArrow
                                                                position="right"
                                                            >
                                                                <ActionIcon size="sm" variant="subtle" color="gray">
                                                                    <IconInfoCircle size={16} />
                                                                </ActionIcon>
                                                            </Tooltip>
                                                        </Group>
                                                    }
                                                />
                                            ))}
                                        </Stack>
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
                    </ScrollArea.Autosize>
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
