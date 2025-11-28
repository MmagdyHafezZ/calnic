'use client';

import { Flex, Textarea, Radio, Group, TextInput, Grid, Box, Title, Text, Button, Stack, Card } from '@mantine/core';
import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function BookPage() {
  const [selected, setSelected] = useState('20');
  const [customValue, setCustomValue] = useState('');
  const [patientName, setPatientName] = useState('');
  const [appointmentType, setAppointmentType] = useState('Standard');
  const [symptoms, setSymptoms] = useState('');
  const [medicalHistory, setMedicalHistory] = useState('');
  const [notes, setNotes] = useState('');
  const inputRef = useRef(null);
  const router = useRouter();


  const durationValue =
    selected === 'custom' ? parseInt(customValue, 10) || 0 : parseInt(selected, 10);

  const isFormValid =
    patientName.trim() !== '' &&
    appointmentType &&
    durationValue > 0 &&
    symptoms.trim() !== '';

    useEffect(() => {
      if (selected === 'custom'){
        inputRef.current?.focus();
      }
  },
    [selected]);

    return (
        <Box style={{padding: '2rem', paddingTop:'3rem'}}>
            <Grid gutter="md">
                <Grid.Col span={8}>
        <Card shadow="sm" padding="lg" withBorder style={{ maxWidth: '60vw', height: '80vh', margin: 'auto', marginTop: '2rem' , marginLeft: 0}}>
            <Grid gutter="md" style={{marginTop: '2rem'}}>
      <Grid.Col span={6}>
        <Title order={3}>Patient Name: <span style={{ color: 'var(--mantine-color-red-6)' }}>*</span></Title>
              <TextInput
                placeholder="Patient Name"
                variant="filled"
                size="md"
                style={{marginTop:'1rem'}}
                value={patientName}
                onChange={(e) => setPatientName(e.target.value)}
              />
              <Button  size="md" style={{ marginTop: '1rem' }}>Add Patient</Button>
      </Grid.Col>
      <Grid.Col span={6}>
        <Title padding= "lg" order={3}>Appointment Type: <span style={{ color: 'var(--mantine-color-red-6)' }}>*</span></Title>
              <Radio.Group name="appointment-type" value={appointmentType} onChange={setAppointmentType}>
                  <Group mt="lg">
                      <Radio value="Walk-in" label="Walk-in" size='lg'/>
                      <Radio value="Follow-up" label="Follow-up" size='lg' />
                      <Radio value="Standard" label="Standard" size='lg' />
                      <Radio value="Specialist" label="Specialist" size='lg' />
                  </Group>
              </Radio.Group>
      </Grid.Col>
    </Grid>
    <Title order={3} style={{ marginTop: '2rem', marginBottom: '1rem' }}>Appointment Duration: <span style={{ color: 'var(--mantine-color-red-6)' }}>*</span></Title>
    <Button.Group>
        <Button
            size="md"
            variant={selected === '20' ? 'filled' : 'outline'}
            onClick={() => setSelected('20')}
        >20 Minutes</Button>
        <Button
            size="md"
            variant={selected === '40' ? 'filled' : 'outline'}
            onClick={() => setSelected('40')}
        >
            40 Minutes</Button>
        <Button
            size="md"
            variant={selected === '60' ? 'filled' : 'outline'}
            onClick={() => setSelected('60')}
        >
            60 Minutes
        </Button>
        <Box style={{ position: 'relative' }}>
        <Button
          size="md"
          variant={selected === 'custom' ? 'filled' : 'outline'}
          onClick={() => setSelected('custom')}
          style={{ width: 160 }}
        >
          {selected === 'custom' ? (
            <Group gap="xs"> 
            <TextInput
              padding= 'xs'
              ref={inputRef}
              radius= 'lg'
              value={customValue}
              onChange={(e) => setCustomValue(e.target.value)}
              size="md"
              variant="unstyled"
              style={{ width: '40%'}}
              styles={{
              input: {
                textAlign: 'center',
              },
            }}
            />
            <Text>
              Minutes
            </Text>
            </Group>
          ) : (
            'Custom'
          )}
        </Button>
      </Box>

            
    </Button.Group>
    <Title order={3} style={{ marginTop: '2rem', marginBottom: '1rem' }}>Symptoms:  <span style={{ color: 'var(--mantine-color-red-6)' }}>*</span></Title>
    <Textarea
      withAsterisk
      placeholder="Describe patient's symptoms..."
      autosize
      minRows={6}
      variant="filled"
      size="md"
      style={{ width: '100%' }}
      value={symptoms}
      onChange={(e) => setSymptoms(e.target.value)}
    />
    </Card>
    </Grid.Col>
<Grid.Col span={4}>
  <Flex direction="column" mih="85vh" style={{ paddingTop: '2rem' }}>

    <Box style={{ flexGrow: 1 }}>
      <Title order={3}>Relevant Medical History:</Title>
      <Textarea
        placeholder="List relevant medical history..."
        autosize
        minRows={6}
        variant="filled"
        size="md"
        style={{ width: '100%', marginTop: '2rem' }}
        value={medicalHistory}
        onChange={(e) => setMedicalHistory(e.target.value)}
      />

      <Title order={3} style={{ marginTop: '2rem' }}>
        Notes:
      </Title>
      <Textarea
        placeholder="Extra notes..."
        autosize
        minRows={6}
        variant="filled"
        size="md"
        style={{ width: '100%', marginTop: '2rem' }}
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
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
          const duration =
            selected === 'custom'
              ? parseInt(customValue, 10) || 0
              : parseInt(selected, 10);

          const bookingDetails = {
            patientName,
            appointmentType,
            duration,
            symptoms,
            medicalHistory,
            notes,
          };

          try {
            localStorage.setItem('bookingDetails', JSON.stringify(bookingDetails));
          } catch (e) {
            console.error('Failed to save booking details', e);
          }

          router.push('/schedule-appointment');
        }}
      >
        Next: Schedule
      </Button>
    </Group>
  </Flex>
</Grid.Col>


</Grid>
    </Box>

        
    );
}
