import { RotatingText } from '../atoms/RotatingText';
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
                    md:p-3
                    lg:p-4
                    xl:p-3 xl:pt-3"
                    >
                        {heading && (
                            <h1
                                className="h-fit mb-2 px-2 pb-2 border-b-2 font-bold
                            "
                            >
                                <RotatingText
                                    words={heading}
                                    durations={[10000, 3000]}
                                    className="text-xl font-bold text-textColor
                                    md:text-base
                                    lg:text-xl"
                                />
                            </h1>
                        )}
                        {children}
                    </div>
                </AnimatedContent>
            </FadeSection>
        </div>
    );
}
