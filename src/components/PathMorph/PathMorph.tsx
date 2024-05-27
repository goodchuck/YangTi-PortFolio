"use client";

// src/components/PathMorph/PathMorph.tsx
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { star, heart, hand, plane, lightning, note } from "./paths";
import { getIndex, useFlubber } from "./use-flubber";
const paths = [lightning, hand, plane, heart, note, star, lightning];
const colors = [
    "#00cc88",
    "#0099ff",
    "#8855ff",
    "#ff0055",
    "#ee4444",
    "#ffcc00",
    "#00cc88"
];

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background: #f0f0f0;
`;

const MorphSVG = styled(motion.svg)`
  width: 300px;
  height: 300px;
`;


const PathMorph = () => {
    const [pathIndex, setPathIndex] = useState(0);
    const progress = useMotionValue(pathIndex);
    const fill = useTransform(progress, paths.map(getIndex), colors);
    const path = useFlubber(progress, paths);

    useEffect(() => {
        const animation = animate(progress, pathIndex, {
            duration: 0.8,
            ease: "easeInOut",
            onComplete: () => {
                if (pathIndex === paths.length - 1) {
                    progress.set(0);
                    setPathIndex(1);
                } else {
                    setPathIndex(pathIndex + 1);
                }
            }
        });

        return () => animation.stop();
    }, [pathIndex]);

    return (
        <svg width="400" height="400">
            <g transform="translate(10 10) scale(17 17)">
                <motion.path fill={fill} d={path} />
            </g>
        </svg>
    );
};

export default PathMorph;
