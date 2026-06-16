"use client";

import { Typography } from "@/components/shared/typography";
import { ContentSection } from "@/components/sections/content-section";
import Image from "next/image";
import { motion, useInView, animate, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { StaggerContainer, StaggerItem } from "@/components/shared/animated-wrapper";

function CountUp({ value, prefix = "", suffix = "" }: { value: number; prefix?: string; suffix?: string }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const [displayValue, setDisplayValue] = useState(0);

    useEffect(() => {
        if (isInView) {
            animate(0, value, {
                duration: 2,
                ease: "easeOut",
                onUpdate: (latest) => setDisplayValue(Math.round(latest)),
            });
        }
    }, [isInView, value]);

    return (
        <span ref={ref}>
            {prefix}{displayValue.toLocaleString()}{suffix}
        </span>
    );
}

const stats = [
    {
        value: 25,
        prefix: "",
        suffix: "+",
        label: "Years",
        description:
            "Combining decades of expertise with a global network spanning across several industries.",
    },
    {
        value: 88,
        prefix: "",
        suffix: "",
        label: "Countries",
        description:
            "Built to support businesses and scalable solutions across the world.",
    },
    {
        value: 75,
        prefix: ">",
        suffix: "",
        label: "Employees",
        description:
            "Delivering trusted financial solutions at scale across global markets.",
    },
    {
        value: 500,
        prefix: ">",
        suffix: "",
        label: "Online Story",
        description:
            "Supporting enterprises globally with interconnected fintech ecosystems.",
    },
];

const services = [
    {
        icon: "/logos/AI.png",
        title: "AI-Driven Equity Trading",
    },
    {
        icon: "/logos/eWallets.png",
        title: "eWallets & Purchase Cards",
    },
    {
        icon: "/logos/Renewable-Energy.png",
        title: "Renewable Energy Data Centres",
    },
    {
        icon: "/logos/online-subscriptions.png",
        title: "Online Subscription Services",
    },
    {
        icon: "/logos/global-neo-banking.png",
        title: "Global Neo Banking Solutions",
    },
];

export default function HomePage() {
    const { scrollYProgress } = useScroll();
    const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

    return (
        <>
            <motion.div
                className="fixed top-0 left-0 right-0 h-1 bg-[#B94E1E] origin-left z-50"
                style={{ scaleX }}
            />
            {/* Hero */}
            <section className="relative overflow-hidden bg-[#B94E1E] text-white">
                <motion.div
                    className="absolute inset-0 bg-contain bg-center"
                    style={{
                        backgroundImage: "url('/images/Frame-block.png')",
                    }}
                    initial={{ y: 0 }}
                    whileInView={{ y: 20 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                />

                <div className="container-custom relative z-10">
                    <div className="flex min-h-[650px] flex-col items-center justify-center py-20 pb-0 text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 50, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            <Typography variant="84px" className="text-white">
                                Global Fintech Solutions
                            </Typography>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                        >
                            <Typography variant="22px" className="mt-9 text-white">
                                Prosperian creates Innovative FinTech Solutions to combat
                                Systemic Exclusion globally
                            </Typography>
                        </motion.div>

                        <StaggerContainer staggerDelay={0.1}>
                            <div className="grid w-full max-w-7xl grid-cols-2 gap-10 md:grid-cols-3 mt-20">
                                {services.map((service) => (
                                    <StaggerItem key={service.title} direction="scale">
                                        <motion.div
                                            className="flex flex-col items-center gap-4"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <Image
                                                src={service.icon}
                                                alt={service.title}
                                                width={40}
                                                height={40}
                                            />

                                            <Typography variant="20px" className="text-white">
                                                {service.title}
                                            </Typography>
                                        </motion.div>
                                    </StaggerItem>
                                ))}
                            </div>
                        </StaggerContainer>

                        <motion.div
                            className="mt-20"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                        >
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                            >
                                <Image
                                    src="/logos/globe.png"
                                    alt="Global Network"
                                    width={850}
                                    height={300}
                                />
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Stats */}
            <motion.section
                className="bg-[#F4F4F4] py-16 m-auto px-16"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                <div className="container-custom">
                    <StaggerContainer staggerDelay={0.1}>
                        <div className="grid gap-10 md:grid-cols-4">
                            {stats.map((item) => (
                                <StaggerItem key={item.label} direction="bottom">
                                    <div
                                        className="border-r-3 border-dashed border-gray-200 pr-6 last:border-r-0"
                                    >
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true, amount: 0.5 }}
                                            transition={{ duration: 0.5, ease: "easeOut" }}
                                        >
                                            <Typography variant="64px" className="text-black">
                                                <CountUp value={item.value} prefix={item.prefix} suffix={item.suffix} />
                                            </Typography>
                                        </motion.div>

                                        <Typography variant="22px" className="text-black">
                                            {item.label}
                                        </Typography>

                                        <Typography variant="14px" className="text-black mt-9">
                                            {item.description}
                                        </Typography>
                                    </div>
                                </StaggerItem>
                            ))}
                        </div>
                    </StaggerContainer>
                </div>
            </motion.section>

            {/* Challenge */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                <ContentSection
                    title={
                        <>
                            The Challenge:
                            <br />
                            Systemic Exclusion
                        </>
                    }
                    image="/images/system-exe.png"
                    imageAlt="Systemic Exclusion"
                    paragraphs={[
                        "The mass consumer market has long been excluded from sophisticated service offerings due to the inability of legacy systems to support micro transactions and product models not catering for infrequent payment patterns.",
                        "In an ever-escalating compliance-orientated world, rendering offerings to the significant middle mass market has become even more challenging.",
                    ]}
                />
            </motion.div>

            {/* Solution */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                <ContentSection
                    title={
                        <>
                            The Solution:
                            <br />
                            Global FinTech Platform
                        </>
                    }
                    image="/images/global-fintech.png"
                    imageAlt="Global FinTech Platform"
                    paragraphs={[
                        "With a true desire to change the world for the better, by alleviating the difficulties that consumers in the mass market face daily, we saw innovative technology as the right tool to do just that.",
                        "We have developed a global FinTech platform that enables financial institutions to deliver sophisticated services to the mass market, without the need for significant investment in technology infrastructure.",
                    ]}
                />
            </motion.div>
        </>
    );
}