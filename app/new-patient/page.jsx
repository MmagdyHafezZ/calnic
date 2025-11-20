'use client';

import { useEffect, useState } from 'react';
import { AppShell, Group, Menu, Title, Button, Paper, Box, Grid, Stack, Text, TextInput } from '@mantine/core';
import { IconMenu2, IconUser, IconStethoscope } from '@tabler/icons-react';

const Field = ({ label, children }) => (
    <Group align="center" wrap="nowrap" gap="xs">
        <Text w={140} fw={600}>
            {label}
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
    const [user, setUser] = useState(() => {
        if (typeof window !== 'undefined') {
            const userStr = localStorage.getItem('user');
            return userStr ? JSON.parse(userStr) : null;
        }
        return null;
    });

    const [saving, setSaving] = useState(false);
    const [form, setForm] = useState({
        name: 'Micheal Scholfield',
        dob: '',
        healthNumber: '',
        phone: '',
        email: '',
        emergencyName: '',
        emergencyPhone: '',
        emergencyRelation: ''
    });

    useEffect(() => {
        if (!user && typeof window !== 'undefined') {
            window.location.href = '/';
        }
    }, [user]);

    const handleChange = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }));
    const handleCancel = () => window.history.back();

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
        // Persist new patient for success page
        const patientRecord = {
            name: form.name.trim(),
            dob: form.dob, // ISO yyyy-mm-dd
            healthNumber: form.healthNumber.trim(),
            phone: form.phone.trim(),
            email: form.email.trim(),
            emergencyName: form.emergencyName.trim(),
            emergencyPhone: form.emergencyPhone.trim(),
            emergencyRelation: form.emergencyRelation.trim(),
            createdAt: Date.now()
        };
        localStorage.setItem('newPatient', JSON.stringify(patientRecord));
        setTimeout(() => {
            setSaving(false);
            window.location.href = '/new-patient/success';
        }, 400);
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

    if (!user) {
        return (
            <Box style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
                <Text c="dimmed">Loading...</Text>
            </Box>
        );
    }

    return (
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
                                {user?.name || 'User'}
                            </Button>
                        </Menu.Target>
                        <Menu.Dropdown>
                            <Menu.Item
                                color="red"
                                onClick={() => {
                                    localStorage.removeItem('user');
                                    window.location.href = '/';
                                }}
                            >
                                Logout
                            </Menu.Item>
                        </Menu.Dropdown>
                    </Menu>
                </Group>
            </AppShell.Header>

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
                        <Title ta="center" order={1} c="blue.6" mb="xl">
                            New Patient
                        </Title>

                        <form onSubmit={handleSubmit}>
                            <Grid gutter="xl">
                                <Grid.Col span={{ base: 12, md: 6 }}>
                                    <Stack gap="lg">
                                        <SectionTitle>Patient Info</SectionTitle>

                                        <Field label="Name:">
                                            <TextInput
                                                {...sharedInputStyles}
                                                value={form.name}
                                                onChange={handleChange('name')}
                                                placeholder="Full name"
                                                required
                                            />
                                        </Field>

                                        <Field label="Date of Birth:">
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
        </AppShell>
    );
}
