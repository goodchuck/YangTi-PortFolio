// lib/animations.ts
import { Variants } from "framer-motion";

export const defaultVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
};

// export const fadeVariants = {
//   initial: { opacity: 0 },
//   animate: { opacity: 1 },
//   exit: { opacity: 0 },
// };

export const fadeVariants: Variants = {
    initial: {
        opacity: 0,
        y: 20,
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1, // 애니메이션 지속 시간 2초로 설정
        },
    },
    exit: {
        opacity: 0,
        y: -20,
        transition: {
            duration: 1, // 애니메이션 지속 시간 2초로 설정
        },
    },
};

export const slideVariants = {
    initial: { x: "100%", opacity: 0 },
    animate: { x: "0%", opacity: 1 },
    exit: { x: "-100%", opacity: 0 },
};

export const scaleVariants = {
    initial: { scale: 0.8, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    exit: { scale: 0.8, opacity: 0 },
};

export const rotateVariants = {
    initial: { rotate: 90, opacity: 0 },
    animate: { rotate: 0, opacity: 1 },
    exit: { rotate: -90, opacity: 0 },
};

export const paintVariants: Variants = {
    initial: {
        clipPath: "circle(0% at 0% 100%)",
    },
    animate: {
        clipPath: "circle(150% at 0% 100%)",
        transition: {
            duration: 1,
            ease: "easeInOut",
        },
    },
    exit: {
        clipPath: "circle(0% at 0% 100%)",
        transition: {
            duration: 1,
            ease: "easeInOut",
        },
    },
};

export const contentVariants: Variants = {
    hidden: {
        opacity: 0,
        y: 20,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
            ease: "easeOut",
        },
    },
};
