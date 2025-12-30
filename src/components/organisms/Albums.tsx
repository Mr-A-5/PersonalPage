import { Button } from 'flowbite-react';
import Card from '../molecules/Card';
import { usePlayingContext } from '../../providers/usePlaying';
import {
    projectByTheme,
    projectsByTechStack,
} from '../databases/ProjectDatabase';
import { useColorContext } from '../../providers/useColor';

export default function Albums() {
    const { techStacks, activeTech, setActiveTech } = usePlayingContext();
    const { setTheme } = useColorContext();

    function getRandomProject(techStack: string) {
        const sortedStack = techStack
            .split(' ')
            .map((s) => s.trim())
            .sort()
            .join(' ');
        const projects = projectsByTechStack[sortedStack];
        const randomIndex = Math.floor(Math.random() * projects.length);
        return projects[randomIndex];
    }

    return (
        <Card
            heading={['Tech Stacks Integrated', 'Favorite Albums']}
            fromLeft={false}
            className="flex align-center w-full
            md:col-start-15 md:col-end-18 md:col-span-3 md:row-start-3 md:row-end-9 md:row-span-6 md:p-2"
        >
            <div className="flex flex-row flex-wrap p-2">
                {Object.entries(techStacks).map(([stack, Icons], i) => (
                    <Button
                        onClick={() => {
                            const project = getRandomProject(stack);
                            const theme = projectByTheme[project];
                            setTheme(theme);
                            setActiveTech(stack);
                        }}
                        key={i}
                        className={`flex flex-col w-fit bg-secondary justify-items-center ring-bg transition duration-300 ease-in-out ring-0 hover:ring-2 rounded-xl border border-black cursor-pointer ${
                            activeTech === stack ? 'ring-4' : ''
                        }`}
                    >
                        <div className="flex flex-row flex-wrap justify-items-center cursor-pointer">
                            {Icons.slice(0, 2).map((Icon, j) => (
                                <div key={j} className="p-2 md:p-1">
                                    <Icon className="size-20 md:size-5" />
                                </div>
                            ))}
                        </div>
                        <div className="flex flex-row flex-wrap justify-items-center">
                            {Icons.slice(2, Icons.length).map((Icon, j) => (
                                <div key={j} className="p-2  md:p-1">
                                    <Icon className="size-20 md:size-5" />
                                </div>
                            ))}
                        </div>
                    </Button>
                ))}
            </div>
        </Card>
    );
}
