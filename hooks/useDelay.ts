import { useEffect, useState } from 'react';

export const useDelay = (value: string, delay: number = 300): string => {
    const [delayed, setDelayed] = useState(value);

    useEffect(() => {
        const handler = setTimeout(() => setDelayed(value), delay);
        return () => clearTimeout(handler);
    }, [value, delay]);

    return delayed;
}
