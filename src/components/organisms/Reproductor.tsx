import { BackwardIcon, PauseIcon, PlayIcon } from '@heroicons/react/24/solid';
import { Button } from 'flowbite-react';
import { useColorContext } from '../../providers/useColor';
import { videosMap } from '../../providers/colorProvider';
import { usePlayingContext } from '../../providers/usePlaying';
import { useRef, useState, useEffect } from 'react';
import YouTube from 'react-youtube';
import Card from '../molecules/Card';

type ReproductorProps = {
    className?: string;
};

export default function Reproductor({ className }: ReproductorProps) {
    const { theme, setTheme } = useColorContext();
    const [wantsToPlay, setWantsToPlay] = useState(false);
    const { playing, setPlaying, currentTime, setCurrentTime } =
        usePlayingContext();
    const playerRef = useRef<any>(null);
    const intervalRef = useRef<number | null>(null);
    const [progress, setProgress] = useState(0);
    const [duration, setDuration] = useState(0);

    function setRandomTheme(currentTheme: string) {
        let randomTheme: string;
        do {
            let randomIndex = Math.floor(
                Math.random() * Object.keys(videosMap).length
            );
            randomTheme = Object.keys(videosMap)[randomIndex];
        } while (randomTheme === currentTheme);
        setTheme(randomTheme);
    }

    const startTracking = () => {
        if (intervalRef.current) return;
        intervalRef.current = window.setInterval(() => {
            if (!playerRef.current) return;
            const current = playerRef.current.getCurrentTime();
            const total = playerRef.current.getDuration();
            if (total > 0) {
                setProgress((current / total) * 100);
            }
            setCurrentTime(current);
        }, 500);
    };

    useEffect(() => {
        // Run fallback timer ONLY when:
        // - user wants to play
        // - video is NOT ready yet
        if (wantsToPlay) return;

        const interval = window.setInterval(() => {
            setCurrentTime((prev) => prev + 0.5);
        }, 500);

        return () => clearInterval(interval);
    }, [wantsToPlay, duration]);

    const stopTracking = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
    };

    const opts = {
        playerVars: {
            autoplay: 1,
            controls: 0,
            rel: 0,
        },
    };

    /**
     * Call back function for when the youtube video is ready
     *
     * @param event
     */
    const onReady = (event: any) => {
        playerRef.current = event.target;
        setDuration(event.target.getDuration());
    };

    /**
     * Function to update data theme pack with change in video
     */
    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        setDuration(videosMap[theme].duration as number);
    }, [theme]);

    useEffect(() => {
        if (!playerRef.current) return;
        if (playing) {
            playerRef.current.playVideo();
        } else {
            playerRef.current.pauseVideo();
        }
    }, [playing]);

    /**
     * Function for skipping to parts of the video
     */
    const seek = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!playerRef.current || duration === 0) return;
        const rect = e.currentTarget.getBoundingClientRect();
        const percent = (e.clientX - rect.left) / rect.width;
        playerRef.current.seekTo(percent * duration, true);
    };

    /**
     * Function to keep track of the time of the video
     */
    const formatTime = (time: number) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60)
            .toString()
            .padStart(2, '0');
        return `${minutes}:${seconds}`;
    };

    const resetPlayerState = () => {
        stopTracking();
        setWantsToPlay(false);
        playerRef.current = null;
        setProgress(0);
        setDuration(0);
        setCurrentTime(0);
    };

    useEffect(() => {
        if (duration === 0) return;

        if (currentTime >= duration) {
            setPlaying(false);
            resetPlayerState();
            setRandomTheme(theme);
        }
        setProgress((currentTime / duration) * 100);
    }, [currentTime, duration]);

    return (
        <Card
            fromLeft={true}
            className={`${className} 
            `}
        >
            <div className="w-full pt-3 flex justify-center items-center">
                {wantsToPlay == false ? (
                    <img
                        src={videosMap[theme].image as string}
                        alt={'Smt'}
                        className="
                        w-50 h-50 border-3 border-gray-500
                        md:w-30 md:h-30       
                        lg:w-30 lg:h-30
                        xl:w-37 xl:h-37"
                    />
                ) : (
                    <div className="relative w-full aspect-video">
                        <YouTube
                            videoId={videosMap[theme].video as string}
                            opts={{
                                ...opts,
                                width: '100%',
                                height: '100%',
                            }}
                            onReady={onReady}
                            onPlay={startTracking}
                            onPause={stopTracking}
                            onEnd={() => {
                                setPlaying(false);
                                resetPlayerState();
                                setRandomTheme(theme);
                            }}
                            className="absolute inset-0"
                        />
                    </div>
                )}
            </div>
            <div
                className="p-5 flex flex-col justify-center
            md:p-1 md:pt-3
            lg:px-6"
            >
                <div className="h-3">
                    <div
                        onClick={seek}
                        className="w-full h-3 bg-black/20 rounded-full overflow-hidden
                        md:h-2"
                    >
                        <div
                            className="h-full bg-white border-black border rounded-full transition-[width] duration-200"
                            style={{ width: `${progress}%` }}
                        />
                    </div>
                </div>
                <div
                    className='flex flex-row w-full justify-between pb-2 h-fit text-base mt-2
                    md:text-xs
                    lg:text-sm"'
                >
                    <span>{formatTime(currentTime ? currentTime : 0)}</span>
                    <span>{formatTime(duration)}</span>
                </div>
                <div
                    className="flex flex-row justify-center gap-6 
                md:gap-1 
                lg:gap-4"
                >
                    <Button
                        className=""
                        onClick={() => {
                            setRandomTheme(theme);
                            setPlaying(false);
                            resetPlayerState();
                        }}
                    >
                        <BackwardIcon
                            className="size-13 cursor-pointer
                            md:size-7
                            lg:size-8 "
                        />
                    </Button>
                    <Button
                        onClick={() => {
                            if (!wantsToPlay) {
                                setWantsToPlay(true);
                                setPlaying(true);
                            } else {
                                setPlaying(!playing);
                            }
                        }}
                    >
                        {playing ? (
                            <PauseIcon
                                className="size-13 cursor-pointer
                            md:size-7
                            lg:size-8"
                            />
                        ) : (
                            <PlayIcon
                                className="size-13 cursor-pointer
                            md:size-7
                            lg:size-8"
                            />
                        )}
                    </Button>
                    <Button
                        className=""
                        onClick={() => {
                            setRandomTheme(theme);
                            setPlaying(false);
                            resetPlayerState();
                        }}
                    >
                        <BackwardIcon
                            className="size-13 -scale-x-100 cursor-pointer
                            md:size-7
                            lg:size-8"
                        />
                    </Button>
                </div>
            </div>
        </Card>
    );
}
