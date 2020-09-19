import { useRef, useEffect } from 'react';

export const useMounted = () => {
    const isMounted = useRef<boolean | null>(null);
    useEffect(() => {
        isMounted.current = true;
        return () => {
            isMounted.current = false;
        };
    }, []);
    return isMounted;
};
