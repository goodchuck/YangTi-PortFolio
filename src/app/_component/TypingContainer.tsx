"use client";

import { useEffect, useState } from "react";

type Props = {
    inputText: string;
    speed?: number;
}

export const TypingContainer = ({ inputText, speed = 100 }: Props) => {
    const [textLines, setTextLines] = useState<string[]>([]);
    const [typingIndex, setTypingIndex] = useState<number>(0);

    useEffect(() => {
        // 입력된 텍스트를 줄바꿈 문자(\n)을 기준으로 나누어 배열로 변환
        const lines = inputText.split('\n');
        setTextLines(lines.map(() => "")); // 각 줄에 대한 초기화
        setTypingIndex(0); // 타이핑 인덱스 초기화

        const typingInterval = setInterval(() => {
            if (typingIndex < lines.length) {
                // 한 줄씩 타이핑 효과 적용
                setTextLines(prevLines => {
                    const newLines = [...prevLines];
                    const currentLine = lines[typingIndex];
                    const nextCharIndex = newLines[typingIndex].length;
                    if (nextCharIndex < currentLine.length) {
                        newLines[typingIndex] += currentLine[nextCharIndex];
                    }
                    return newLines;
                });
                if (typingIndex < lines.length - 1 || textLines[typingIndex].length < lines[typingIndex].length) {
                    setTypingIndex(prevIndex => prevIndex + (textLines[typingIndex].length === lines[typingIndex].length ? 1 : 0));
                }
            } else {
                clearInterval(typingInterval);
            }
        }, speed);

        return () => clearInterval(typingInterval);
    }, [inputText, speed]); // inputText와 speed 추가

    return (
        <>
            {textLines.map((line, index) => (
                <p key={index}>{line}</p>
            ))}
        </>
    );
}
