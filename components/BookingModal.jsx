'use client';

import { useState, useEffect, useMemo } from 'react';
import {
    Modal,
    Stack,
    Select,
    TextInput,
    Button,
    Group,
    Text,
    Alert,
    Radio,
    Textarea,
    NumberInput
} from '@mantine/core';
import { DateTimePicker } from '@mantine/dates';
import { IconAlertCircle, IconCalendar } from '@tabler/icons-react';
import dayjs from 'dayjs';
import { useAppointmentsStore, useDoctorsStore, usePatientsStore } from '../store';

export default function BookingModal({ opened, onClose }) {
    const { doctors } = useDoctorsStore();
    const { patients, searchPatients } = usePatientsStore();
    const { addAppointment, addDoctorTimeOff, hasConflict } = useAppointmentsStore();

    const [bookingType, setBookingType] = useState('appointment');
    const [selectedDoctorId, setSelectedDoctorId] = useState(null);
    const [selectedPatientId, setSelectedPatientId] = useState(null);
    const [patientSearchQuery, setPatientSearchQuery] = useState('');
    const [startDateTime, setStartDateTime] = useState(null);
    const [duration, setDuration] = useState(30);
    const [timeOffReason, setTimeOffReason] = useState('');
    const [errors, setErrors] = useState({});
    const [conflictError, setConflictError] = useState('');

    // Reset form when modal opens/closes
    useEffect(() => {
        if (!opened) {
            resetForm();
        }
    }, [opened]);

    const resetForm = () => {
        setBookingType('appointment');
        setSelectedDoctorId(null);
        setSelectedPatientId(null);
        setPatientSearchQuery('');
        setStartDateTime(null);
        setDuration(30);
        setTimeOffReason('');
        setErrors({});
        setConflictError('');
    };

    // Filter patients based on search query
    const filteredPatients = useMemo(() => {
        if (!patientSearchQuery) {
            return patients;
        }
        return searchPatients(patientSearchQuery);
    }, [patients, patientSearchQuery, searchPatients]);

    // Prepare doctor select data
    const doctorSelectData = doctors.map((doc) => ({
        value: doc.id.toString(),
        label: doc.name,
    }));

    // Prepare patient select data
    const patientSelectData = filteredPatients.map((patient) => ({
        value: patient.id.toString(),
        label: patient.name,
    }));

    // Validate duration
    const validateDuration = (value) => {
        const num = Number(value);

        if (isNaN(num)) {
            return 'Duration must be a number';
        }

        if (num <= 0) {
            return 'Duration must be greater than 0';
        }

        if (num > 480) {
            return 'Duration cannot exceed 8 hours (480 minutes)';
        }

        if (num % 5 !== 0) {
            return 'Duration should be in 5-minute increments';
        }

        return null;
    };

    // Validate form
    const validateForm = () => {
        const newErrors = {};

        if (!selectedDoctorId) {
            newErrors.doctor = 'Please select a doctor';
        }

        if (bookingType === 'appointment' && !selectedPatientId) {
            newErrors.patient = 'Please select a patient';
        }

        if (bookingType === 'timeoff' && !timeOffReason.trim()) {
            newErrors.reason = 'Please provide a reason for time off';
        }

        if (!startDateTime) {
            newErrors.startDateTime = 'Please select a date and time';
        } else {
            // Check if date is in the past
            if (dayjs(startDateTime).isBefore(dayjs(), 'minute')) {
                newErrors.startDateTime = 'Cannot book appointments in the past';
            }
        }

        const durationError = validateDuration(duration);
        if (durationError) {
            newErrors.duration = durationError;
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // Check for conflicts
    const checkConflicts = () => {
        if (!selectedDoctorId || !startDateTime || !duration) {
            return false;
        }

        const endDateTime = dayjs(startDateTime).add(duration, 'minute').toDate();
        const conflict = hasConflict(Number(selectedDoctorId), startDateTime, endDateTime);

        if (conflict) {
            setConflictError(
                `This time slot conflicts with an existing appointment or time-off for this doctor`
            );
            return true;
        }

        setConflictError('');
        return false;
    };

    // Handle form submission
    const handleSubmit = () => {
        setConflictError('');

        if (!validateForm()) {
            return;
        }

        if (checkConflicts()) {
            return;
        }

        const doctor = doctors.find((d) => d.id === Number(selectedDoctorId));
        const endDateTime = dayjs(startDateTime).add(duration, 'minute').toDate();

        if (bookingType === 'timeoff') {
            addDoctorTimeOff(
                Number(selectedDoctorId),
                doctor.name,
                startDateTime,
                endDateTime,
                timeOffReason
            );
        } else {
            const patient = patients.find((p) => p.id === Number(selectedPatientId));

            addAppointment({
                title: patient.name,
                patientName: patient.name,
                patientId: patient.id,
                doctorName: doctor.name,
                doctorId: doctor.id,
                start: startDateTime,
                end: endDateTime,
                type: 'Appointment',
            });
        }

        onClose();
        resetForm();
    };

    // Check for conflicts when relevant fields change
    useEffect(() => {
        if (selectedDoctorId && startDateTime && duration) {
            checkConflicts();
        }
    }, [selectedDoctorId, startDateTime, duration]);

    return (
        <Modal
            opened={opened}
            onClose={onClose}
            title={bookingType === 'appointment' ? 'Book Appointment' : 'Book Doctor Time Off'}
            size="lg"
            centered
        >
            <Stack gap="md">
                <Radio.Group
                    value={bookingType}
                    onChange={(value) => {
                        setBookingType(value);
                        setErrors({});
                        setConflictError('');
                    }}
                    label="Booking Type"
                >
                    <Group mt="xs">
                        <Radio value="appointment" label="Patient Appointment" />
                        <Radio value="timeoff" label="Doctor Time Off" />
                    </Group>
                </Radio.Group>

                <Select
                    label="Doctor"
                    placeholder="Select a doctor"
                    data={doctorSelectData}
                    value={selectedDoctorId?.toString()}
                    onChange={(value) => {
                        setSelectedDoctorId(value ? Number(value) : null);
                        setErrors((prev) => ({ ...prev, doctor: null }));
                    }}
                    error={errors.doctor}
                    required
                    searchable
                    leftSection={<IconCalendar size={16} />}
                />

                {bookingType === 'appointment' && (
                    <Select
                        label="Patient"
                        placeholder="Search and select a patient"
                        data={patientSelectData}
                        value={selectedPatientId?.toString()}
                        onChange={(value) => {
                            setSelectedPatientId(value ? Number(value) : null);
                            setErrors((prev) => ({ ...prev, patient: null }));
                        }}
                        onSearchChange={setPatientSearchQuery}
                        searchValue={patientSearchQuery}
                        error={errors.patient}
                        required
                        searchable
                        nothingFoundMessage={
                            patientSearchQuery
                                ? 'No patients found matching your search'
                                : 'Start typing to search patients'
                        }
                    />
                )}

                {bookingType === 'timeoff' && (
                    <TextInput
                        label="Reason for Time Off"
                        placeholder="e.g., Vacation, Conference, Personal Day"
                        value={timeOffReason}
                        onChange={(e) => {
                            setTimeOffReason(e.target.value);
                            setErrors((prev) => ({ ...prev, reason: null }));
                        }}
                        error={errors.reason}
                        required
                    />
                )}

                <DateTimePicker
                    label="Start Date & Time"
                    placeholder="Select date and time"
                    value={startDateTime}
                    onChange={(value) => {
                        setStartDateTime(value);
                        setErrors((prev) => ({ ...prev, startDateTime: null }));
                    }}
                    error={errors.startDateTime}
                    required
                    minDate={new Date()}
                    clearable
                />

                <NumberInput
                    label="Duration (minutes)"
                    placeholder="Enter duration in minutes"
                    value={duration}
                    onChange={(value) => {
                        setDuration(value);
                        setErrors((prev) => ({ ...prev, duration: null }));
                    }}
                    error={errors.duration}
                    required
                    min={5}
                    max={480}
                    step={5}
                    description="Duration should be between 5 and 480 minutes (8 hours), in 5-minute increments"
                />

                {conflictError && (
                    <Alert icon={<IconAlertCircle size={16} />} color="red" title="Scheduling Conflict">
                        {conflictError}
                    </Alert>
                )}

                {Object.keys(errors).length > 0 && !conflictError && (
                    <Alert icon={<IconAlertCircle size={16} />} color="orange" title="Please fix the following errors">
                        Please correct the highlighted fields above
                    </Alert>
                )}

                <Group justify="flex-end" mt="md">
                    <Button variant="light" onClick={onClose}>
                        Cancel
                    </Button>
                    <Button onClick={handleSubmit}>
                        {bookingType === 'appointment' ? 'Book Appointment' : 'Block Time Off'}
                    </Button>
                </Group>
            </Stack>
        </Modal>
    );
}
