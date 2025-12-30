import { useEffect, useState } from 'react';

type Breakpoint = 'mobile' | 'md' | 'lg' | 'xl';

const queries: Record<Breakpoint, string> = {
    mobile: '(max-width: 767px)',
    md: '(min-width: 768px) and (max-width: 1023px)',
    lg: '(min-width: 1024px) and (max-width: 1279px)',
    xl: '(min-width: 1280px)',
};

export function useBreakpoint(): Breakpoint {
    const [breakpoint, setBreakpoint] = useState<Breakpoint>('mobile');

    useEffect(() => {
        const mediaQueryLists = Object.entries(queries).map(([key, query]) => {
            const mql = window.matchMedia(query);
            const listener = () => {
                if (mql.matches) setBreakpoint(key as Breakpoint);
            };
            mql.addEventListener('change', listener);
            if (mql.matches) setBreakpoint(key as Breakpoint);
            return { mql, listener };
        });

        return () => {
            mediaQueryLists.forEach(({ mql, listener }) =>
                mql.removeEventListener('change', listener)
            );
        };
    }, []);

    return breakpoint;
}
