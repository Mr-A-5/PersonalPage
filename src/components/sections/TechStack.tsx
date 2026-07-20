import Section from '../ui/Section';
import { techGroups, type Tech, type TechGroup } from '../../data/techStack';
import { cn } from '../../lib/util';

function TechTile({ tech }: { tech: Tech }) {
    const Icon = tech.icon;
    return (
        <li className="group/tile relative">
            <div
                className="flex h-14 w-14 items-center justify-center rounded-xl border border-border bg-surface-2 transition-all duration-200 group-hover/tile:-translate-y-1"
                style={{ ['--tile' as string]: tech.color }}
            >
                <Icon
                    size={26}
                    className="transition-colors duration-200"
                    style={{ color: tech.color }}
                />
            </div>
            {/* Name appears on hover so the grid stays icon-clean at rest. */}
            <span className="pointer-events-none absolute -bottom-7 left-1/2 z-10 -translate-x-1/2 whitespace-nowrap rounded-md border border-border bg-surface px-2 py-1 font-mono text-[10px] text-muted opacity-0 transition-opacity duration-200 group-hover/tile:opacity-100">
                {tech.name}
            </span>
        </li>
    );
}

function GroupCard({ group, className }: { group: TechGroup; className?: string }) {
    return (
        <div
            className={cn(
                'reveal rounded-2xl border border-border bg-surface/70 p-6 backdrop-blur-sm transition-colors hover:border-border-strong sm:p-7',
                className
            )}
        >
            <h3 className="font-display text-xl font-semibold tracking-tight">
                {group.title}
            </h3>
            <ul className="mt-6 flex flex-wrap gap-4 gap-y-9">
                {group.items.map((tech) => (
                    <TechTile key={tech.name} tech={tech} />
                ))}
            </ul>
        </div>
    );
}

const wideGroups = techGroups.filter((g) => g.wide);
const narrowGroups = techGroups.filter((g) => !g.wide);

export default function TechStack() {
    return (
        <Section
            id="tech-stack"
            index="02"
            eyebrow="Tech Stack"
            title={
                <>
                    Tools I reach for<span className="text-accent-2">.</span>
                </>
            }
            subtitle="The stack I'm fastest in, grouped by where it sits in the system."
        >
            {/* Wide groups stack on the left, the narrow one runs full-height
                on the right — mirrors the two-column reference layout. */}
            <div className="grid gap-5 lg:grid-cols-[1.7fr_1fr] lg:items-start">
                <div className="flex flex-col gap-5">
                    {wideGroups.map((group) => (
                        <GroupCard key={group.title} group={group} />
                    ))}
                </div>
                <div className="flex flex-col gap-5">
                    {narrowGroups.map((group) => (
                        <GroupCard
                            key={group.title}
                            group={group}
                            className="lg:h-full"
                        />
                    ))}
                </div>
            </div>
        </Section>
    );
}
