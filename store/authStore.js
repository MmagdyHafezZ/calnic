import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

/**
 * Auth Store
 * Manages user authentication state and operations
 */
const useAuthStore = create(
    devtools(
        persist(
            (set, get) => ({
                user: null,
                isAuthenticated: false,
                isLoading: false,
                error: null,

                login: async (username, password) => {
                    set({ isLoading: true, error: null }, false, 'auth/login/start');

                    try {
                        const response = await fetch('/api/login', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify({ username, password }),
                        });

                        const data = await response.json();

                        if (data.success) {
                            set(
                                {
                                    user: data.user,
                                    isAuthenticated: true,
                                    isLoading: false,
                                    error: null,
                                },
                                false,
                                'auth/login/success'
                            );
                            return { success: true };
                        } else {
                            set(
                                {
                                    error: data.message,
                                    isLoading: false,
                                },
                                false,
                                'auth/login/error'
                            );
                            return { success: false, error: data.message };
                        }
                    } catch (err) {
                        const errorMessage = 'An error occurred. Please try again.';
                        set(
                            {
                                error: errorMessage,
                                isLoading: false,
                            },
                            false,
                            'auth/login/error'
                        );
                        return { success: false, error: errorMessage };
                    }
                },

                logout: () => {
                    set(
                        {
                            user: null,
                            isAuthenticated: false,
                            error: null,
                        },
                        false,
                        'auth/logout'
                    );
                },

                setUser: (user) => {
                    set(
                        {
                            user,
                            isAuthenticated: !!user,
                        },
                        false,
                        'auth/setUser'
                    );
                },

                clearError: () => {
                    set({ error: null }, false, 'auth/clearError');
                },

                getUser: () => get().user,
                isUserAuthenticated: () => get().isAuthenticated,
            }),
            {
                name: 'auth-storage',
                partialize: (state) => ({
                    user: state.user,
                    isAuthenticated: state.isAuthenticated,
                }),
            }
        ),
        {
            name: 'AuthStore',
            enabled: process.env.NODE_ENV === 'development',
        }
    )
);

export default useAuthStore;
