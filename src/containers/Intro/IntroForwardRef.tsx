"use client";
import { TypingEffect } from "@/app/_component/TypingEffect";
import { forwardRef, useImperativeHandle, useRef } from "react";

interface IntroProps {
}

const Intro = forwardRef<HTMLDivElement, IntroProps>(({ }, ref) => {
    const localRef = useRef<HTMLDivElement>(null);

    // ref를 localRef에 직접 전달
    useImperativeHandle(ref, () => {
        if (localRef.current) {
            return {
                ...localRef.current,
                scrollIntoView: () => {
                    localRef.current?.scrollIntoView({ behavior: 'smooth' });
                },
            };
        }
        return {} as HTMLDivElement;
    });

    return (
        <div className="typer-box" ref={localRef}>
            <TypingEffect strings={[`안녕하세요!`, `프론트엔드 개발자 양태현의 포트폴리오입니다!`]} size="4rem" />
        </div>
    );
});

Intro.displayName = "Intro";

export default Intro;
