"use client"
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import TransitionOverlay from './FramerMotion/TransitionOverlay/TransitionOverlay';
import { paintVariants, contentVariants } from '@/libs/framer-motion/animations';
interface ScrollSectionProps {
    children: React.ReactNode;
    isActive: boolean;
}

const ScrollSection: React.FC<ScrollSectionProps> = ({ children, isActive }) => {
    const [showOverlay, setShowOverlay] = useState(true);
    const [showChildren, setShowChildren] = useState(false);
    return (
        <>
            <AnimatePresence mode='wait'>
                {isActive && (
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -50 }}
                        transition={{ duration: 0.5 }}
                        style={{ position: 'absolute', width: '100%', top: '72px', height: 'calc(100% - 72px)' }}
                    >
                        {children}
                    </motion.div>
                )}
                {/* {showOverlay && (
                    <TransitionOverlay
                        variants={paintVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        onAnimationComplete={() => {
                            setShowOverlay(false);
                            setShowChildren(true);
                        }}
                    />
                )} */}
            </AnimatePresence>
            {/* {
                showChildren && (
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={contentVariants}
                    >
                        {children}
                    </motion.div>
                )
            } */}
        </>


    )
}

export default ScrollSection;