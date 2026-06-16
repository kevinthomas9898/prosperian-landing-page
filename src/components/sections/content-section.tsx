"use client";

import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { Typography } from "@/components/shared/typography";
import { Button } from "@/components/ui/button";
import { FadeIn, SlideIn, StaggerContainer, StaggerItem } from "@/components/shared/animated-wrapper";
import { motion } from "framer-motion";

interface ContentSectionButton {
    label: string;
    href?: string;
    onClick?: () => void;
    target?: "_blank" | "_self";
}

interface ContentSectionProps {
    title: React.ReactNode;
    paragraphs: string[];
    image: string;
    imageAlt: string;

    reverse?: boolean;
    className?: string;

    /**
     * default = current 50/50 layout
     * compact = logo + content layout
     */
    variant?: "default" | "compact";

    imageClassName?: string;

    titleClassName?: string;
    paragraphClassName?: string;

    button?: ContentSectionButton;
}

export function ContentSection({
    title,
    paragraphs,
    image,
    imageAlt,
    reverse = false,
    className,
    variant = "default",
    imageClassName,
    titleClassName,
    paragraphClassName,
    button,
}: ContentSectionProps) {
    return (
        <FadeIn duration={0.6}>
            <section
                className={cn(
                    "bg-white py-12 md:py-20 px-6 md:px-16",
                    className
                )}
            >
                <div className="container-custom">
                    <div
                        className={cn(
                            "grid items-center gap-10 md:gap-16",

                            variant === "default"
                                ? "md:grid-cols-2"
                                : "md:grid-cols-[max-content_1fr]",

                            reverse &&
                                "md:[&>*:first-child]:order-2 md:[&>*:last-child]:order-1"
                        )}
                    >
                        <SlideIn direction={reverse ? "right" : "left"} delay={0.1}>
                            <div>
                                <Typography
                                    variant="36px"
                                    className={cn("text-black", titleClassName)}
                                >
                                    {title}
                                </Typography>

                                <StaggerContainer staggerDelay={0.1}>
                                    <div className="mt-8 md:mt-12 space-y-7">
                                        {paragraphs.map((paragraph, index) => (
                                            <StaggerItem key={index} direction="bottom">
                                                <Typography
                                                    variant="20px-regular"
                                                    className={cn(
                                                        "text-[#4B4B4B]",
                                                        variant === "default" &&
                                                            "w-full md:w-11/12",
                                                        paragraphClassName
                                                    )}
                                                >
                                                    {paragraph}
                                                </Typography>
                                            </StaggerItem>
                                        ))}
                                    </div>
                                </StaggerContainer>

                                {button && (
                                    <motion.div
                                        className="mt-8"
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true, amount: 0.5 }}
                                        transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
                                    >
                                        {button.href ? (
                                            <motion.div
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                                transition={{ duration: 0.2 }}
                                            >
                                                <Button
                                                    asChild
                                                    className="bg-[#B94E1E] text-white min-w-44 py-5 font-bold text-lg"
                                                >
                                                    <Link
                                                        href={button.href}
                                                        target={button.target}
                                                    >
                                                        {button.label}
                                                    </Link>
                                                </Button>
                                            </motion.div>
                                        ) : (
                                            <motion.div
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                                transition={{ duration: 0.2 }}
                                            >
                                                <Button
                                                    onClick={button.onClick}
                                                    className="bg-[#B94E1E] text-white min-w-44 py-5 font-bold text-lg"
                                                >
                                                    {button.label}
                                                </Button>
                                            </motion.div>
                                        )}
                                    </motion.div>
                                )}
                            </div>
                        </SlideIn>

                        <SlideIn direction={reverse ? "left" : "right"} delay={0.2}>
                            <div
                                className={cn(
                                    variant === "compact" &&
                                        "shrink-0 flex justify-center md:justify-start"
                                )}
                            >
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true, amount: 0.5 }}
                                    transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                                >
                                    <Image
                                        src={image}
                                        alt={imageAlt}
                                        width={600}
                                        height={400}
                                        className={cn(
                                            variant === "default"
                                                ? "w-full rounded-xl"
                                                : "h-auto w-auto max-w-[180px] object-contain",
                                            imageClassName
                                        )}
                                    />
                                </motion.div>
                            </div>
                        </SlideIn>
                    </div>
                </div>
            </section>
        </FadeIn>
    );
}