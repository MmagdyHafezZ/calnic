'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import useAuthStore from '../store/authStore';

export default function ProtectedLayout({ children }) {
    const router = useRouter();
    const { isAuthenticated, isLoading } = useAuthStore();

    useEffect(() => {
        if (!isAuthenticated && !isLoading) {
            router.push('/');
        }
    }, [router, isAuthenticated, isLoading]);

    if (!isAuthenticated && !isLoading) {
        return null;
    }

    return <>{children}</>;
}
