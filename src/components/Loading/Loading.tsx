"use client"
import { motion } from 'framer-motion';
import StyledLoading from './Loading.style';
const loadingContainerVariants = {
    initial: { opacity: 1 },
    animate: { opacity: 0, transition: { duration: 0.5, delay: 1.5 } }
};

const loadingCircleVariants = {
    initial: { scale: 1 },
    animate: { scale: [1, 1.5, 1], transition: { duration: 0.6, repeat: Infinity } }
};
const Loading = () => {
    return (
        <StyledLoading
            variants={loadingContainerVariants}
            initial="initial"
            animate="animate"
        >
            <motion.div className='loading-spinner'></motion.div>
            {/* <motion.div className='loading-circle'
                variants={loadingCircleVariants}
            />
            <motion.div className='loading-circle'
                variants={loadingCircleVariants}
            />
            <motion.div className='loading-circle'
                variants={loadingCircleVariants}
            /> */}
        </StyledLoading>

    );
}

export default Loading