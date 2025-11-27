import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { doctors as mockDoctors } from '../data/mock-data';

/**
 * Doctors Store
 * Manages doctor data and operations
 */
const useDoctorsStore = create(
    devtools(
        persist(
            (set, get) => ({
            doctors: mockDoctors,
            selectedDoctor: null,
            isLoading: false,
            error: null,

            setDoctors: (doctors) => {
                set({ doctors }, false, 'doctors/setDoctors');
            },

            addDoctor: (doctor) => {
                const newDoctor = {
                    id: Date.now(),
                    ...doctor,
                };
                set(
                    (state) => ({
                        doctors: [...state.doctors, newDoctor],
                    }),
                    false,
                    'doctors/addDoctor'
                );
                return newDoctor;
            },

            updateDoctor: (id, updates) => {
                set(
                    (state) => ({
                        doctors: state.doctors.map((doc) => (doc.id === id ? { ...doc, ...updates } : doc)),
                    }),
                    false,
                    'doctors/updateDoctor'
                );
            },

            deleteDoctor: (id) => {
                set(
                    (state) => ({
                        doctors: state.doctors.filter((doc) => doc.id !== id),
                    }),
                    false,
                    'doctors/deleteDoctor'
                );
            },

            updateDoctorStatus: (id, status, color) => {
                set(
                    (state) => ({
                        doctors: state.doctors.map((doc) =>
                            doc.id === id
                                ? {
                                      ...doc,
                                      status,
                                      color: color || doc.color,
                                  }
                                : doc
                        ),
                    }),
                    false,
                    'doctors/updateDoctorStatus'
                );
            },

            selectDoctor: (doctor) => {
                set({ selectedDoctor: doctor }, false, 'doctors/selectDoctor');
            },

            clearSelectedDoctor: () => {
                set({ selectedDoctor: null }, false, 'doctors/clearSelectedDoctor');
            },

            getDoctorById: (id) => {
                return get().doctors.find((doc) => doc.id === id);
            },

            getDoctorByName: (name) => {
                return get().doctors.find((doc) => doc.name.toLowerCase() === name.toLowerCase());
            },

            getDoctorsByStatus: (status) => {
                return get().doctors.filter((doc) => doc.status === status);
            },

            getAvailableDoctors: () => {
                return get().doctors.filter((doc) => doc.status === 'Appt');
            },

            searchDoctors: (searchTerm) => {
                const term = searchTerm.toLowerCase();
                return get().doctors.filter((doc) => doc.name.toLowerCase().includes(term));
            },
        }),
        {
            name: 'doctors-storage',
            partialize: (state) => ({
                doctors: state.doctors,
            }),
        }
        ),
        {
            name: 'DoctorsStore',
            enabled: process.env.NODE_ENV === 'development',
        }
    )
);

export default useDoctorsStore;
