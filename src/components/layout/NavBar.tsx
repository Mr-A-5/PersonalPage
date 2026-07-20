import { useEffect, useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import { navLinks, site } from '../../data/site';
import { useActiveSection } from '../../hooks/useActiveSection';
import { cn } from '../../lib/util';

const sectionIds = navLinks.map((l) => l.href.slice(1));

export default function NavBar() {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);
    const active = useActiveSection(sectionIds);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 12);
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    // Lock body scroll while the mobile sheet is open.
    useEffect(() => {
        document.body.style.overflow = open ? 'hidden' : '';
        return () => {
            document.body.style.overflow = '';
        };
    }, [open]);

    return (
        <header
            className={cn(
                'fixed inset-x-0 top-0 z-50 transition-colors duration-300',
                scrolled
                    ? 'border-b border-border bg-page/80 backdrop-blur-xl'
                    : 'border-b border-transparent'
            )}
        >
            <nav className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5 sm:px-8">
                <a
                    href="#about"
                    className="font-display text-lg font-bold tracking-tight"
                >
                    Miguel<span className="text-accent-2">.</span>
                </a>

                <ul className="hidden items-center gap-1 md:flex">
                    {navLinks.map((link) => {
                        const id = link.href.slice(1);
                        return (
                            <li key={link.href}>
                                <a
                                    href={link.href}
                                    className={cn(
                                        'rounded-full px-3.5 py-2 text-sm transition-colors',
                                        active === id
                                            ? 'bg-surface-2 text-body'
                                            : 'text-muted hover:text-body'
                                    )}
                                >
                                    {link.label}
                                </a>
                            </li>
                        );
                    })}
                </ul>

                <div className="flex items-center gap-2">
                    <a
                        href={site.resume}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hidden rounded-full border border-border-strong px-4 py-2 font-display text-sm font-medium text-body transition-colors hover:border-accent hover:text-accent sm:inline-flex"
                    >
                        Resume
                    </a>

                    <button
                        type="button"
                        onClick={() => setOpen((v) => !v)}
                        aria-label={open ? 'Close menu' : 'Open menu'}
                        aria-expanded={open}
                        className="rounded-lg border border-border p-2 text-body md:hidden"
                    >
                        {open ? <HiX size={20} /> : <HiMenu size={20} />}
                    </button>
                </div>
            </nav>

            {open && (
                <div className="border-t border-border bg-page/95 backdrop-blur-xl md:hidden">
                    <ul className="mx-auto flex max-w-6xl flex-col px-5 py-3 sm:px-8">
                        {navLinks.map((link) => (
                            <li key={link.href}>
                                <a
                                    href={link.href}
                                    onClick={() => setOpen(false)}
                                    className="block border-b border-border py-3.5 text-sm text-muted last:border-0 hover:text-body"
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </header>
    );
}
