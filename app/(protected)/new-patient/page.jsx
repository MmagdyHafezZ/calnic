'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { AppShell, Group, Title, Button, Paper, Box, Grid, Stack, Text, TextInput } from '@mantine/core';
import { useAuthStore, usePatientsStore } from '../../../store';
import { useSearchParams } from 'next/navigation';

const Field = ({ label, required, children }) => (
    <Group align="center" wrap="nowrap" gap="xs">
        <Text w={180} fw={600}>
            {label}
            {required && (
                <Text component="span" c="red.6" ml={4}>
                    *
                </Text>
            )}
        </Text>
        <Box style={{ flex: 1 }}>{children}</Box>
    </Group>
);

const SectionTitle = ({ children, mt }) => (
    <Title order={3} c="blue.6" mt={mt}>
        {children}
    </Title>
);

export default function NewPatientPage() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const { user, isAuthenticated } = useAuthStore();
    const addPatient = usePatientsStore((state) => state.addPatient);
    const selectPatient = usePatientsStore((state) => state.selectPatient);
    const [saving, setSaving] = useState(false);
    const [form, setForm] = useState({
        name: '',
        dob: '',
        healthNumber: '',
        phone: '',
        email: '',
        emergencyName: '',
        emergencyPhone: '',
        emergencyRelation: ''
    });

    useEffect(() => {
        const prefillName = searchParams.get('name');
        if (prefillName) {
            setForm((f) => ({ ...f, name: prefillName }));
        }
    }, [searchParams]);

    const handleChange = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }));
    const handleCancel = () => router.back();

    const handleSubmit = (e) => {
        e.preventDefault();
        setSaving(true);
        const required = ['name', 'dob'];
        const missing = required.filter((k) => !String(form[k]).trim());
        if (missing.length) {
            setSaving(false);
            alert('Please fill required fields: Name and Date of Birth.');
            return;
        }

        const patientRecord = {
            name: form.name.trim(),
            dob: form.dob,
            healthNumber: form.healthNumber.trim(),
            phone: form.phone.trim(),
            email: form.email.trim(),
            emergencyName: form.emergencyName.trim(),
            emergencyPhone: form.emergencyPhone.trim(),
            emergencyRelation: form.emergencyRelation.trim(),
            createdAt: Date.now()
        };

        const newPatient = addPatient(patientRecord);
        selectPatient(newPatient);
        setSaving(false);
        router.push(`/new-patient/success?patientId=${newPatient.id}`);
    };

    const sharedInputStyles = {
        variant: 'filled',
        radius: 'xl',
        size: 'md',
        styles: (theme) => ({
            input: {
                backgroundColor: theme.colors.blue[0],
                boxShadow: 'inset 0 0 0 1px transparent'
            }
        })
    };

    if (!isAuthenticated || !user) {
        return (
            <Box style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
                <Text c="dimmed">Loading...</Text>
            </Box>
        );
    }

    return (
        <AppShell.Main>
            <Box maw={1100} mx="auto">
                <Paper
                    radius="xl"
                    shadow="sm"
                    p="xl"
                    withBorder
                    style={{
                        borderRadius: 28,
                        boxShadow: '0 10px 30px rgba(0,0,0,0.08)'
                    }}
                >
                    <Stack align="center" mb="xl" gap={4}>
                        <Title ta="center" order={1} c="blue.6">
                            New Patient
                        </Title>
                        <Text c="dimmed" size="sm">
                            Fields marked * are required
                        </Text>
                    </Stack>

                    <form onSubmit={handleSubmit}>
                        <Grid gutter="xl">
                            <Grid.Col span={{ base: 12, md: 6 }}>
                                <Stack gap="lg">
                                <SectionTitle>Patient Info</SectionTitle>

                                    <Field label="Name:" required>
                                        <TextInput
                                            {...sharedInputStyles}
                                            value={form.name}
                                            onChange={handleChange('name')}
                                            placeholder="Full name"
                                            required
                                        />
                                    </Field>

                                    <Field label="Date of Birth:" required>
                                        <TextInput
                                            {...sharedInputStyles}
                                            type="date"
                                            value={form.dob}
                                            onChange={handleChange('dob')}
                                            required
                                        />
                                    </Field>

                                    <Field label="Alberta Personal Healthcare #:">
                                        <TextInput
                                            {...sharedInputStyles}
                                            value={form.healthNumber}
                                            onChange={handleChange('healthNumber')}
                                            placeholder=""
                                            inputMode="numeric"
                                        />
                                    </Field>
                                </Stack>
                            </Grid.Col>

                            <Grid.Col span={{ base: 12, md: 6 }}>
                                <Stack gap="lg">
                                    <SectionTitle>Contact Info</SectionTitle>

                                    <Field label="Phone Number:">
                                        <TextInput
                                            {...sharedInputStyles}
                                            value={form.phone}
                                            onChange={handleChange('phone')}
                                            placeholder=""
                                            inputMode="tel"
                                        />
                                    </Field>

                                    <Field label="Email Address:">
                                        <TextInput
                                            {...sharedInputStyles}
                                            type="email"
                                            value={form.email}
                                            onChange={handleChange('email')}
                                            placeholder=""
                                        />
                                    </Field>

                                    <SectionTitle mt="xl">Emergency Contact</SectionTitle>

                                    <Field label="Name:">
                                        <TextInput
                                            {...sharedInputStyles}
                                            value={form.emergencyName}
                                            onChange={handleChange('emergencyName')}
                                            placeholder=""
                                        />
                                    </Field>

                                    <Field label="Phone Number:">
                                        <TextInput
                                            {...sharedInputStyles}
                                            value={form.emergencyPhone}
                                            onChange={handleChange('emergencyPhone')}
                                            placeholder=""
                                            inputMode="tel"
                                        />
                                    </Field>

                                    <Field label="Relation:">
                                        <TextInput
                                            {...sharedInputStyles}
                                            value={form.emergencyRelation}
                                            onChange={handleChange('emergencyRelation')}
                                            placeholder=""
                                        />
                                    </Field>
                                </Stack>
                            </Grid.Col>
                        </Grid>

                        <Group justify="flex-end" mt="xl">
                            <Button variant="light" color="gray" radius="xl" size="md" onClick={handleCancel}>
                                Cancel
                            </Button>
                            <Button type="submit" radius="xl" size="md" loading={saving}>
                                Save Patient’s Info
                            </Button>
                        </Group>
                    </form>
                </Paper>
            </Box>
        </AppShell.Main>
    );
}
