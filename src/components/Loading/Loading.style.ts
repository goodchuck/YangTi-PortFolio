import styled from "styled-components";
import { motion } from "framer-motion";
const StyledLoading = styled(motion.div)`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(255, 255, 255, 1);
    z-index: 1000;

    .loading-circle {
        display: block;
        width: 1rem;
        height: 1rem;
        margin: 0 0.5rem;
        background: black;
        border-radius: 50%;
    }

    .loading-spinner {
        width: 4rem;
        height: 4rem;
        border: 0.5rem solid rgba(0, 0, 0, 0.1);
        border-top: 0.5rem solid #000;
        border-radius: 50%;
        animation: spin 1s linear infinite;

        @keyframes spin {
            0% {
                transform: rotate(0deg);
            }
            100% {
                transform: rotate(360deg);
            }
        }
    }
`;
export default StyledLoading;
