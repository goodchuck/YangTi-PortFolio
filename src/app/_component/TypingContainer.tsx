//@ts-nocheck
"use client"

import { useEffect, useState } from "react";

type Props = {
    inputText: string;
    speed?: number;
}
export const TypingContainer = ({ inputText, speed = 100 }: Props) => {
    const [textLines, setTextLines] = useState<string[]>([]);
    const [typingIndex, setTypingIndex] = useState<number>(0);
    // const speed: number = 100; // 타이핑 속도 (milliseconds);

    useEffect(() => {
        const originalText: string = inputText;

        // 입력된 텍스트를 줄바꿈 문자(\n)을 기준으로 나누어 배열로 변환
        const lines: string[] = originalText.split('\n');

        const typingInterval: NodeJS.Timeout = setInterval(() => {
            if (typingIndex < lines.length) {
                // 한 줄씩 타이핑 효과 적용
                setTextLines((prevLines: string[]) => {
                    const newLines = [...prevLines];
                    newLines[typingIndex] += lines[typingIndex][newLines[typingIndex].length];
                    return newLines;
                });
                setTypingIndex((prevIndex: number) => prevIndex + 1);
            } else {
                clearInterval(typingInterval);
            }
        }, speed);


        return () => clearInterval(typingInterval);
    }, [typingIndex])
    return (
        <>
            {textLines.map((line, index) => (
                <p key={index}>{line}</p>
            ))}
        </>

    )
}