import dayjs from 'dayjs';

export const doctors = [
    { id: 1, name: 'Dr. Ahmed', status: 'Appt', color: '#10b981', colorName: 'emerald' }, // emerald green
    { id: 2, name: 'Dr. Turner', status: 'Operating', color: '#ec4899', colorName: 'pink' }, // pink
    { id: 3, name: 'Dr. Mike', status: 'In Break', color: '#f59e0b', colorName: 'amber' }, // amber yellow
    { id: 4, name: 'Dr. Joel', status: 'Remote', color: '#3b82f6', colorName: 'blue' } // blue
];

export const patients = [
    { id: 1, name: 'Oliver' },
    { id: 2, name: 'James' },
    { id: 3, name: 'Badway' },
    { id: 4, name: 'Sarah' },
    { id: 5, name: 'Michael' },
    { id: 6, name: 'Emma' },
    { id: 7, name: 'William' },
    { id: 8, name: 'Sophia' },
    { id: 9, name: 'Lucas' },
    { id: 10, name: 'Olivia' }
];

// Helpers
const rand = (arr) => arr[Math.floor(Math.random() * arr.length)];

const randInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

// Generate a random date inside the year
const randomDateInYear = (year) => {
    const month = randInt(0, 11);
    const day = randInt(1, dayjs(`${year}-${month + 1}-01`).daysInMonth());
    return dayjs(`${year}-${month + 1}-${day}`);
};

// Generate random time within a clinic working schedule
const randomTimeOfDay = () => {
    const hour = randInt(8, 16); // 08:00 → 16:00 start times
    const minuteSlot = randInt(0, 2); // 0, 20, 40 minutes
    const minute = minuteSlot * 20;
    return { hour, minute };
};

export const generateRandomYearAppointments = (count = 150, year = 2025) => {
    const result = [];

    for (let i = 0; i < count; i++) {
        const patient = rand(patients);
        const doctor = rand(doctors);

        // generate a random date in the year
        let base = randomDateInYear(year);

        // random time of day
        const { hour, minute } = randomTimeOfDay();
        const start = base.hour(hour).minute(minute).second(0);
        const end = start.add(20, 'minute');

        result.push({
            id: start.valueOf(),
            patientId: patient.id,
            patientName: patient.name.toLowerCase(),

            doctorId: doctor.id,
            doctorName: doctor.name,

            title: `${patient.name} - Appointment`,
            start: start.toISOString(),
            end: end.toISOString(),

            type: 'Appointment',
            notes: ''
        });
    }

    return result;
};

export const appointments = generateRandomYearAppointments(800, 2025);
