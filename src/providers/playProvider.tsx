import React from 'react';
import { FaReact, FaPython } from 'react-icons/fa';
import { RiSupabaseFill } from 'react-icons/ri';
import type { ComponentType } from 'react';
import { SiExpress, SiTypescript, SiNextdotjs } from 'react-icons/si';

type PlayProviderProps = {
    children: React.ReactNode;
};

export const techIcons: Record<
    string,
    ComponentType<{ size?: number; color?: string; className?: string }>
> = {
    React: FaReact,
    Supabase: RiSupabaseFill,
    Python: FaPython,
    Express: SiExpress,
    TypeScript: SiTypescript,
    Next: SiNextdotjs,
};

export const techStacksIcons: Record<
    string,
    ComponentType<{ size?: number }>[]
> = {
    'Express React Supabase': [FaReact, SiExpress, RiSupabaseFill],
};

type PlayContextType = {
    playing: boolean | null;
    setPlaying: React.Dispatch<React.SetStateAction<boolean>>;
    currentTime: number;
    setCurrentTime: React.Dispatch<React.SetStateAction<number>>;
    tech: Record<
        string,
        ComponentType<{ size?: number; color?: string; className?: string }>
    >;
    setTech: React.Dispatch<
        React.SetStateAction<
            Record<
                string,
                ComponentType<{
                    size?: number;
                    color?: string;
                    className?: string;
                }>
            >
        >
    >;
    techStacks: Record<
        string,
        ComponentType<{ size?: number; className?: string }>[]
    >;
    setTechStacks: React.Dispatch<
        React.SetStateAction<
            Record<
                string,
                ComponentType<{ size?: number; className?: string }>[]
            >
        >
    >;
    activeTech: string | null;
    setActiveTech: React.Dispatch<React.SetStateAction<string | null>>;
};

const PlayingContext = React.createContext<PlayContextType>({
    playing: null,
    setPlaying: () => {},
    currentTime: 0,
    setCurrentTime: () => {},
    tech: {},
    setTech: () => {},
    techStacks: {},
    setTechStacks: () => {},
    activeTech: null,
    setActiveTech: () => {},
});

export function PlayingProvider({ children }: PlayProviderProps) {
    const [playing, setPlaying] = React.useState<boolean>(false);
    const [currentTime, setCurrentTime] = React.useState<number>(0);
    const [tech, setTech] = React.useState<
        Record<
            string,
            ComponentType<{
                size?: number;
                color?: string;
                className?: string;
            }>
        >
    >(techIcons);
    const [techStacks, setTechStacks] =
        React.useState<
            Record<
                string,
                ComponentType<{ size?: number; className?: string }>[]
            >
        >(techStacksIcons);
    const [activeTech, setActiveTech] = React.useState<string | null>(null);

    return (
        <PlayingContext.Provider
            value={{
                playing,
                setPlaying,
                currentTime,
                setCurrentTime,
                tech,
                setTech,
                techStacks,
                setTechStacks,
                activeTech,
                setActiveTech,
            }}
        >
            {children}
        </PlayingContext.Provider>
    );
}

export { PlayingContext };
