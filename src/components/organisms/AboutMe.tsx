import Card from '../molecules/Card';

export default function AboutMe({ className }: { className: string }) {
    return (
        <Card
            heading={['About Me', 'Artist Description']}
            fromLeft={false}
            className={`${className}`}
        >
            <div
                className="flex flex-col h-full max-h-full font-semibold bg-secondary rounded-xl p-4
            md:p-4"
            >
                <p
                    className="
                md:text-xs
                lg:text-sm
                xl:text-base"
                >
                    Hi, I’m Miguel Fernandez, a Full-Stack Web Developer based
                    in Dallas, TX. I specialize in building responsive,
                    user-focused applications with React and modern web
                    technologies. Known for my productivity and problem-solving
                    mindset, I enjoy turning complex requirements into clean,
                    efficient solutions. I’m currently completing my B.S. in
                    Computer Science, graduating in Spring 2026.
                </p>
            </div>
        </Card>
    );
}
