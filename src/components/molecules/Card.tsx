import { FadeSection } from './FadeSection';
import AnimatedContent from '../../hooks/AnimatedContent';

type CardProps = {
    children: React.ReactNode;
    heading?: string[];
    fromLeft: boolean;
    className?: string;
};

export default function Card({
    children,
    heading,
    fromLeft,
    className,
}: CardProps) {
    const headingText = heading?.[0];

    return (
        <div className={`${className}`}>
            <FadeSection>
                <AnimatedContent
                    distance={150}
                    direction={'horizontal'}
                    reverse={fromLeft}
                    duration={0.5}
                    ease="power3.out"
                    initialOpacity={0}
                    animateOpacity
                    scale={1}
                    threshold={0.2}
                    delay={0.1}
                    className="w-full h-full"
                >
                    <div
                        className="flex flex-col bg-primary rounded-3xl p-5 pt-7 h-full
                    md:p-4
                    lg:p-5"
                    >
                        {headingText && (
                            <h1 className="h-fit mb-3 px-2 pb-2 border-b-2 font-bold text-textColor text-[clamp(1rem,2vw,1.35rem)] leading-tight">
                                {headingText}
                            </h1>
                        )}
                        {children}
                    </div>
                </AnimatedContent>
            </FadeSection>
        </div>
    );
}
