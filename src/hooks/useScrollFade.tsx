import { useEffect, useRef, useState } from 'react';

export function useScrollFade() {
    const ref = useRef<HTMLDivElement>(null);
    const [opacity, setOpacity] = useState(0.5);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setOpacity(Math.max(0.01, entry.intersectionRatio));
            },
            {
                threshold: Array.from({ length: 30 }, (_, i) => i / 30),
            }
        );

        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return { ref, opacity };
}
