import { cn } from '../../lib/util';

export default function Tag({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) {
    return (
        <span
            className={cn(
                'inline-flex items-center rounded-full border border-border bg-surface-2 px-3 py-1 font-mono text-[11px] tracking-wide text-muted',
                className
            )}
        >
            {children}
        </span>
    );
}
