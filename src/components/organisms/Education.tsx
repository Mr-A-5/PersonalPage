import Card from '../molecules/Card';

export default function Education({ className }: { className?: string }) {
    return (
        <Card
            heading={['Education', 'History']}
            fromLeft={true}
            className={`${className}`}
        >
            <div
                className="flex flex-col bg-secondary h-full rounded-xl p-2 
            md:text-xs md:p-2
            lg:text-sm lg:p-2
            xl:text-base xl:p-2"
            >
                <div>
                    <div className="w-full font-semibold">
                        <h2 className="underline underline-offset-1">
                            UT Dallas
                        </h2>
                        <h2>2024 - Present</h2>
                    </div>
                    <h3>BS in Computer Science</h3>
                </div>
                <div>
                    <div className="w-full font-semibold">
                        <h2 className="underline underline-offset-1">
                            Collin College
                        </h2>
                        <h2>2022 - 2024</h2>
                    </div>
                    <h3>Associate in Sciences</h3>
                </div>
            </div>
        </Card>
    );
}
