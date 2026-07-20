import type { IconType } from 'react-icons';
import {
    SiReact,
    SiTypescript,
    SiJavascript,
    SiNextdotjs,
    SiTailwindcss,
    SiHtml5,
    SiCss3,
    SiVite,
    SiNodedotjs,
    SiExpress,
    SiSupabase,
    SiPostgresql,
    SiPython,
    SiMongodb,
    SiGit,
    SiGithub,
    SiDocker,
    SiFigma,
    SiVercel,
    SiLinux,
    SiPostman,
    SiCplusplus,
} from 'react-icons/si';

export type Tech = {
    name: string;
    icon: IconType;
    /** Brand color, used for the icon tile's glow + hover tint. */
    color: string;
};

export type TechGroup = {
    title: string;
    /** Grid span on large screens — lets the group cards tile like the mock. */
    wide: boolean;
    items: Tech[];
};

/**
 * Flat name -> icon lookup, built from the groups below so there is only one
 * place a tech's icon and brand color are defined. Projects use it to render
 * their stack as logos.
 */
export function techByName(name: string): Tech | undefined {
    return techGroups.flatMap((g) => g.items).find((t) => t.name === name);
}

export const techGroups: TechGroup[] = [
    {
        title: 'Frontend',
        wide: true,
        items: [
            { name: 'React', icon: SiReact, color: '#61dafb' },
            { name: 'Next.js', icon: SiNextdotjs, color: '#ffffff' },
            { name: 'TypeScript', icon: SiTypescript, color: '#3178c6' },
            { name: 'JavaScript', icon: SiJavascript, color: '#f7df1e' },
            { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#38bdf8' },
            { name: 'Vite', icon: SiVite, color: '#a259ff' },
            { name: 'HTML5', icon: SiHtml5, color: '#e34f26' },
            { name: 'CSS3', icon: SiCss3, color: '#1572b6' },
        ],
    },
    {
        title: 'Backend & Data',
        wide: true,
        items: [
            { name: 'Node.js', icon: SiNodedotjs, color: '#5fa04e' },
            { name: 'Express', icon: SiExpress, color: '#dcdcdc' },
            { name: 'Supabase', icon: SiSupabase, color: '#3ecf8e' },
            { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169e1' },
            // { name: 'MongoDB', icon: SiMongodb, color: '#47a248' },
            { name: 'Python', icon: SiPython, color: '#ffd43b' },
            { name: 'C++', icon: SiCplusplus, color: '#649ad2' },
        ],
    },
    {
        title: 'Tools',
        wide: false,
        items: [
            { name: 'Git', icon: SiGit, color: '#f05032' },
            { name: 'GitHub', icon: SiGithub, color: '#ffffff' },
            { name: 'Docker', icon: SiDocker, color: '#2496ed' },
            // { name: 'Linux', icon: SiLinux, color: '#fcc624' },
            { name: 'Postman', icon: SiPostman, color: '#ff6c37' },
            { name: 'Vercel', icon: SiVercel, color: '#ffffff' },
            { name: 'Figma', icon: SiFigma, color: '#f24e1e' },
        ],
    },
];
