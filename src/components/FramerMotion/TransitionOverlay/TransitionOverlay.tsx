"use client";

import React from "react";
import { motion, MotionProps } from 'framer-motion'
import { StyledTransitionOverlay } from "./TransitionOverlay.style";

interface TransitionOverlayProps extends MotionProps { }

const TransitionOverlay = (props: TransitionOverlayProps) => {
    return (
        <StyledTransitionOverlay
            {...props}
        />
    )
}
export default TransitionOverlay