"use client"
import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

type Props = {
    strings: string[];
    size?: string;
}
export const TypingEffect = ({ strings, size = '1rem' }: Props) => {
    const el = useRef<HTMLSpanElement>(null);
    const typed = useRef<Typed | null>(null);

    useEffect(() => {
        const options = {
            strings,
            typeSpeed: 50,
            backSpeed: 25,
            loop: false,
            showCursor: false,
        };

        if (el.current) {
            typed.current = new Typed(el.current, options);
        }

        return () => {
            if (typed.current) {
                typed.current.destroy();
            }
        };
    }, []);

    return <span ref={el} style={{ whiteSpace: 'pre', fontSize: size }} />;
}