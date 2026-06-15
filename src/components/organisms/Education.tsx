import Card from '../molecules/Card';

export default function Education({ className }: { className?: string }) {
    return (
        <Card
            heading={['Education']}
            fromLeft={true}
            className={`${className}`}
        >
            <div
                className="flex flex-col bg-secondary h-full rounded-xl p-3 gap-3
            text-sm leading-relaxed
            md:text-[0.85rem] md:p-3
            lg:text-[0.95rem]"
            >
                <div>
                    <div className="w-full font-semibold">
                        <h2 className="underline underline-offset-1">
                            UT Dallas
                        </h2>
                        <h2>2024 - 2026</h2>
                    </div>
                    <h3>Bachelor's in Computer Science</h3>
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
