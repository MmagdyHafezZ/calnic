'use client';

import { useEffect, useState } from 'react';
import { Box, Title, Button, Card, Stack, Text, Group, Notification } from '@mantine/core';
import { useRouter } from 'next/navigation';

export default function AppointmentReceipt() {
    const router = useRouter();
    const [qrSrc, setQrSrc] = useState('');
    const [shareMessage, setShareMessage] = useState('');
    const [detailsUrl, setDetailsUrl] = useState('');

    useEffect(() => {
        if (typeof window === 'undefined') return;
        const url = `${window.location.origin}/confirm-appointment`;
        setDetailsUrl(url);
        const src = `https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${encodeURIComponent(url)}`;
        setQrSrc(src);
    }, []);

    const handleShare = async () => {
        if (!detailsUrl) return;
        try {
            if (navigator.share) {
                await navigator.share({
                    title: 'Appointment Details',
                    text: 'View appointment details',
                    url: detailsUrl
                });
                setShareMessage('Shared!');
            } else if (navigator.clipboard?.writeText) {
                await navigator.clipboard.writeText(detailsUrl);
                setShareMessage('Link copied to clipboard');
            } else {
                setShareMessage('Sharing not available on this device.');
            }
            setTimeout(() => setShareMessage(''), 2500);
        } catch (e) {
            setShareMessage('Share was cancelled.');
            setTimeout(() => setShareMessage(''), 2000);
        }
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

                    <Stack align="center" gap="xs" mt="md">
                        <Text c="dimmed" size="sm">
                            Scan to view appointment details
                        </Text>
                        {qrSrc ? (
                            <img src={qrSrc} alt="Appointment details QR" style={{ width: 220, height: 220 }} />
                        ) : (
                            <Text c="dimmed" size="sm">
                                Generating QR...
                            </Text>
                        )}
                    </Stack>

                    <Group gap="sm" mt="md">
                        <Button size="md" variant="light" onClick={handleShare}>
                            Share link
                        </Button>
                        <Button size="md" onClick={() => router.push('/dashboard')}>
                            Back to Dashboard
                        </Button>
                    </Group>

                    {shareMessage && (
                        <Notification title="Share" color="blue" withCloseButton={false}>
                            {shareMessage}
                        </Notification>
                    )}
                </Stack>
            </Card>
        </Box>
    );
}
