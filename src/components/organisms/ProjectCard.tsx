import Card from '../molecules/Card';
import { type Project, type Title } from '../databases/ProjectDatabase';
import { techIcons } from '../../providers/playProvider';

export default function ProjectCard({
    project,
    title,
    className,
}: {
    project: Project;
    title: Title;
    className?: string;
}) {
    return (
        <Card
            heading={[`${title}`, 'Song Description']}
            fromLeft={false}
            className={`${className}`}
        >
            <div
                className={`h-full bg-secondary p-2 rounded-xl
            xl:p-0 ${project.link ? 'cursor-pointer' : ''}`}
                onClick={
                    project.link
                        ? () =>
                              window.open(
                                  project.link as string,
                                  '_blank',
                                  'noopener,noreferrer'
                              )
                        : undefined
                }
            >
                <div
                    className="flex flex-col
                md:flex-col md:justify-center md:items-center
                lg:grid lg:grid-cols-10 lg:grid-rows-10 lg:justify-center lg:items-center lg:px-3 lg:h-full
                xl:grid xl:grid-cols-10 xl:grid-rows-10 xl:justify-center xl:items-center xl:px-3 xl:h-full"
                >
                    <div
                        className="flex justify-center
                        md:w-full md:flex md:justify-center md:items-center
                        lg:col-start-1 lg:col-end-7 lg:row-start-1 lg:row-end-6
                        xl:col-start-1 xl:col-end-7 xl:row-start-1 xl:row-end-6"
                    >
                        <img
                            src={project.image}
                            alt={'Project Image'}
                            className="w-17/20 
                        md:border-b-2 md:pb-2 md:w-40 md:h-30
                        lg:w-full lg:h-30 lg:border-b-0 lg:pr-6 lg:py-2
                        xl:w-full xl:h-40 xl:border-b-0 xl:px-6"
                        />
                    </div>
                    <div
                        className="flex-1 px-3 font-semibold 
                    md:text-xs md:px-0 md:col-start-1 md:col-end-2 md:row-start-2 md:row-end-3
                    lg:text-sm lg:col-span-10 lg:row-start-6 lg:row-end-11 lg:self-start lg:h-full
                    xl:col-span-10 xl:row-start-6 xl:row-end-11 xl:text-base xl:self-start xl:h-full"
                    >
                        {project.summary}
                    </div>
                    <div
                        className="w-full justify-start
                    lg:col-start-7 lg:col-end-10 lg:row-start-1 lg:row-end-6
                    xl:col-start-7 xl:col-end-10 xl:row-start-1 xl:row-end-6"
                    >
                        <div
                            className="flex flex-row justify-items-start flex-wrap p-3 font-semibold gap-1
                        md:p-1                     
                        lg:p-1
                        xl:p-4 xl:justify-items-center xl:pl-6 xl:flex-col"
                        >
                            {project.tech.map((tech, i) => {
                                const Icon = techIcons[tech];
                                return (
                                    <div
                                        key={i}
                                        className="flex flex-row p-1 bg-primary-var border border-black w-fit h-fit gap-1
                                     md:items-center"
                                    >
                                        <h2
                                            className="
                                    md:text-xs
                                    xl:text-sm"
                                        >
                                            {tech}
                                        </h2>
                                        <Icon
                                            className="w-5 h-5 
                                    md:w-4 md:h-4
                                    xl:w-5 xl:h-5"
                                        />
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </Card>
    );
}
