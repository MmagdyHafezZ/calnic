'use client';

import {
    Flex,
    Textarea,
    Radio,
    Group,
    TextInput,
    Grid,
    Paper,
    Box,
    Title,
    Text,
    Button,
    Stack,
    Card
} from '@mantine/core';
import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import useAppointmentsStore from '../../../store/appointmentsStore';
import dayjs from 'dayjs';

export default function ConfirmAppointment() {
    const router = useRouter();
    const addAppointment = useAppointmentsStore((s) => s.addAppointment);
    const updateAppointment = useAppointmentsStore((s) => s.updateAppointment);
    const pending = useAppointmentsStore((s) => s.selectedAppointment);
    const clearSelectedAppointment = useAppointmentsStore((s) => s.clearSelectedAppointment);

    const handleConfirm = () => {
        if (!pending) return;
        const appointment = {
            patientName: pending.patientName || 'Patient',
            doctorName: pending.doctorName,
            doctorId: pending.doctorId,
            title: pending.patientName ? `${pending.patientName} - Appointment` : 'Appointment',
            start: new Date(pending.start),
            end: new Date(pending.end),
            type: pending.appointmentType || pending.type || 'Booked',
            notes: pending.notes || '',
            needsReschedule: false,
            rescheduleNote: null,
            conflictTimeOffId: null
        };
        try {
            console.log('pendingBooking', pending);
            console.log('start type', typeof pending.start, pending.start);
            console.log('end type', typeof pending.end, pending.end);
            if (pending.originalAppointmentId) {
                updateAppointment(pending.originalAppointmentId, appointment);
            } else {
                addAppointment(appointment);
            }
            clearSelectedAppointment();
            router.push('/appointment-receipt');
        } catch (e) {
            console.error('Failed to add appointment', e);
        }
    };

    const handleCancel = () => {
        clearSelectedAppointment();
        router.back();
    };

    return (
        <Box
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '2rem',
                paddingTop: '3rem',
                minHeight: '100vh'
            }}
        >
            <Card
                shadow="sm"
                padding="lg"
                withBorder
                style={{ maxWidth: '60vw', height: '80vh', margin: 'auto', marginTop: '2rem' }}
            >
                <Flex direction="column" style={{ padding: '2rem', height: '100%' }}>
                    <Title order={1} ta="center">
                        Confirmation
                    </Title>

                    {!pending && <Text mt="md">No pending booking found. Go back to schedule to select a time.</Text>}

                    {pending && (
                        <Box mt="md" style={{ flex: 1 }}>
                            <Flex align="center" mt="md" gap="md">
                                <Box w={150}>
                                    <Text ta="right">Patient Name:</Text>
                                </Box>
                                <Paper shadow="none" radius="lg" p="xs" bg="#ededed" style={{ flex: 1 }}>
                                    <Text ta="left" weight={500}>
                                        {pending.patientName}
                                    </Text>
                                </Paper>
                            </Flex>

                            <Flex align="center" mt="md" gap="md">
                                <Box w={150}>
                                    <Text ta="right">Date and Time:</Text>
                                </Box>
                                <Paper shadow="none" radius="lg" p="xs" bg="#ededed" style={{ flex: 1 }}>
                                    <Text ta="left" weight={500}>
                                        {dayjs(pending.start).format('dddd, MMM D YYYY, [at] h:mm A')}
                                    </Text>
                                </Paper>
                            </Flex>

                            <Flex align="center" mt="md" gap="md">
                                <Box w={150}>
                                    <Text ta="right">Duration:</Text>
                                </Box>
                                <Paper shadow="none" radius="lg" p="xs" bg="#ededed" style={{ flex: 1 }}>
                                    <Text ta="left" weight={500}>
                                        {pending.duration} minutes
                                    </Text>
                                </Paper>
                            </Flex>

                            <Flex align="center" mt="md" gap="md">
                                <Box w={150}>
                                    <Text ta="right">Appointment Type:</Text>
                                </Box>
                                <Paper shadow="none" radius="lg" p="xs" bg="#ededed" style={{ flex: 1 }}>
                                    <Text ta="left" weight={500}>
                                        {pending.appointmentType}
                                    </Text>
                                </Paper>
                            </Flex>

                            <Flex align="center" mt="md" gap="md">
                                <Box w={150}>
                                    <Text ta="right">Doctor:</Text>
                                </Box>
                                <Paper shadow="none" radius="lg" p="xs" bg="#ededed" style={{ flex: 1 }}>
                                    <Text ta="left" weight={500}>
                                        {pending.doctorName}
                                    </Text>
                                </Paper>
                            </Flex>
                        </Box>
                    )}

                    <Flex gap="md" justify="flex-end">
                        <Button size="lg" variant="outline" onClick={handleCancel}>
                            Cancel
                        </Button>
                        <Button size="lg" disabled={!pending} onClick={handleConfirm}>
                            Confirm Appointment
                        </Button>
                    </Flex>
                </Flex>
            </Card>
        </Box>
    );
}
