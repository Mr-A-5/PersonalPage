import { FiCalendar, FiMapPin } from 'react-icons/fi';
import Section from '../ui/Section';
import Tag from '../ui/Tag';
import { experience, type Role } from '../../data/experience';
import { cn } from '../../lib/util';

function TimelineMarker({ current }: { current: boolean }) {
    return (
        <span
            aria-hidden
            className="absolute left-0 top-8 hidden -translate-x-1/2 md:block"
        >
            <span
                className={cn(
                    'block h-3.5 w-3.5 rounded-full ring-4 ring-page',
                    current ? 'bg-accent-2' : 'bg-accent'
                )}
            />
            {current && (
                <span className="absolute inset-0 animate-ping rounded-full bg-accent-2 opacity-60" />
            )}
        </span>
    );
}

function RoleCard({ role }: { role: Role }) {
    return (
        <li className="reveal relative md:pl-12">
            <TimelineMarker current={role.current} />

            <div className="rounded-2xl border border-border bg-surface/70 p-6 backdrop-blur-sm transition-colors hover:border-border-strong sm:p-7">
                <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface-2 px-3 py-1 font-mono text-[11px] text-muted">
                    <FiCalendar size={12} />
                    {role.period}
                </span>

                <h3 className="mt-4 font-display text-xl font-bold tracking-tight sm:text-2xl">
                    {role.title}
                </h3>
                <p className="mt-1 font-display text-base font-semibold text-accent">
                    {role.company}
                </p>

                <p className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 font-mono text-xs text-muted">
                    <span className="inline-flex items-center gap-1.5">
                        <FiMapPin size={12} />
                        {role.location}
                    </span>
                    <span>{role.duration}</span>
                </p>

                <p className="mt-4 text-[15px] leading-relaxed text-muted">
                    {role.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                    {role.tech.map((t) => (
                        <Tag key={t}>{t}</Tag>
                    ))}
                </div>
            </div>
        </li>
    );
}

export default function Experience() {
    return (
        <Section
            id="experience"
            index="03"
            eyebrow="Experience"
            title={<>Studies</>}
            subtitle="Shipping full-stack software for real users, on real deadlines."
        >
            <ol className="relative flex flex-col gap-6">
                {/* The timeline rail — desktop only. */}
                <span
                    aria-hidden
                    className="absolute bottom-8 left-0 top-8 hidden w-px bg-gradient-to-b from-accent-2 via-accent to-transparent md:block"
                />
                {experience.map((role) => (
                    <RoleCard
                        key={`${role.company}-${role.title}`}
                        role={role}
                    />
                ))}
            </ol>
        </Section>
    );
}
