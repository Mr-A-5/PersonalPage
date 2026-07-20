import { useEffect } from 'react';

/**
 * Adds `.is-visible` to every `.reveal` element once it scrolls into view,
 * driving the fade-up defined in index.css. Re-runs nothing on scroll — the
 * observer unsubscribes each element after it reveals.
 */
export function useReveal() {
    useEffect(() => {
        const elements = document.querySelectorAll<HTMLElement>('.reveal');

        const observer = new IntersectionObserver(
            (entries) => {
                for (const entry of entries) {
                    if (!entry.isIntersecting) continue;
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
        );

        elements.forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);
}
