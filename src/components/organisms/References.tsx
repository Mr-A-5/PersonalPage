import Card from '../molecules/Card';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import type { ComponentType } from 'react';
import { IoMail } from 'react-icons/io5';
import { FaNewspaper } from 'react-icons/fa6';

type IconProps = {
    size?: number;
    color?: string;
    className?: string;
};

const links: {
    icon: ComponentType<IconProps>;
    url: string;
    text: string;
}[] = [
    {
        icon: FaGithub,
        url: 'https://github.com/Mr-A-5',
        text: 'Github',
    },
    {
        icon: FaLinkedin,
        url: 'https://www.linkedin.com/in/miguel-fernandez-0658ab242/',
        text: 'Linkedin',
    },
    {
        icon: FaNewspaper,
        url: 'Res12_25.pdf',
        text: 'Resume',
    },
    {
        icon: IoMail,
        url: 'mailto:asteriofinol@gmail.com',
        text: 'Email',
    },
];

export default function References({ className }: { className?: string }) {
    return (
        <Card
            heading={['Links', 'Artists']}
            fromLeft={false}
            className={`pb-30 md:pb-0 ${className}`}
        >
            <div
                className="flex flex-row flex-wrap gap-2
            md:pt-0 md:flex-col md:justify-center md:items-center md:pb-4
            lg:justify-center lg:pb-5
            xl:pb-5"
            >
                {links.map(({ icon: Icon, url, text }) => (
                    <a
                        key={url}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-secondary flex flex-col justify-center items-center p-2 w-fit rounded-xl border border-black cursor-pointer ring-bg transition duration-300 ease-in-out ring-0 hover:ring-2
                        md:w-16
                        xl:w-20"
                    >
                        <Icon
                            className="m-1 size-8 w-fit 
                            md:h-6 md:w-6 md:m-0
                            lg:w-8 lg:h-8"
                            color="var(--color-icon)"
                        />
                        <span
                            className="text-xs font-bold pt-1 w-fit
                        lg:text-xs"
                        >
                            {text}
                        </span>
                    </a>
                ))}
            </div>
        </Card>
    );
}
