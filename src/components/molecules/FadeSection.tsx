import { useScrollFade } from '../../hooks/useScrollFade';

export function FadeSection({ children }: { children: React.ReactNode }) {
    const { ref, opacity } = useScrollFade();

    return (
        <section
            ref={ref}
            style={{
                opacity,
                transition: 'opacity 0.3s ease',
            }}
            className="w-full h-full"
        >
            {children}
        </section>
    );
}
