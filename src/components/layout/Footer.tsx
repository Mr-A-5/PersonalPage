import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { IoMail } from 'react-icons/io5';
import { FiArrowUp } from 'react-icons/fi';
import { navLinks, site } from '../../data/site';

const socials = [
    { icon: FaGithub, href: site.github, label: 'GitHub' },
    { icon: FaLinkedin, href: site.linkedin, label: 'LinkedIn' },
    { icon: IoMail, href: `mailto:${site.email}`, label: 'Email' },
];

export default function Footer() {
    return (
        <footer className="border-t border-border">
            <div className="mx-auto w-full max-w-6xl px-5 py-10 sm:px-8">
                <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
                    <div>
                        <a
                            href="#about"
                            className="font-display text-lg font-bold tracking-tight"
                        >
                            Miguel<span className="text-accent-2">.</span>
                        </a>
                        <p className="mt-2 text-sm text-muted">
                            {site.role} · {site.location}
                        </p>
                    </div>

                    <nav className="flex flex-wrap gap-x-6 gap-y-2">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="text-sm text-muted transition-colors hover:text-accent"
                            >
                                {link.label}
                            </a>
                        ))}
                    </nav>

                    <div className="flex items-center gap-4">
                        {socials.map(({ icon: Icon, href, label }) => (
                            <a
                                key={label}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={label}
                                className="text-muted transition-colors hover:text-accent"
                            >
                                <Icon size={19} />
                            </a>
                        ))}
                        <a
                            href="#about"
                            aria-label="Back to top"
                            className="rounded-lg border border-border p-2 text-muted transition-colors hover:border-border-strong hover:text-accent"
                        >
                            <FiArrowUp size={16} />
                        </a>
                    </div>
                </div>

                <p className="mt-8 border-t border-border pt-6 text-center font-mono text-xs text-muted">
                    © {new Date().getFullYear()} {site.name}. Built with React,
                    TypeScript &amp; Tailwind.
                </p>
            </div>
        </footer>
    );
}
