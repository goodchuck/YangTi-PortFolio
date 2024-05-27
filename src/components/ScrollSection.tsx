
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ScrollSectionProps {
    children: React.ReactNode;
    isActive: boolean;
}

const ScrollSection: React.FC<ScrollSectionProps> = ({ children, isActive }) => {
    return (
        <AnimatePresence>
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
        </AnimatePresence>
    )
}

export default ScrollSection;