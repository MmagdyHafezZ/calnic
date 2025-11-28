import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { appointments as mockAppointments } from '../data/mock-data';
import dayjs from 'dayjs';

/**
 * Appointments Store
 * Manages appointment data and operations
 */
const useAppointmentsStore = create(
    devtools(
        persist(
            (set, get) => ({
            appointments: mockAppointments,
            selectedAppointment: null,
            isLoading: false,
            error: null,

            setAppointments: (appointments) => {
                set({ appointments }, false, 'appointments/setAppointments');
            },

            addAppointment: (appointment) => {
                const newAppointment = {
                    id: Date.now(),
                    ...appointment,
                    start: new Date(appointment.start),
                    end: new Date(appointment.end),
                };
                set(
                    (state) => ({
                        appointments: [...state.appointments, newAppointment],
                    }),
                    false,
                    'appointments/addAppointment'
                );
                return newAppointment;
            },

            updateAppointment: (id, updates) => {
                set(
                    (state) => ({
                        appointments: state.appointments.map((apt) =>
                            apt.id === id
                                ? {
                                      ...apt,
                                      ...updates,
                                      start: updates.start ? new Date(updates.start) : apt.start,
                                      end: updates.end ? new Date(updates.end) : apt.end,
                                  }
                                : apt
                        ),
                    }),
                    false,
                    'appointments/updateAppointment'
                );
            },

            deleteAppointment: (id) => {
                set(
                    (state) => ({
                        appointments: state.appointments.filter((apt) => apt.id !== id),
                    }),
                    false,
                    'appointments/deleteAppointment'
                );
            },

            selectAppointment: (appointment) => {
                set({ selectedAppointment: appointment }, false, 'appointments/selectAppointment');
            },

            clearSelectedAppointment: () => {
                set({ selectedAppointment: null }, false, 'appointments/clearSelectedAppointment');
            },

            getAppointmentById: (id) => {
                return get().appointments.find((apt) => apt.id === id);
            },

            getAppointmentsByDate: (date) => {
                const targetDate = dayjs(date).format('YYYY-MM-DD');
                return get().appointments.filter((apt) => {
                    return dayjs(apt.start).format('YYYY-MM-DD') === targetDate;
                });
            },

            getAppointmentsByDoctor: (doctorName) => {
                return get().appointments.filter((apt) => apt.doctorName === doctorName);
            },

            getAppointmentsByPatient: (patientName) => {
                return get().appointments.filter((apt) => apt.patientName === patientName);
            },

            getAppointmentsInRange: (startDate, endDate) => {
                const start = dayjs(startDate);
                const end = dayjs(endDate);
                return get().appointments.filter((apt) => {
                    const aptDate = dayjs(apt.start);
                    return aptDate.isAfter(start) && aptDate.isBefore(end);
                });
            },

            getTodayAppointments: () => {
                const today = dayjs().format('YYYY-MM-DD');
                return get().appointments.filter((apt) => {
                    return apt.patientName && dayjs(apt.start).format('YYYY-MM-DD') === today;
                });
            },

            searchAppointments: (searchTerm) => {
                const term = searchTerm.toLowerCase();
                return get().appointments.filter(
                    (apt) =>
                        apt.patientName?.toLowerCase().includes(term) ||
                        apt.doctorName?.toLowerCase().includes(term) ||
                        apt.title?.toLowerCase().includes(term)
                );
            },
        }),
        {
            name: 'appointments-storage',
            partialize: (state) => ({
                appointments: state.appointments,
            }),
        }
        ),
        {
            name: 'AppointmentsStore',
            enabled: process.env.NODE_ENV === 'development',
        }
    )
);

export default useAppointmentsStore;
