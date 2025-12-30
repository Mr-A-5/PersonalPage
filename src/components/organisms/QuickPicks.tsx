import { Button } from 'flowbite-react';
import Card from '../molecules/Card';
import { usePlayingContext } from '../../providers/usePlaying';
import { useColorContext } from '../../providers/useColor';
import { projectsByTech, projectByTheme } from '../databases/ProjectDatabase';

type QuickPicksProps = {
    className?: string;
};
export default function QuickPicks({ className }: QuickPicksProps) {
    const { tech, activeTech, setActiveTech } = usePlayingContext();
    const { setTheme } = useColorContext();

    function getRandomProject(techName: string) {
        const projects = projectsByTech[techName];
        const randomIndex = Math.floor(Math.random() * projects.length);
        return projects[randomIndex];
    }
    return (
        <Card
            heading={['Utilized Techs', 'Quick Picks']}
            fromLeft={true}
            className={`${className}`}
        >
            <div
                className="flex flex-row flex-wrap justify-center
            xl:min-h-fit xl:h-full"
            >
                {Object.entries(tech).map(([name, Icon], i) => (
                    <div
                        key={i}
                        className="p-1 w-fit
                    lg:p-1
                    xl:p-1"
                    >
                        <Button
                            onClick={() => {
                                const project = getRandomProject(name);
                                const theme = projectByTheme[project];
                                if (project) setTheme(theme);
                                setActiveTech(name);
                            }}
                            className={`flex flex-col bg-secondary p-2 min-w-22 rounded-xl border border-black cursor-pointer w-fit min-h-fit h-fit ring-bg transition duration-300 ease-in-out ring-0 hover:ring-2
                                md:min-w-15 md:p-1 md:py-1
                                lg:min-w-15 lg:py-2
                                xl:min-w-16 xl:p-1 xl:py-2  ${
                                    activeTech === name ? 'ring-4' : ''
                                }`}
                        >
                            <Icon
                                color="var(--color-icon)"
                                className="w-8 h-8 
                                md:h-5 md:w-5
                                lg:w-6 lg:h-6
                                xl:w-8 xl:h-8"
                            />
                            <span
                                className="text-sm font-bold pt-1 
                            md:text-xs md:font-normal
                            lg:font-semibold lg:text-sm
                            xl:text-sm"
                            >
                                {name}
                            </span>
                        </Button>
                    </div>
                ))}
            </div>
        </Card>
    );
}
