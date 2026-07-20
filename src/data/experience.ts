/*
 * TODO(miguel): replace the placeholder entries below with your real roles.
 * Everything the Experience section renders comes from this file — add or
 * remove entries freely, the timeline sizes itself.
 */

export type Role = {
    title: string;
    company: string;
    /** e.g. "June 2024 - Present" */
    period: string;
    location: string;
    /** e.g. "1 year" — rendered next to the location. */
    duration: string;
    description: string;
    tech: string[];
    /** True for the current role: renders a pulsing marker on the timeline. */
    current: boolean;
};

export const experience: Role[] = [
    {
        title: 'Bachelor of Science in Computer Science',
        company: 'University of Texas at Dallas',
        period: '2024 - 2026',
        location: 'Richardson, TX',
        duration: '',
        description:
            'Architected and deployed complex software systems as part of advanced coursework, including a cross-platform React Native application backed by Supabase and an automated Python video-generation pipeline. Mastered scalable software design, leveraging modern full-stack technologies like Next.js, TypeScript, and Tailwind CSS alongside foundational C++ multi-threaded programming.',
        tech: [
            'TypeScript',
            'Next.js',
            'React',
            'Python',
            'C++',
            'Supabase',
            'PostgreSQL',
        ],
        current: false,
    },
    {
        title: 'Associate of Science, General Studies',
        company: 'Collin College',
        period: '2022 - 2024',
        location: 'Frisco, TX',
        duration: '',
        description:
            'Established a rigorous foundation in mathematics, logical problem-solving, and introductory computer science principles. Developed early proficiency in object-oriented programming and core data structures, serving as the critical stepping stone toward advanced system design and software engineering.',
        tech: ['Java', 'C++', 'Data Structures', 'Object-Oriented Programming'], // Feel free to adjust based on specific early classes
        current: false,
    },
];

export type School = {
    name: string;
    degree: string;
    period: string;
    detail: string;
};

export const education: School[] = [
    {
        name: 'The University of Texas at Dallas',
        degree: "Bachelor's in Computer Science",
        period: '2024 - 2026',
        detail: 'Richardson, TX',
    },
    {
        name: 'Collin College',
        degree: 'Associate of Science',
        period: '2022 - 2024',
        detail: 'Plano, TX',
    },
];
