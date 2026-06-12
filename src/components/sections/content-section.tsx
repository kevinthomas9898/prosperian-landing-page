import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { Typography } from "@/components/shared/typography";
import { Button } from "@/components/ui/button";

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
    button,
}: ContentSectionProps) {
    return (
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
                    <div>
                        <Typography variant="36px" className="text-black">
                            {title}
                        </Typography>

                        <div className="mt-8 md:mt-12 space-y-7">
                            {paragraphs.map((paragraph, index) => (
                                <Typography
                                    key={index}
                                    variant="20px-regular"
                                    className={cn(
                                        "text-[#4B4B4B]",
                                        variant === "default" &&
                                            "w-full md:w-11/12"
                                    )}
                                >
                                    {paragraph}
                                </Typography>
                            ))}
                        </div>

                        {button && (
                            <div className="mt-8">
                                {button.href ? (
                                    <Button
                                        asChild
                                        className="bg-[#B94E1E] text-white min-w-44 py-5"
                                    >
                                        <Link
                                            href={button.href}
                                            target={button.target}
                                        >
                                            {button.label}
                                        </Link>
                                    </Button>
                                ) : (
                                    <Button onClick={button.onClick} className="bg-[#B94E1E] text-white min-w-44 py-5">
                                        {button.label}
                                    </Button>
                                )}
                            </div>
                        )}
                    </div>

                    <div
                        className={cn(
                            variant === "compact" &&
                                "shrink-0 flex justify-center md:justify-start"
                        )}
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
                    </div>
                </div>
            </div>
        </section>
    );
}