import Reproductor from '../organisms/Reproductor';
import { projects } from '../databases/ProjectDatabase';
import ProjectCard from '../organisms/ProjectCard';
import { LyricsBackground } from '../organisms/LyricsBackground';

export default function Projects() {
    return (
        <div className="relative bg-bg flex flex-col w-full min-h-screen h-fit text-white py-10">
            <LyricsBackground page="Projects" />
            <div
                className="relative z-10 flex flex-col w-full pt-10 gap-4 justify-center items-center
                md:gap-4 md:p-10"
            >
                <div
                    className="w-full flex flex-col justify-center items-center
                    md:gap-5 md:flex md:flex-row md:h-fit md:max-w-190
                    xl:items-center xl:justify-center
                    "
                >
                    <div className="w-fit">
                        <div
                            className="w-full pb-4
                            md:h-65 md:w-45
                            lg:h-70 lg:w-50
                            xl:h-75 xl:w-60"
                        >
                            <Reproductor
                                className="px-10 w-full
                                md:flex-none md:px-0
                                xl:h-75 xl:px-0"
                            />
                        </div>
                    </div>
                    <div
                        className="w-full h-fit px-10
                    max-w-140
                    md:flex-1 md:px-0 md:max-w-100
                    lg:max-w-120
                    xl:max-w-250"
                    >
                        {Object.entries(projects)
                            .slice(0, 1)
                            .map(([title, project]) => (
                                <ProjectCard
                                    key={title}
                                    title={title}
                                    project={project}
                                    className="flex-1 w-full md:h-full"
                                />
                            ))}
                    </div>
                </div>
                <div
                    className="flex flex-col justify-center items-center h-fit w-full px-10 gap-y-4
                    max-w-140
                    md:max-w-100 md:px-0
                    lg:max-w-130
                    xl:max-w-140"
                >
                    {Object.entries(projects)
                        .slice(1, Object.entries(projects).length)
                        .map(([title, project]) => (
                            <ProjectCard
                                key={title}
                                title={title}
                                project={project}
                                className=""
                            />
                        ))}
                </div>
            </div>
        </div>
    );
}
