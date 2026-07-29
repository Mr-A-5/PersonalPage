export type Project = {
    name: string;
    tagline: string;
    description: string;
    tech: string[];
    /**
     * The (up to three) headline technologies, rendered as logos on the
     * papers inside the project's folder. Names must match `techByName`.
     */
    primaryTech: string[];
    /** Drives the Folder component's color for this project. */
    color: string;
    repo: string | null;
    demo: string | null;
};

export const projects: Project[] = [
    {
        name: 'Bip Bip Driving School',
        tagline: 'Full-Stack Business Site',
        description: `A production site for a local driving school, built and deployed end to end. Course listings, scheduling information, and multilingual content are served from Supabase behind a Next.js frontend, with a responsive layout tuned for the mostly-mobile audience that actually books the lessons.`,
        tech: ['Next.js', 'React', 'TypeScript', 'Supabase'],
        primaryTech: ['Next.js', 'React', 'Supabase'],
        color: '#e761c4',
        repo: null,
        demo: 'https://bipbipdrivingschool.com/',
    },
    {
        name: 'The Review Mediator',
        tagline: 'Capstone Review-Dispute Platform',
        description: `A capstone platform built with a UTD student engineering team that lets businesses track, manage, and file disputes over their online reviews. I developed the secure, authenticated Express API endpoints — gated by Clerk — that tie the React interface to a Supabase PostgreSQL database where dispute records are stored and tracked. Built as a private project during my studies, so there is no public demo.`,
        tech: ['TypeScript', 'React', 'Express', 'Supabase', 'PostgreSQL', 'Clerk'],
        primaryTech: ['React', 'Express', 'Supabase'],
        color: '#5b8cff',
        repo: null,
        demo: null,
    },
];
