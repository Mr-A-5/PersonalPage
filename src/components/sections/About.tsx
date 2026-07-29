import { FiArrowDown, FiDownload, FiMapPin } from 'react-icons/fi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { IoMail } from 'react-icons/io5';
import { site } from '../../data/site';
import { education } from '../../data/experience';

const socials = [
    { icon: FaGithub, href: site.github, label: 'GitHub' },
    { icon: FaLinkedin, href: site.linkedin, label: 'LinkedIn' },
    { icon: IoMail, href: `mailto:${site.email}`, label: 'Email' },
];

export default function About() {
    return (
        <section
            id="about"
            className="mx-auto flex w-full max-w-6xl flex-col justify-center px-5 pb-20 pt-32 sm:px-8 md:min-h-screen md:pb-28 md:pt-36"
        >
            <div className="grid items-center gap-12 md:grid-cols-[1.4fr_1fr] md:gap-16">
                <div className="reveal">
                    <p className="font-mono text-xs tracking-[0.25em] text-muted">
                        00 <span className="text-accent-2">/</span>{' '}
                        <span className="text-accent">ABOUT ME</span>
                    </p>

                    <h1 className="mt-4 font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
                        Hi, I&apos;m{' '}
                        <span className="text-gradient">Miguel Fernandez</span>
                    </h1>

                    <p className="mt-4 font-display text-xl text-muted sm:text-2xl">
                        {site.role}
                    </p>

                    <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
                        I build responsive, user-focused web applications with
                        React and TypeScript, and I keep the systems behind them
                        scalable and maintainable. Most of my work lives in the
                        full stack — designing the Postgres schema, writing the
                        API that guards it, and then making the interface on top
                        feel effortless.
                    </p>

                    <p className="mt-4 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
                        I&apos;m currently finishing my Computer Science degree
                        at UT Dallas while shipping production work for real
                        clients.
                    </p>

                    <div className="mt-7 flex flex-wrap items-center gap-3">
                        <a
                            href="#projects"
                            className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 font-display text-sm font-semibold text-page transition-transform hover:-translate-y-0.5"
                        >
                            View my work
                            <FiArrowDown size={16} />
                        </a>
                        <a
                            href={site.resume}
                            download
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-full border border-border-strong px-5 py-2.5 font-display text-sm font-semibold transition-colors hover:border-accent-2 hover:text-accent-2"
                        >
                            <FiDownload size={16} />
                            Resume
                        </a>
                    </div>

                    <div className="mt-7 flex items-center gap-4">
                        {socials.map(({ icon: Icon, href, label }) => (
                            <a
                                key={label}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={label}
                                className="text-muted transition-colors hover:text-accent"
                            >
                                <Icon size={20} />
                            </a>
                        ))}
                        <span className="inline-flex items-center gap-1.5 text-sm text-muted">
                            <FiMapPin size={15} />
                            {site.location}
                        </span>
                    </div>
                </div>

                <div className="reveal flex flex-col items-center gap-6">
                    <div className="relative">
                        <div
                            aria-hidden
                            className="absolute -inset-4 rounded-full opacity-40 blur-2xl"
                            style={{
                                background:
                                    'linear-gradient(140deg, var(--color-accent), var(--color-accent-2))',
                            }}
                        />
                        <img
                            src={site.avatar}
                            alt={site.name}
                            className="relative aspect-square w-52 rounded-full border border-border-strong object-cover sm:w-64"
                        />
                    </div>

                    {/* <div className="w-full rounded-2xl border border-border bg-surface/70 p-5 backdrop-blur-sm">
                        <p className="font-mono text-[11px] tracking-[0.2em] text-accent-2">
                            EDUCATION
                        </p>
                        <ul className="mt-3 space-y-4">
                            {education.map((school) => (
                                <li key={school.name}>
                                    <p className="font-display text-sm font-semibold">
                                        {school.degree}
                                    </p>
                                    <p className="text-sm text-muted">
                                        {school.name}
                                    </p>
                                    <p className="mt-0.5 font-mono text-[11px] text-muted">
                                        {school.period} · {school.detail}
                                    </p>
                                </li>
                            ))}
                        </ul>
                    </div> */}
                </div>
            </div>
        </section>
    );
}
