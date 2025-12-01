import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import dayjs from 'dayjs';

/**
 * UI Store
 * Manages UI-related state (calendar view, search, modals, etc.)
 */
const useUIStore = create(
    devtools(
        persist(
            (set, get) => ({
                calendarView: 'month',
                currentDate: null,

                searchQuery: '',
                patientSearchQuery: '',
                selectedDoctors: [],

                isBookingModalOpen: false,
                isPatientModalOpen: false,
                isAppointmentDetailsModalOpen: false,

                isSidebarCollapsed: false,

                theme: 'light',

                setCalendarView: (view) => {
                    set({ calendarView: view }, false, 'ui/setCalendarView');
                },

                setCurrentDate: (date) => {
                    set({ currentDate: new Date(date) }, false, 'ui/setCurrentDate');
                },

                navigateCalendar: (action) => {
                    const { currentDate, calendarView } = get();
                    let newDate;

                    // Determine the unit to navigate by based on the current view
                    let unit;
                    switch (calendarView) {
                        case 'day':
                            unit = 'day';
                            break;
                        case 'week':
                            unit = 'week';
                            break;
                        case 'month':
                            unit = 'month';
                            break;
                        case 'agenda':
                            unit = 'year';
                            break;
                        default:
                            unit = 'month';
                    }

                    if (action === 'PREV') {
                        newDate = dayjs(currentDate).subtract(1, unit).toDate();
                    } else if (action === 'NEXT') {
                        newDate = dayjs(currentDate).add(1, unit).toDate();
                    } else if (action === 'TODAY') {
                        newDate = new Date();
                    }

                    if (newDate) {
                        set({ currentDate: newDate }, false, 'ui/navigateCalendar');
                    }
                },

                goToToday: () => {
                    set({ currentDate: new Date() }, false, 'ui/goToToday');
                },

                setSearchQuery: (query) => {
                    set({ searchQuery: query }, false, 'ui/setSearchQuery');
                },

                clearSearch: () => {
                    set({ searchQuery: '' }, false, 'ui/clearSearch');
                },

                setPatientSearchQuery: (query) => {
                    set({ patientSearchQuery: query }, false, 'ui/setPatientSearchQuery');
                },

                clearPatientSearch: () => {
                    set({ patientSearchQuery: '' }, false, 'ui/clearPatientSearch');
                },

                toggleSelectedDoctor: (doctorId) => {
                    set((state) => {
                        const isSelected = state.selectedDoctors.includes(doctorId);
                        const newSelectedDoctors = isSelected
                            ? state.selectedDoctors.filter(id => id !== doctorId)
                            : [...state.selectedDoctors, doctorId];
                        return { selectedDoctors: newSelectedDoctors };
                    }, false, 'ui/toggleSelectedDoctor');
                },

                clearSelectedDoctors: () => {
                    set({ selectedDoctors: [] }, false, 'ui/clearSelectedDoctors');
                },

                selectAllDoctors: (doctorIds) => {
                    set({ selectedDoctors: doctorIds }, false, 'ui/selectAllDoctors');
                },

                openBookingModal: () => {
                    set({ isBookingModalOpen: true }, false, 'ui/openBookingModal');
                },

                closeBookingModal: () => {
                    set({ isBookingModalOpen: false }, false, 'ui/closeBookingModal');
                },

                openPatientModal: () => {
                    set({ isPatientModalOpen: true }, false, 'ui/openPatientModal');
                },

                closePatientModal: () => {
                    set({ isPatientModalOpen: false }, false, 'ui/closePatientModal');
                },

                openAppointmentDetailsModal: () => {
                    set({ isAppointmentDetailsModalOpen: true }, false, 'ui/openAppointmentDetailsModal');
                },

                closeAppointmentDetailsModal: () => {
                    set({ isAppointmentDetailsModalOpen: false }, false, 'ui/closeAppointmentDetailsModal');
                },

                closeAllModals: () => {
                    set(
                        {
                            isBookingModalOpen: false,
                            isPatientModalOpen: false,
                            isAppointmentDetailsModalOpen: false,
                        },
                        false,
                        'ui/closeAllModals'
                    );
                },

                toggleSidebar: () => {
                    set((state) => ({ isSidebarCollapsed: !state.isSidebarCollapsed }), false, 'ui/toggleSidebar');
                },

                setSidebarCollapsed: (collapsed) => {
                    set({ isSidebarCollapsed: collapsed }, false, 'ui/setSidebarCollapsed');
                },

                setTheme: (theme) => {
                    set({ theme }, false, 'ui/setTheme');
                },

                toggleTheme: () => {
                    set((state) => ({ theme: state.theme === 'light' ? 'dark' : 'light' }), false, 'ui/toggleTheme');
                },

                resetUI: () => {
                    set(
                        {
                            calendarView: 'month',
                            currentDate: null,
                            searchQuery: '',
                            patientSearchQuery: '',
                            selectedDoctors: [],
                            isBookingModalOpen: false,
                            isPatientModalOpen: false,
                            isAppointmentDetailsModalOpen: false,
                            isSidebarCollapsed: false,
                        },
                        false,
                        'ui/resetUI'
                    );
                },
            }),
            {
                name: 'ui-storage',
                partialize: (state) => ({
                    calendarView: state.calendarView,
                    theme: state.theme,
                    isSidebarCollapsed: state.isSidebarCollapsed,
                    // Don't persist currentDate to avoid hydration issues
                }),
            }
        ),
        {
            name: 'UIStore',
            enabled: process.env.NODE_ENV === 'development',
        }
    )
);

export default useUIStore;
