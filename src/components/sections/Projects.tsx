import { FiExternalLink } from 'react-icons/fi';
import { FaGithub } from 'react-icons/fa';
import Section from '../ui/Section';
import Tag from '../ui/Tag';
import Folder from '../reactbits/Folder';
import { projects, type Project } from '../../data/projects';
import { techByName } from '../../data/techStack';

/** Relative luminance test — the folder's papers are white. */
function isLight(hex: string) {
    const n = parseInt(hex.replace('#', ''), 16);
    const [r, g, b] = [(n >> 16) & 255, (n >> 8) & 255, n & 255];
    return (0.299 * r + 0.587 * g + 0.114 * b) / 255 > 0.7;
}

/**
 * The papers tucked inside a project's folder — one per headline technology,
 * each showing that tech's logo. The Folder renders at most three.
 */
function folderPapers(project: Project) {
    return project.primaryTech.map((name) => {
        const tech = techByName(name);
        if (!tech) return null;
        const Icon = tech.icon;

        return (
            <div
                key={name}
                className="flex h-full w-full flex-col items-center justify-center gap-1"
            >
                <Icon
                    size={22}
                    // Near-white brand marks would vanish on the white paper.
                    style={{ color: isLight(tech.color) ? '#120f26' : tech.color }}
                />
                <span className="text-[6px] font-semibold leading-none text-page">
                    {tech.name}
                </span>
            </div>
        );
    });
}

function ProjectCard({ project }: { project: Project }) {
    return (
        <article className="reveal group relative overflow-hidden rounded-2xl border border-border bg-surface/70 p-6 backdrop-blur-sm transition-colors hover:border-border-strong sm:p-8">
            {/* Accent wash that warms up on hover. */}
            <div
                aria-hidden
                className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full opacity-15 blur-3xl transition-opacity duration-500 group-hover:opacity-30"
                style={{ backgroundColor: project.color }}
            />

            <div className="relative grid gap-8 md:grid-cols-[1fr_auto] md:items-center md:gap-12">
                <div>
                    <h3 className="font-display text-2xl font-bold leading-snug tracking-tight sm:text-[1.75rem]">
                        <span style={{ color: project.color }}>
                            {project.name}
                        </span>
                        <span className="text-muted"> — </span>
                        {project.tagline}
                    </h3>

                    <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-muted">
                        {project.description}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                        {project.tech.map((t) => (
                            <Tag key={t}>{t}</Tag>
                        ))}
                    </div>

                    {(project.repo || project.demo) && (
                        <div className="mt-6 flex flex-wrap gap-3">
                            {project.repo && (
                                <a
                                    href={project.repo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 rounded-lg border border-border-strong px-4 py-2 font-display text-sm font-medium transition-colors hover:border-accent hover:text-accent"
                                >
                                    <FaGithub size={16} />
                                    View on GitHub
                                </a>
                            )}
                            {project.demo && (
                                <a
                                    href={project.demo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 rounded-lg border border-border-strong px-4 py-2 font-display text-sm font-medium transition-colors hover:border-accent-2 hover:text-accent-2"
                                >
                                    <FiExternalLink size={16} />
                                    Live Demo
                                </a>
                            )}
                        </div>
                    )}
                </div>

                {/* Folder needs a fixed box because `size` scales via transform. */}
                <div className="flex h-[190px] w-full items-center justify-center md:w-[220px]">
                    <Folder
                        size={1.6}
                        color={project.color}
                        items={folderPapers(project)}
                    />
                </div>
            </div>
        </article>
    );
}

export default function Projects() {
    return (
        <Section
            id="projects"
            index="01"
            eyebrow="Projects"
            title={<>Things I&apos;ve built</>}
            subtitle="Full-stack work, from schema design through to the interface. Open a folder to peek inside."
        >
            <div className="flex flex-col gap-6">
                {projects.map((project) => (
                    <ProjectCard key={project.name} project={project} />
                ))}
            </div>
        </Section>
    );
}
