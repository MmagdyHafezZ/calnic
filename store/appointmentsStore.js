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
                        end: new Date(appointment.end)
                    };
                    set(
                        (state) => ({
                            appointments: [...state.appointments, newAppointment]
                        }),
                        false,
                        'appointments/addAppointment'
                    );
                    console.log(
                        'newAppointment',
                        newAppointment,
                        newAppointment.start instanceof Date,
                        newAppointment.end instanceof Date
                    );

                    return newAppointment;
                },

                // Add a time-off block for a doctor
                addDoctorTimeOff: (doctorId, doctorName, start, end, reason = 'Time Off') => {
                    const timeOffBlock = {
                        id: Date.now(),
                        title: `${doctorName} - ${reason}`,
                        doctorId,
                        doctorName,
                        start: new Date(start),
                        end: new Date(end),
                        type: 'Time Off',
                        isTimeOff: true,
                        reason
                    };
                    set(
                        (state) => ({
                            appointments: [...state.appointments, timeOffBlock]
                        }),
                        false,
                        'appointments/addDoctorTimeOff'
                    );
                    return timeOffBlock;
                },

                flagAppointmentsForReschedule: (appointmentIds, note, conflictTimeOffId = null) => {
                    set(
                        (state) => ({
                            appointments: state.appointments.map((apt) =>
                                appointmentIds.includes(apt.id)
                                    ? {
                                          ...apt,
                                          needsReschedule: true,
                                          rescheduleNote: note,
                                          conflictTimeOffId
                                      }
                                    : apt
                            )
                        }),
                        false,
                        'appointments/flagAppointmentsForReschedule'
                    );
                },

                clearRescheduleFlag: (appointmentId) => {
                    set(
                        (state) => ({
                            appointments: state.appointments.map((apt) =>
                                apt.id === appointmentId
                                    ? {
                                          ...apt,
                                          needsReschedule: false,
                                          rescheduleNote: null,
                                          conflictTimeOffId: null
                                      }
                                    : apt
                            )
                        }),
                        false,
                        'appointments/clearRescheduleFlag'
                    );
                },

                // Check if a time slot conflicts with existing appointments or time-off
                hasConflict: (doctorId, start, end, excludeAppointmentId = null) => {
                    const startTime = dayjs(start);
                    const endTime = dayjs(end);

                    return get().appointments.some((apt) => {
                        // Skip the appointment being edited
                        if (excludeAppointmentId && apt.id === excludeAppointmentId) {
                            return false;
                        }

                        // Only check appointments for the same doctor
                        if (apt.doctorId !== doctorId) {
                            return false;
                        }

                        const aptStart = dayjs(apt.start);
                        const aptEnd = dayjs(apt.end);

                        // Check for overlap
                        return (
                            (startTime.isBefore(aptEnd) && endTime.isAfter(aptStart)) ||
                            startTime.isSame(aptStart) ||
                            endTime.isSame(aptEnd)
                        );
                    });
                },

                // Get all time-off blocks
                getTimeOffBlocks: () => {
                    return get().appointments.filter((apt) => apt.isTimeOff === true);
                },

                // Get time-off blocks for a specific doctor
                getDoctorTimeOff: (doctorId) => {
                    return get().appointments.filter((apt) => apt.isTimeOff === true && apt.doctorId === doctorId);
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
                                          end: updates.end ? new Date(updates.end) : apt.end
                                      }
                                    : apt
                            )
                        }),
                        false,
                        'appointments/updateAppointment'
                    );
                },

                deleteAppointment: (id) => {
                    set(
                        (state) => ({
                            appointments: state.appointments.filter((apt) => apt.id !== id)
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
                    if (!startDate) {
                        startDate = dayjs().startOf('day').toDate();
                    }
                    if (!endDate) {
                        endDate = dayjs().endOf('day').toDate();
                    }
                    if (!(startDate instanceof Date) || !(endDate instanceof Date)) {
                        throw new Error('Start and end dates must be valid Date objects');
                    }
                    const start = dayjs(startDate);
                    const end = dayjs(endDate);
                    return get().appointments.filter((apt) => {
                        const aptDate = dayjs(apt.start);
                        return aptDate.isAfter(start) && aptDate.isBefore(end);
                    });
                },

                getTodayAppointments: (currentDate) => {
                    const today = dayjs(currentDate).format('YYYY-MM-DD');
                    return get().appointments.filter((apt) => {
                        console.log('apt.start', apt.start, 'today', today, 'apt.patientName', apt.patientName);
                        console.log('dayjs(apt.start).format("YYYY-MM-DD")', dayjs(apt.start).format('YYYY-MM-DD'));
                        console.log('todays date', dayjs().format('YYYY-MM-DD'));
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
                }
            }),
            {
                name: 'appointments-storage',
                partialize: (state) => ({ appointments: state.appointments }),

                // ← add this
                deserialize: (str) => {
                    // Parse persisted string and return the plain state object that the store expects.
                    // The persist wrapper stores an object like { state: { ... }, version }.
                    const parsed = JSON.parse(str);
                    const restored = parsed && parsed.state ? parsed.state : parsed;
                    if (restored && Array.isArray(restored.appointments)) {
                        restored.appointments = restored.appointments.map((a) => ({
                            ...a,
                            start: a.start ? new Date(a.start) : a.start,
                            end: a.end ? new Date(a.end) : a.end
                        }));
                    }
                    return restored;
                }
            }
        ),
        {
            name: 'AppointmentsStore',
            enabled: process.env.NODE_ENV === 'development'
        }
    )
);

export default useAppointmentsStore;
