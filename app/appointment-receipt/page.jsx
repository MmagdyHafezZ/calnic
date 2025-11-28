'use client';

import {Box, Title, Button, Card, Stack } from '@mantine/core';

import { useRouter } from 'next/navigation';

export default function AppointmentReceipt() {
      const handlePrint = () => {
    window.print();
  };
    const router = useRouter();
    return (
        <Box style={{ padding: '2rem', paddingTop: '3rem' }}>
            <Card shadow="sm" padding="lg" withBorder style={{ maxWidth: '60vw', margin: 'auto', marginTop: '2rem' }}>
                <Stack spacing="md" align="center">
                    <Title order={2} ta="center"> Success </Title>
                    <Title order={4} ta="center"> Appointment has been successfully added to schedule</Title>
                    <Button size="md" style={{ marginTop: '1rem' }} onClick={handlePrint}>Print Page</Button>
                    <Button size="md" style={{ marginTop: '1rem' }} onClick={() => router.push('/dashboard')}>Back to Dashboard</Button>
                </Stack>
            </Card>
        </Box>
    )
}
