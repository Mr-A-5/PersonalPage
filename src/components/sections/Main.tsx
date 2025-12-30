import Reproductor from '../organisms/Reproductor';
import QuickPicks from '../organisms/QuickPicks';
// import Albums from '../organisms/Albums';
import ProjectCard from '../organisms/ProjectCard';
import {
    type Project,
    type Title,
    projects,
    projectsBySong,
} from '../databases/ProjectDatabase';
import { useColorContext } from '../../providers/useColor';
import References from '../organisms/References';
import { LyricsBackground } from '../organisms/LyricsBackground';
import AboutMe from '../organisms/AboutMe';
import Education from '../organisms/Education';

export default function Main() {
    const { theme } = useColorContext();
    const projectName: Title = projectsBySong[theme];
    const project: Project = projects[projectName];

    return (
        <div
            className="relative z-10 bg-bg w-screen min-h-screen text-white py-10
        md:py-3"
        >
            <LyricsBackground />
            <div
                className="
                flex flex-col min-h-fit h-screen pt-15 gap-5 items-center
            md:w-screen md:h-screen md:grid md:grid-cols-20 md:grid-rows-24 md:gap-2 md:pt-0 md:items-stretch"
            >
                <Reproductor
                    className="
                px-10 w-100 h-100 
                md:col-start-4 md:col-end-8 md:row-start-4 md:row-end-12 md:px-0 md:pt-5 md:w-full md:h-full
                lg:row-start-3
                xl:flex xl:h-full xl:col-start-5 xl:col-end-8 xl:row-start-3 xl:row-end-12"
                />
                <QuickPicks
                    className="w-full px-10
                md:col-start-3 md:col-end-8 md:row-start-12 md:row-end-19 md:px-0
                lg:col-start-3 mdlg:row-end-18
                xl:col-start-4 xl:col-end-8 xl:row-start-12 xl:row-end-19 xl:h-full"
                />
                {/* <Albums /> */}
                <ProjectCard
                    project={project}
                    title={projectName}
                    className='"w-full px-10
                    md:col-start-8 md:col-end-15 md:row-start-12 md:row-end-24 md:px-0
                    lg:col-start-8 lg:col-end-15 lg:row-start-12 lg:row-end-24
                    xl:col-start-8 xl:col-end-15 xl:row-start-12 xl:row-end-24 xl:flex xl:h-full"'
                />
                <AboutMe
                    className="flex w-full px-10
                    md:col-start-8 md:col-end-15 md:row-start-3 md:row-end-12 md:px-0
                    lg:col-start-8 lg:col-end-15 lg:row-start-3 lg:row-end-12
                    xl:col-start-8 xl:col-end-15 xl:row-start-3 xl:row-end-12"
                />
                <Education
                    className="w-full px-10
                    md:col-start-15 md:col-end-19 md:row-start-6 md:row-end-12 md:px-0 md:h-full
                    lg:row-start-5
                    xl:col-start-15 xl:col-end-18 xl:row-start-4 xl:row-end-12 xl:flex xl:h-full"
                />
                <References
                    className="w-full px-10 h-fit
                md:col-start-15 md:col-end-18 md:row-start-12 md:row-end-22 md:px-0
                lg:col-end-17 lg:mr-4
                xl:col-start-15 xl:col-end-17 xl:row-start-12 xl:row-end-23 xl:h-full xl:flex xl:mr-0"
                />
            </div>
        </div>
    );
}
