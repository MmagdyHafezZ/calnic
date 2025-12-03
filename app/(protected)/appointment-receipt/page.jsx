'use client';

import { useEffect, useMemo, useState } from 'react';
import { Box, Title, Button, Card, Stack, Text, Group, Notification, Divider } from '@mantine/core';
import { useRouter } from 'next/navigation';
import dayjs from 'dayjs';

export default function AppointmentReceipt() {
    const router = useRouter();
    const [shareMessage, setShareMessage] = useState('');
    const [appointment, setAppointment] = useState(null);

    useEffect(() => {
        if (typeof window === 'undefined') return;
        try {
            const saved = JSON.parse(localStorage.getItem('lastAppointmentReceipt') || 'null');
            if (saved) setAppointment(saved);
        } catch (e) {
            console.warn('Could not load appointment receipt', e);
        }
    }, []);

    const formattedDetails = useMemo(() => {
        if (!appointment) return null;
        return {
            patientName: appointment.patientName || 'Patient',
            doctorName: appointment.doctorName || 'Doctor',
            type: appointment.type || 'Appointment',
            date: dayjs(appointment.start).format('dddd, MMMM D, YYYY'),
            time: `${dayjs(appointment.start).format('h:mm A')} - ${dayjs(appointment.end).format('h:mm A')}`,
            notes: appointment.notes || '',
            medicalHistory: appointment.medicalHistory || '',
            diagnosticReason: appointment.diagnosticReason || '',
            diagnosticAnswers: appointment.diagnosticAnswers || {}
        };
    }, [appointment]);

    const handleOpenPdf = () => {
        if (!formattedDetails) return;
        const html = `
<!doctype html>
<html>
<head>
  <meta charset="utf-8" />
  <title>Appointment Details</title>
  <style>
    body { font-family: Arial, sans-serif; margin: 24px; color: #111; }
    h1 { margin-bottom: 8px; }
    h2 { margin: 18px 0 6px; font-size: 16px; }
    p { margin: 4px 0; }
    .section { margin-bottom: 12px; }
  </style>
</head>
<body>
  <h1>Appointment Details</h1>
  <div class="section"><strong>Patient:</strong> ${formattedDetails.patientName}</div>
  <div class="section"><strong>Doctor:</strong> ${formattedDetails.doctorName}</div>
  <div class="section"><strong>Type:</strong> ${formattedDetails.type}</div>
  <div class="section"><strong>Date:</strong> ${formattedDetails.date}</div>
  <div class="section"><strong>Time:</strong> ${formattedDetails.time}</div>
  ${
      formattedDetails.medicalHistory
          ? `<div class="section"><h2>Medical History</h2><p>${formattedDetails.medicalHistory}</p></div>`
          : ''
  }
  ${formattedDetails.notes ? `<div class="section"><h2>Notes</h2><p>${formattedDetails.notes}</p></div>` : ''}
  ${
      formattedDetails.diagnosticReason
          ? `<div class="section"><h2>Diagnostic Reason</h2><p>${formattedDetails.diagnosticReason}</p></div>`
          : ''
  }
</body>
</html>`;
        const printWindow = window.open('', '_blank');
        if (!printWindow) return;
        printWindow.document.write(html);
        printWindow.document.close();
        printWindow.focus();
        printWindow.print();
    };

    const handleDownloadPdf = () => {
        if (!formattedDetails) return;
        const text = [
            'Appointment Details',
            `Patient: ${formattedDetails.patientName}`,
            `Doctor: ${formattedDetails.doctorName}`,
            `Type: ${formattedDetails.type}`,
            `Date: ${formattedDetails.date}`,
            `Time: ${formattedDetails.time}`,
            formattedDetails.medicalHistory ? `Medical History: ${formattedDetails.medicalHistory}` : '',
            formattedDetails.notes ? `Notes: ${formattedDetails.notes}` : '',
            formattedDetails.diagnosticReason ? `Diagnostic Reason: ${formattedDetails.diagnosticReason}` : ''
        ]
            .filter(Boolean)
            .join('\n');
        const blob = new Blob([text], { type: 'application/pdf' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'appointment-details.pdf';
        a.click();
        URL.revokeObjectURL(url);
        setShareMessage('PDF ready to download');
        setTimeout(() => setShareMessage(''), 2000);
    };

    return (
        <Box style={{ padding: '2rem', paddingTop: '3rem' }}>
            <Card shadow="sm" padding="lg" withBorder style={{ maxWidth: '60vw', margin: 'auto', marginTop: '2rem' }}>
                <Stack spacing="md" align="center">
                    <Title order={2} ta="center">
                        Success
                    </Title>
                    <Title order={4} ta="center">
                        Appointment has been successfully added to schedule
                    </Title>

                    {formattedDetails ? (
                        <Box style={{ width: '100%' }}>
                            <Stack gap="sm">
                                <Group justify="space-between">
                                    <Text fw={600}>Patient</Text>
                                    <Text>{formattedDetails.patientName}</Text>
                                </Group>
                                <Group justify="space-between">
                                    <Text fw={600}>Doctor</Text>
                                    <Text>{formattedDetails.doctorName}</Text>
                                </Group>
                                <Group justify="space-between">
                                    <Text fw={600}>Type</Text>
                                    <Text>{formattedDetails.type}</Text>
                                </Group>
                                <Group justify="space-between">
                                    <Text fw={600}>Date</Text>
                                    <Text>{formattedDetails.date}</Text>
                                </Group>
                                <Group justify="space-between">
                                    <Text fw={600}>Time</Text>
                                    <Text>{formattedDetails.time}</Text>
                                </Group>
                                {formattedDetails.medicalHistory && (
                                    <>
                                        <Divider />
                                        <Text fw={600}>Medical History</Text>
                                        <Text c="dimmed" size="sm">
                                            {formattedDetails.medicalHistory}
                                        </Text>
                                    </>
                                )}
                                {formattedDetails.notes && (
                                    <>
                                        <Divider />
                                        <Text fw={600}>Notes</Text>
                                        <Text c="dimmed" size="sm">
                                            {formattedDetails.notes}
                                        </Text>
                                    </>
                                )}
                                {formattedDetails.diagnosticReason && (
                                    <>
                                        <Divider />
                                        <Text fw={600}>Diagnostic Reason</Text>
                                        <Text c="dimmed" size="sm">
                                            {formattedDetails.diagnosticReason}
                                        </Text>
                                    </>
                                )}
                            </Stack>
                        </Box>
                    ) : (
                        <Text c="dimmed" size="sm" ta="center">
                            Appointment details unavailable. Please return to Dashboard.
                        </Text>
                    )}

                    <Group gap="sm" mt="md">
                        <Button size="md" variant="light" onClick={handleOpenPdf} disabled={!formattedDetails}>
                            Open PDF
                        </Button>
                        <Button size="md" variant="outline" onClick={handleDownloadPdf} disabled={!formattedDetails}>
                            Download PDF
                        </Button>
                        <Button size="md" onClick={() => router.push('/dashboard')}>
                            Back to Dashboard
                        </Button>
                    </Group>

                    {shareMessage && (
                        <Notification title="Download" color="blue" withCloseButton={false}>
                            {shareMessage}
                        </Notification>
                    )}
                </Stack>
            </Card>
        </Box>
    );
}
