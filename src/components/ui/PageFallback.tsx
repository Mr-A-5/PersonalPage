import { site } from '../../data/site';

/**
 * Last line of defence, rendered by the root ErrorBoundary. If something
 * escapes the boundaries further down, a visitor should still land on a page
 * that names me and links to my inbox rather than on a blank screen.
 */
export default function PageFallback() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
            <p className="font-mono text-xs tracking-[0.25em] text-accent-2">
                SOMETHING BROKE
            </p>
            <h1 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl">
                This page didn&apos;t load properly
            </h1>
            <p className="mt-3 max-w-md text-base leading-relaxed text-muted">
                Sorry about that — it&apos;s on my end, not yours. Reloading
                usually sorts it out.
            </p>
            <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
                <button
                    type="button"
                    onClick={() => window.location.reload()}
                    className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 font-display text-sm font-semibold text-page transition-transform hover:-translate-y-0.5"
                >
                    Reload the page
                </button>
                <a
                    href={`mailto:${site.email}`}
                    className="inline-flex items-center gap-2 rounded-full border border-border-strong px-5 py-2.5 font-display text-sm font-semibold transition-colors hover:border-accent-2 hover:text-accent-2"
                >
                    Email me instead
                </a>
            </div>
        </div>
    );
}
