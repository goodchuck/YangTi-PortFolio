// src/components/LoadingManager.tsx
"use client";

import { useState, useEffect } from "react";
import { usePathname, useSearchParams } from 'next/navigation';
import Loading from '@/components/Loading/Loading';
import LoadingDots from "../Loading/Dots/LoadingDots";
import LoadingWave from "../Loading/Wave/LoadingWave";

interface LoadingManagerProps {
    children: React.ReactNode
}

const LoadingManager = ({ children }: LoadingManagerProps) => {
    const [loading, setLoading] = useState(false);
    const pathname = usePathname();
    const searchParams = useSearchParams();

    useEffect(() => {
        setLoading(true);
        console.log({ pathname, searchParams, loading })
        const timer = setTimeout(() => setLoading(false), 2000); // 2초 후에 로딩 상태를 false로 설정
        return () => clearTimeout(timer);
    }, [pathname, searchParams]);

    return (
        <>
            {loading && <LoadingWave />}
            {children}
        </>
    );
}

export default LoadingManager;
