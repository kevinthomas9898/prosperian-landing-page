import Image from "next/image";

import { Typography } from "@/components/shared/typography";
import { cn } from "@/lib/utils";

interface WorldSectionProps {
    className?: string;
}

export function WorldSection({ className }: WorldSectionProps) {
    return (
        <section
            className={cn(
                "bg-white py-10",
                className
            )}
        >
            <div className="container-custom">
                <div className="mx-auto max-w-5xl text-center">
                    <Typography
                        variant="54px"
                        className="text-black"
                    >
                        Our World
                    </Typography>

                    <Typography
                        variant="20px-regular"
                        className="text-black uppercase text-center"
                    >
                        Global. FinTech. Solutions.
                    </Typography>

                    <Typography
                        variant="20px-regular"
                        className="mx-auto mt-5 max-w-4xl text-black text-center"
                    >
                        Prosperian Capital International is a Global Enterprise
                        that leverages technology to create innovative
                        investable solutions in eServices, FinTech, Cyber
                        Farming, Equities, and Property.
                    </Typography>

                    <div className="mt-5">
                        <Image
                            src="/images/map.png"
                            alt="Prosperian Global Presence"
                            width={1200}
                            height={700}
                            className="mx-auto h-auto w-full max-w-4xl"
                        />
                    </div>
                </div>
            </div>

            <div className="mt-12 bg-[#B94E1E] py-6 px-6">
                <div className="container-custom">
                    <Typography
                        variant="20px-regular"
                        className="mx-auto max-w-5xl text-center text-white"
                    >
                        We help the systemically excluded to prosper by
                        facilitating global participation in sophisticated
                        financial offerings through contemporary FinTech
                        solutions.
                    </Typography>
                </div>
            </div>
        </section>
    );
}