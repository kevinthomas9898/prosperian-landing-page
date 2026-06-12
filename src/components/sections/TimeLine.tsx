import { Typography } from "@/components/shared/typography";

export interface TimelineItem {
    year: string;
    side: "left" | "right";
    description: string | string[];
}

interface TimelineProps {
    title?: string;
    items: TimelineItem[];
}

export function Timeline({
    title = "MILESTONES",
    items,
}: TimelineProps) {
    return (
        <section className="py-10">
            <div className="container-custom">
                <Typography
                    variant="36px"
                    className="mb-20 text-center text-[#B94E1E]"
                >
                    {title}
                </Typography>

                <div className="relative mx-auto max-w-6xl">
                    {/* Vertical Line */}
                    <div className="absolute left-1/2 top-0 h-full w-[3px] -translate-x-1/2 bg-black" />

                    <div className="space-y-16">
                        {items.map((item, index) => (
                            <div
                                key={`${item.year}-${index}`}
                                className="relative grid grid-cols-2"
                            >
                                {/* Dot aligned with year */}
                                <div className="absolute left-1/2 top-[14px] z-10 h-3 w-3 -translate-x-1/2 rounded-full bg-[#B94E1E]" />

                                {item.side === "left" ? (
                                    <>
                                        <div className="relative pr-16 text-right flex flex-col justify-end items-end">
                                            {/* Connector */}
                                            <div className="absolute right-0 top-[19px] h-[2px] w-14 bg-[#B94E1E]" />

                                            <Typography
                                                variant="22px"
                                                className="text-[#B94E1E] text-end"
                                            >
                                                {item.year}
                                            </Typography>

                                            {Array.isArray(item.description) ? (
                                                <ul className="mt-2 space-y-1 text-sm mr-0 text-[#4B4B4B] max-w-sm">
                                                    {item.description.map((text) => (
                                                        <li key={text}>• {text}</li>
                                                    ))}
                                                </ul>
                                            ) : (
                                                <p className="mt-2 text-sm text-[#4B4B4B] text-end mr-0">
                                                    {item.description}
                                                </p>
                                            )}
                                        </div>

                                        <div />
                                    </>
                                ) : (
                                    <>
                                        <div />

                                        <div className="relative pl-16">
                                            {/* Connector */}
                                            <div className="absolute left-0 top-[19px] h-[2px] w-14 bg-[#B94E1E]" />

                                            <Typography
                                                variant="22px"
                                                className="text-[#B94E1E] text-start"
                                            >
                                                {item.year}
                                            </Typography>

                                            {Array.isArray(item.description) ? (
                                                <ul className="mt-2 space-y-1 text-sm text-[#4B4B4B] max-w-sm">
                                                    {item.description.map((text) => (
                                                        <li key={text}>• {text}</li>
                                                    ))}
                                                </ul>
                                            ) : (
                                                <p className="mt-2 text-sm text-[#4B4B4B]">
                                                    {item.description}
                                                </p>
                                            )}
                                        </div>
                                    </>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}