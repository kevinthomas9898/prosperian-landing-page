"use client";

import Image from "next/image";

import { cn } from "@/lib/utils";
import { Typography } from "@/components/shared/typography";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/shared/animated-wrapper";
import { motion } from "framer-motion";

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
        <FadeIn duration={0.7}>
            <section
                className={cn(
                    "bg-white py-12 md:py-10 px-44",
                    className
                )}
            >
                <div className="container-custom m-auto">
                    <motion.div
                        className="text-center"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        <Typography variant="54px" className="text-black">
                            {title}
                        </Typography>

                        {subtitle && (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.5 }}
                                transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
                            >
                                <Typography
                                    variant="22px-regular"
                                    className="mt-2 text-[#4B4B4B] text-center"
                                >
                                    {subtitle}
                                </Typography>
                            </motion.div>
                        )}
                    </motion.div>

                    <motion.div
                        className="mt-10 md:mt-14"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
                    >
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
                    </motion.div>

                    <StaggerContainer staggerDelay={0.1}>
                        <div className="mt-10 md:mt-12 space-y-6">
                            {paragraphs.map((paragraph, index) => (
                                <StaggerItem key={index} direction="bottom">
                                    <Typography
                                        variant="22px-regular"
                                        className="text-black"
                                    >
                                        {paragraph}
                                    </Typography>
                                </StaggerItem>
                            ))}
                        </div>
                    </StaggerContainer>
                </div>
            </section>
        </FadeIn>
    );
}