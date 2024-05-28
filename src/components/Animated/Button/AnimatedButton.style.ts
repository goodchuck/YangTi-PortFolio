import { motion } from "framer-motion";
import styled from "styled-components";

export const StyledAnimatedButton = styled(motion.button)`
    /* background-color: #6200ee; */
    /* color: white; */
    border: none;
    /* padding: 0 30px 0 30px; */
    font-size: 1rem;
    border-radius: 5px;
    cursor: pointer;
    outline: none;
    display: inline-block;
    transition: background-color 0.3s ease;
    /* pointer-events: none; // 추가: 버튼 자체는 클릭되지 않음 */

    &:hover {
        /* background-color: #3700b3; */
    }

    & > * {
        /* pointer-events: auto; // 추가: 내부 요소들은 클릭 가능 */
        pointer-events: none; // 내부 요소들은 클릭되지 않음
    }
`;
