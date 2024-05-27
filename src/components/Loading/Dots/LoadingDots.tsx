// src/components/Loading/Loading.tsx
import styled from 'styled-components';
import { motion } from 'framer-motion';

const LoadingContainer = styled(motion.div)`
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
`;

const DotsWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const Dot = styled(motion.div)`
  width: 1rem;
  height: 1rem;
  background: #000;
  border-radius: 50%;
`;

const loadingContainerVariants = {
    start: { opacity: 1 },
    end: { opacity: 0, transition: { duration: 0.5, delay: 1.5 } }
};

const dotVariants = {
    start: { y: "0%" },
    end: {
        y: ["0%", "100%", "0%"],
        transition: {
            duration: 0.6,
            repeat: Infinity,
            ease: "easeInOut",
            staggerChildren: 0.2
        }
    }
};

const LoadingDots = () => {
    return (
        <LoadingContainer
            variants={loadingContainerVariants}
            initial="start"
            animate="end"
        >
            <DotsWrapper>
                <Dot variants={dotVariants} />
                <Dot variants={dotVariants} />
                <Dot variants={dotVariants} />
            </DotsWrapper>
        </LoadingContainer>
    );
};

export default LoadingDots;
