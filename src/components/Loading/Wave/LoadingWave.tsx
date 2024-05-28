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
  z-index: 3000;
`;

const WaveWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const WaveDot = styled(motion.div)`
  width: 1rem;
  height: 1rem;
  background: #000;
  border-radius: 50%;
`;

const waveContainerVariants = {
    start: { opacity: 1 },
    end: { opacity: 0, transition: { duration: 0.5, delay: 1.5 } }
};

const waveDotVariants = {
    start: { y: "0%" },
    end: {
        y: ["0%", "-100%", "0%"],
        transition: {
            duration: 1,
            repeat: Infinity,
            ease: "easeInOut",
            staggerChildren: 0.1
        }
    }
};

const LoadingWave = () => {
    return (
        <LoadingContainer
            variants={waveContainerVariants}
            initial="start"
            animate="end"
        >
            <WaveWrapper>
                <WaveDot variants={waveDotVariants} />
                <WaveDot variants={waveDotVariants} />
                <WaveDot variants={waveDotVariants} />
                <WaveDot variants={waveDotVariants} />
                <WaveDot variants={waveDotVariants} />
            </WaveWrapper>
        </LoadingContainer>
    );
};

export default LoadingWave;
