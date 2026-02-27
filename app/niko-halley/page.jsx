'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function NikoHalleyRedirect() {
    const router = useRouter();

    useEffect(() => {
        router.replace('/niko');
    }, [router]);

    return null;
}
