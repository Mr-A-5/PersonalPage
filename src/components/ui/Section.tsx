import type { ReactNode } from 'react';
import { cn } from '../../lib/util';

type SectionProps = {
    id: string;
    /** Two-digit index shown before the eyebrow, e.g. "01 / PROJECTS". */
    index: string;
    eyebrow: string;
    title: ReactNode;
    subtitle?: string;
    children: ReactNode;
    className?: string;
};

export default function Section({
    id,
    index,
    eyebrow,
    title,
    subtitle,
    children,
    className,
}: SectionProps) {
    return (
        <section
            id={id}
            className={cn(
                'mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 md:py-28',
                className
            )}
        >
            <header className="reveal max-w-2xl">
                <p className="font-mono text-xs tracking-[0.25em] text-muted">
                    {index} <span className="text-accent-2">/</span>{' '}
                    <span className="text-accent">{eyebrow.toUpperCase()}</span>
                </p>
                <h2 className="mt-3 font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
                    {title}
                </h2>
                {subtitle && (
                    <p className="mt-4 text-base leading-relaxed text-muted">
                        {subtitle}
                    </p>
                )}
            </header>

            <div className="mt-12 md:mt-16">{children}</div>
        </section>
    );
}
