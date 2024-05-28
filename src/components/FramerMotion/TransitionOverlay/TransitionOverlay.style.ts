import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledTransitionOverlay = styled(motion.div)`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(255, 165, 0, 1); // 물감 색상 (예: 오렌지)
    z-index: 1000;
    pointer-events: none;
`;
