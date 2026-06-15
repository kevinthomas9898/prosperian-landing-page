import Image from "next/image";

import { cn } from "@/lib/utils";
import { Typography } from "@/components/shared/typography";

interface OverviewSectionProps {
    title: React.ReactNode;
    subtitle?: React.ReactNode;
    image: string;
    imageAlt: string;
    paragraphs: string[];

    className?: string;
    imageClassName?: string;
}

export function OverviewSection({
    title,
    subtitle,
    image,
    imageAlt,
    paragraphs,
    className,
    imageClassName,
}: OverviewSectionProps) {
    return (
        <section
            className={cn(
                "bg-white py-12 md:py-10 px-44",
                className
            )}
        >
            <div className="container-custom m-auto">
                <div className="text-center">
                    <Typography variant="54px" className="text-black">
                        {title}
                    </Typography>

                    {subtitle && (
                        <Typography
                            variant="22px-regular"
                            className="mt-2 text-[#4B4B4B] text-center"
                        >
                            {subtitle}
                        </Typography>
                    )}
                </div>

                <div className="mt-10 md:mt-14">
                    <Image
                        src={image}
                        alt={imageAlt}
                        width={1200}
                        height={700}
                        className={cn(
                            "w-full rounded-2xl object-cover",
                            imageClassName
                        )}
                    />
                </div>

                <div className="mt-10 md:mt-12 space-y-6">
                    {paragraphs.map((paragraph, index) => (
                        <Typography
                            key={index}
                            variant="22px-regular"
                            className="text-black"
                        >
                            {paragraph}
                        </Typography>
                    ))}
                </div>
            </div>
        </section>
    );
}