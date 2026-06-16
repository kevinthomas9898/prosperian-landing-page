"use client";

import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import { useAnimationReady } from "./animation-context";

interface AnimatedWrapperProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
    duration?: number;
    once?: boolean;
}

export function FadeIn({
    children,
    className,
    delay = 0,
    duration = 0.6,
    once = true,
}: AnimatedWrapperProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once, amount: 0.3 });
    const controls = useAnimation();
    const isReady = useAnimationReady();

    useEffect(() => {
        if (isInView && isReady) {
            controls.start("visible");
        } else if (!once) {
            controls.start("hidden");
        }
    }, [isInView, controls, once, isReady]);

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration, delay, ease: "easeOut" }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

interface SlideInProps extends AnimatedWrapperProps {
    direction?: "left" | "right" | "top" | "bottom";
}

export function SlideIn({
    children,
    className,
    delay = 0,
    duration = 0.6,
    once = true,
    direction = "left",
}: SlideInProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once, amount: 0.3 });
    const controls = useAnimation();
    const isReady = useAnimationReady();

    const variants = {
        left: { x: -50, opacity: 0 },
        right: { x: 50, opacity: 0 },
        top: { y: -50, opacity: 0 },
        bottom: { y: 50, opacity: 0 },
    };

    useEffect(() => {
        if (isInView && isReady) {
            controls.start("visible");
        } else if (!once) {
            controls.start("hidden");
        }
    }, [isInView, controls, once, isReady]);

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={{
                hidden: variants[direction],
                visible: { x: 0, y: 0, opacity: 1 },
            }}
            transition={{ duration, delay, ease: "easeOut" }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

export function ScaleIn({
    children,
    className,
    delay = 0,
    duration = 0.5,
    once = true,
}: AnimatedWrapperProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once, amount: 0.3 });
    const controls = useAnimation();
    const isReady = useAnimationReady();

    useEffect(() => {
        if (isInView && isReady) {
            controls.start("visible");
        } else if (!once) {
            controls.start("hidden");
        }
    }, [isInView, controls, once, isReady]);

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={{
                hidden: { opacity: 0, scale: 0.9 },
                visible: { opacity: 1, scale: 1 },
            }}
            transition={{ duration, delay, ease: "easeOut" }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

interface StaggerContainerProps {
    children: React.ReactNode;
    className?: string;
    staggerDelay?: number;
    once?: boolean;
}

export function StaggerContainer({
    children,
    className,
    staggerDelay = 0.1,
    once = true,
}: StaggerContainerProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once, amount: 0.3 });
    const controls = useAnimation();
    const isReady = useAnimationReady();

    useEffect(() => {
        if (isInView && isReady) {
            controls.start("visible");
        } else if (!once) {
            controls.start("hidden");
        }
    }, [isInView, controls, once, isReady]);

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={{
                hidden: { opacity: 0 },
                visible: {
                    opacity: 1,
                    transition: {
                        staggerChildren: staggerDelay,
                    },
                },
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

interface StaggerItemProps {
    children: React.ReactNode;
    className?: string;
    direction?: "left" | "right" | "top" | "bottom" | "scale";
}

export function StaggerItem({
    children,
    className,
    direction = "bottom",
}: StaggerItemProps) {
    const variants = {
        left: { x: -30, opacity: 0 },
        right: { x: 30, opacity: 0 },
        top: { y: -30, opacity: 0 },
        bottom: { y: 30, opacity: 0 },
        scale: { scale: 0.8, opacity: 0 },
    };

    return (
        <motion.div
            variants={{
                hidden: variants[direction],
                visible: { x: 0, y: 0, scale: 1, opacity: 1 },
            }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
