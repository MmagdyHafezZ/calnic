import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { patients as mockPatients } from '../data/mock-data';

/**
 * Patients Store
 * Manages patient data and operations
 */
const usePatientsStore = create(
    devtools(
        persist(
            (set, get) => ({
                patients: mockPatients,
                selectedPatient: null,
                isLoading: false,
                error: null,

                setPatients: (patients) => {
                    set({ patients }, false, 'patients/setPatients');
                },

                addPatient: (patient) => {
                    const newPatient = {
                        id: Date.now(),
                        ...patient,
                    };
                    set(
                        (state) => ({
                            patients: [...state.patients, newPatient],
                        }),
                        false,
                        'patients/addPatient'
                    );
                    return newPatient;
                },

                updatePatient: (id, updates) => {
                    set(
                        (state) => ({
                            patients: state.patients.map((patient) =>
                                patient.id === id ? { ...patient, ...updates } : patient
                            ),
                        }),
                        false,
                        'patients/updatePatient'
                    );
                },

                deletePatient: (id) => {
                    set(
                        (state) => ({
                            patients: state.patients.filter((patient) => patient.id !== id),
                        }),
                        false,
                        'patients/deletePatient'
                    );
                },

                selectPatient: (patient) => {
                    set({ selectedPatient: patient }, false, 'patients/selectPatient');
                },

                clearSelectedPatient: () => {
                    set({ selectedPatient: null }, false, 'patients/clearSelectedPatient');
                },

                getPatientById: (id) => {
                    return get().patients.find((patient) => patient.id === id);
                },

                getPatientByName: (name) => {
                    return get().patients.find(
                        (patient) => patient.name.toLowerCase() === name.toLowerCase()
                    );
                },

                searchPatients: (searchTerm) => {
                    const term = searchTerm.toLowerCase();
                    return get().patients.filter(
                        (patient) =>
                            patient.name?.toLowerCase().includes(term) ||
                            patient.email?.toLowerCase().includes(term) ||
                            patient.phone?.includes(term)
                    );
                },

                // Get patients who don't have appointments for a specific doctor on a specific date/time
                getAvailablePatients: (doctorId, startTime, endTime, excludeAppointmentId = null) => {
                    // This would typically check against appointments store
                    // For now, return all patients - this will be integrated with appointments store
                    return get().patients;
                },
            }),
            {
                name: 'patients-storage',
                partialize: (state) => ({
                    patients: state.patients,
                }),
            }
        ),
        {
            name: 'PatientsStore',
            enabled: process.env.NODE_ENV === 'development',
        }
    )
);

export default usePatientsStore;
