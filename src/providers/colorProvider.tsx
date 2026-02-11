import React from 'react';
import BallonGirl from '../assets/images/BallonGirl.png';
import IWishThatICouldFall from '../assets/images/IWishThatICouldFall.png';

type colorProviderProps = {
    children: React.ReactNode;
    className?: string;
};

export const videosMap: Record<string, Record<string, string | number>> = {
    IWishThatICouldFall: {
        video: 'FftLImzl1-k',
        image: IWishThatICouldFall,
        duration: 298,
    },
    BallonGirl: { video: 'bQhB_v3sAXc', image: BallonGirl, duration: 240 },
    SkipTheFormalities: {
        video: 'CzJJrBFhxh4',
        image: 'SkipTheFormalities.jpg',
        duration: 265,
    },
};

type colorContextType = {
    theme: string;
    setTheme: React.Dispatch<React.SetStateAction<string>>;
};

const colorContext = React.createContext<colorContextType>({
    theme: '',
    setTheme: () => {},
});

export function ColorProvider({ children }: colorProviderProps) {
    const randomIndex = Math.floor(
        Math.random() * Object.keys(videosMap).length
    );
    const randomTheme = Object.keys(videosMap)[randomIndex];
    const [theme, setTheme] = React.useState<string>(randomTheme);

    return (
        <colorContext.Provider value={{ theme, setTheme }}>
            {children}
        </colorContext.Provider>
    );
}

export { colorContext };
