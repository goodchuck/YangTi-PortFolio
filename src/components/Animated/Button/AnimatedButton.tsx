"use client";
import React from "react";
import { StyledAnimatedButton } from "./AnimatedButton.style";

const buttonVariants = {
    hover: {
        scale: 1.1,
        transition: {
            duration: 0.3,
            yoyo: Infinity, // yoyo will make the animation reverse
        },
    },
    tap: {
        scale: 0.9,
    },
};

interface AnimatedButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    url?: string;
}

const AnimatedButton = ({ children, onClick, url }: AnimatedButtonProps) => {
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        // 내부 요소 클릭 방지
        if ((event.target as HTMLElement).tagName !== 'BUTTON') return;

        // 새 탭으로 URL 열기
        if (url) {
            window.open(url, '_blank');
        }


        // 추가 클릭 이벤트 핸들러 호출
        if (onClick) {
            onClick();
        }
    }

    return (
        <StyledAnimatedButton
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            onClick={handleClick}
        >
            {children}
        </StyledAnimatedButton>
    )
}

export default AnimatedButton