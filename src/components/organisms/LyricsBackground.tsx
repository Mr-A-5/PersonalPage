import { useEffect, useState } from 'react';
import { useColorContext } from '../../providers/useColor';
import { usePlayingContext } from '../../providers/usePlaying';
import { lyricsDatabase } from '../../assets/lyrics/lyricsDatabase';
import { useBreakpoint } from '../../hooks/useBreakpoint';
import {
    LYRICS_GRIDS,
    MOBILE_GRID_ROWS,
    type GridPosition,
} from '../databases/GridDatabase';

type LyricsProps = {
    page?: 'Main' | 'Projects';
};

export function LyricsBackground({ page }: LyricsProps) {
    const { currentTime } = usePlayingContext();
    const { theme } = useColorContext();
    const [activeLyrics, setActiveLyrics] = useState<ActiveLyric[]>([]);
    const breakpoint = useBreakpoint();

    type ActiveLyric = {
        id: string;
        text: string;
        position: GridPosition;
    };

    const currentLyricIndex = lyricsDatabase[theme].lines.findIndex(
        (line, i) =>
            currentTime >= line.time &&
            (i === lyricsDatabase[theme].lines.length - 1 ||
                currentTime < lyricsDatabase[theme].lines[i + 1].time)
    );

    const getRandomGridPosition = (): GridPosition => {
        if (breakpoint === 'mobile') {
            return {
                row: Math.floor(Math.random() * MOBILE_GRID_ROWS),
            };
        } else if (page == 'Projects') {
            const grids = LYRICS_GRIDS['projects'];
            return grids[Math.floor(Math.random() * grids.length)];
        }

        const grids = LYRICS_GRIDS[breakpoint];
        return grids[Math.floor(Math.random() * grids.length)];
    };

    useEffect(() => {
        if (currentLyricIndex === -1) return;

        const lyric = lyricsDatabase[theme].lines[currentLyricIndex];

        setActiveLyrics([
            {
                id: crypto.randomUUID(),
                text: lyric.text,
                position: getRandomGridPosition(),
            },
        ]);
    }, [currentLyricIndex, theme, breakpoint]);

    return (
        <div className="absolute inset-0 top-0 pointer-events-none z-0">
            <div
                className="grid grid-rows-15 grid-cols-1 p-5 min-h-screen h-full
                md:h-screen md:grid md:grid-cols-20 md:grid-rows-25 md:justify-items-center md:items-center"
            >
                {activeLyrics.map((lyric) => (
                    <div
                        key={lyric.id}
                        className="flex justify-center items-center p-1 flex-wrap"
                        style={
                            'row' in lyric.position
                                ? {
                                      gridRow: lyric.position.row + 1,
                                      gridColumn: '1 / -1',
                                  }
                                : {
                                      gridRow: `${lyric.position.rowStart} / ${lyric.position.rowFinish}`,
                                      gridColumn: `${lyric.position.colStart} / ${lyric.position.colFinish}`,
                                  }
                        }
                    >
                        <span
                            className="
                  animate-fade
                  text-textColor
                  text-xl
                  font-extrabold
                  text-center
                  transition-opacity
                  duration-1000
                  text-wrap
                  xl:p-2
                "
                        >
                            {lyric.text}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}
