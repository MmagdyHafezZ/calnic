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
                currentDate: new Date(2025, 9, 1),

                searchQuery: '',

                isBookingModalOpen: false,
                isPatientModalOpen: false,

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

                    if (action === 'PREV') {
                        newDate = dayjs(currentDate).subtract(1, calendarView === 'agenda' ? 'year' : calendarView).toDate();
                    } else if (action === 'NEXT') {
                        newDate = dayjs(currentDate).add(1, calendarView === 'agenda' ? 'year' : calendarView).toDate();
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

                closeAllModals: () => {
                    set(
                        {
                            isBookingModalOpen: false,
                            isPatientModalOpen: false,
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
                            currentDate: new Date(),
                            searchQuery: '',
                            isBookingModalOpen: false,
                            isPatientModalOpen: false,
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
