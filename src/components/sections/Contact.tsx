import { FiArrowRight, FiMail } from 'react-icons/fi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { LuRocket } from 'react-icons/lu';
import { site } from '../../data/site';

export default function Contact() {
    return (
        <section
            id="contact"
            className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 md:py-28"
        >
            <div className="reveal relative overflow-hidden rounded-3xl border border-border bg-surface/70 px-6 py-14 text-center backdrop-blur-sm sm:px-12 sm:py-16">
                <div
                    aria-hidden
                    className="pointer-events-none absolute -top-32 left-1/2 h-64 w-[36rem] max-w-full -translate-x-1/2 rounded-full opacity-20 blur-3xl"
                    style={{
                        background:
                            'linear-gradient(90deg, var(--color-accent), var(--color-accent-2))',
                    }}
                />

                <div className="relative">
                    <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                        <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-border bg-surface-2">
                            <LuRocket size={26} className="text-accent" />
                        </span>
                        <h2 className="font-display text-3xl font-bold leading-tight tracking-tight sm:text-5xl">
                            Let&apos;s Build Something{' '}
                            <span className="text-gradient">Amazing</span>
                        </h2>
                    </div>

                    <div
                        aria-hidden
                        className="mx-auto mt-8 h-px w-2/3 max-w-md bg-gradient-to-r from-transparent via-border-strong to-transparent"
                    />

                    <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
                        I&apos;m open to full-time roles, internships, and
                        freelance work. If you have an idea you want built — or a
                        team that needs another pair of hands — I&apos;d love to
                        hear about it.
                    </p>

                    <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                        <a
                            href={`mailto:${site.email}`}
                            className="inline-flex w-full items-center justify-center gap-2.5 rounded-xl border border-border-strong px-6 py-3 font-display text-sm font-medium transition-colors hover:border-accent hover:text-accent sm:w-auto"
                        >
                            <FiMail size={17} />
                            {site.email}
                        </a>
                        <a
                            href={site.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group inline-flex w-full items-center justify-center gap-2.5 rounded-xl border border-border-strong px-6 py-3 font-display text-sm font-medium transition-colors hover:border-accent-2 hover:text-accent-2 sm:w-auto"
                        >
                            <FaLinkedin size={17} />
                            Connect on LinkedIn
                            <FiArrowRight
                                size={16}
                                className="transition-transform group-hover:translate-x-1"
                            />
                        </a>
                        <a
                            href={site.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex w-full items-center justify-center gap-2.5 rounded-xl border border-border-strong px-6 py-3 font-display text-sm font-medium transition-colors hover:border-accent hover:text-accent sm:w-auto"
                        >
                            <FaGithub size={17} />
                            GitHub
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
