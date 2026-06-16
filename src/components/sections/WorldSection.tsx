"use client";

import Image from "next/image";

import { Typography } from "@/components/shared/typography";
import { cn } from "@/lib/utils";
import { FadeIn } from "@/components/shared/animated-wrapper";
import { motion } from "framer-motion";

interface WorldSectionProps {
    className?: string;
}

export function WorldSection({ className }: WorldSectionProps) {
    return (
        <FadeIn duration={0.7}>
            <section
                className={cn(
                    "bg-white py-10",
                    className
                )}
            >
                <div className="container-custom">
                    <div className="mx-auto max-w-5xl text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                        >
                            <Typography
                                variant="54px"
                                className="text-black"
                            >
                                Our World
                            </Typography>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
                        >
                            <Typography
                                variant="20px-regular"
                                className="text-black uppercase text-center"
                            >
                                Global. FinTech. Solutions.
                            </Typography>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
                        >
                            <Typography
                                variant="20px-regular"
                                className="mx-auto mt-5 max-w-4xl text-black text-center"
                            >
                                Prosperian Capital International is a Global Enterprise
                                that leverages technology to create innovative
                                investable solutions in eServices, FinTech, Cyber
                                Farming, Equities, and Property.
                            </Typography>
                        </motion.div>

                        <motion.div
                            className="mt-5"
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
                        >
                            <Image
                                src="/images/map.png"
                                alt="Prosperian Global Presence"
                                width={1200}
                                height={700}
                                className="mx-auto h-auto w-full max-w-4xl"
                            />
                        </motion.div>
                    </div>
                </div>

                <motion.div
                    className="mt-12 bg-[#B94E1E] py-6 px-6"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
                >
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
                </motion.div>
            </section>
        </FadeIn>
    );
}