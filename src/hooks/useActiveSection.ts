import { useEffect, useState } from 'react';

/**
 * Tracks which section id is currently under the nav, so the NavBar can
 * highlight the matching link. Ids are passed without the leading `#`.
 */
export function useActiveSection(ids: readonly string[]) {
    const [active, setActive] = useState<string>(ids[0] ?? '');

    useEffect(() => {
        const sections = ids
            .map((id) => document.getElementById(id))
            .filter((el): el is HTMLElement => el !== null);

        if (sections.length === 0) return;

        const observer = new IntersectionObserver(
            (entries) => {
                // Pick the visible section closest to the top of the viewport.
                const visible = entries
                    .filter((e) => e.isIntersecting)
                    .sort(
                        (a, b) =>
                            a.boundingClientRect.top - b.boundingClientRect.top
                    );
                if (visible[0]) setActive(visible[0].target.id);
            },
            { rootMargin: '-88px 0px -55% 0px', threshold: 0 }
        );

        sections.forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, [ids]);

    return active;
}
