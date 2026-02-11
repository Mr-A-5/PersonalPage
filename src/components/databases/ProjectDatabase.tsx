import TheReviewMediator from '../../assets/images/projectImages/TheReviewMediator.png';
import P2P from '../../assets/images/projectImages/P2P.png';

export type Title = string;

export type Project = {
    summary: string;
    description: string;
    tech: string[];
    techStack: string[];
    image: string;
    link: string | null;
};

export const projects: Record<Title, Project> = {
    'The Review Mediator': {
        summary: `Worked with other students to develop a dispute resolution platform that helps businesses manage online reviews. There, I built responsive frontend components and led backend development, worked in the Supabase database design, and optimized database filtering.`,
        description: `Worked along other UT Dallas students in order to develop an online dispute resolution platform. 
        The core purpose of this platform was to the businesses with an efficient tool to manage and 
        resolve disputes related to fake, defamatory, or unfair online reviews. The front-end of the plataform was
        created using React, and I was in charge of creating responsive and functional components. For the middleware, we
        used Express, there I was in charge of creating all the endpoint and implement security via Clerk tokens, and the use of 
        functional filter during calls to the database. We used Supabase to host our database, here I helped with the creation of 
        the tables, relationships among the tables, and implement row level security.`,
        tech: ['React', 'TypeScript', 'Supabase', 'Express'],
        techStack: ['React', 'Supabase', 'Express'],
        image: TheReviewMediator,
        link: null,
    },
    'P2P Simple BitTorrent': {
        summary:
            'Designed and implemented a BitTorrent-style P2P system with a tracker and multiple peers that concurrently upload, download, verify, and reconstruct files over TCP.',
        description: '',
        tech: ['Python'],
        techStack: ['Python'],
        image: P2P,
        link: 'https://github.com/Mr-A-5/BitTorrent-Style-P2P-Client',
    },
    'Easy Investing': {
        summary:
            'Designed and deployed a full stack app where users can obtain services that facilitate some trading aspects for specific companies. User may create an account and select services such a articles news with sentiment, or current market status to be tracked for a selected company such as Amazon.',
        description: '',
        tech: ['React', 'TypeScript', 'Supabase', 'Next'],
        techStack: ['React', 'Supabase', 'Next'],
        image: 'EasyInvestingImage.png',
        link: 'https://stock-sentiment-tracker.vercel.app/en',
    },
};

export const projectsBySong: Record<string, string> = {
    IWishThatICouldFall: 'The Review Mediator',
    BallonGirl: 'P2P Simple BitTorrent',
    SkipTheFormalities: 'Easy Investing',
};

export const projectsByTech: Record<string, string[]> = {
    React: ['The Review Mediator', 'Easy Investing'],
    Python: ['P2P Simple BitTorrent'],
    TypeScript: ['The Review Mediator', 'Easy Investing'],
    Supabase: ['The Review Mediator', 'Easy Investing'],
    Express: ['The Review Mediator'],
    Next: ['Easy Investing'],
};

export const projectByTheme: Record<string, string> = {
    'The Review Mediator': 'IWishThatICouldFall',
    'P2P Simple BitTorrent': 'BallonGirl',
    'Easy Investing': 'SkipTheFormalities',
};

export const projectsByTechStack: Record<string, string[]> = {
    'Express React Supabase': ['The Review Mediator'],
};
