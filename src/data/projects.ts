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
];
