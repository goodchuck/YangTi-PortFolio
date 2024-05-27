"use client";

import { forwardRef, useImperativeHandle, useRef } from "react";
import { StyledForwardRefContainer } from "./ForwardRefContainer.style";

interface LayoutProps {
    children: React.ReactNode;
    className?: string;
}

export interface LayoutHandle {
    scrollToTop: () => void;
    scrollIntoView: () => void;
    scrollHeight?: number;
    clientHeight?: number;

}

const ForwardRefLayoutV1 = forwardRef<LayoutHandle, LayoutProps>(({ children, className }, ref) => {
    const layoutRef = useRef<HTMLDivElement>(null);

    useImperativeHandle(ref, () => ({
        scrollToTop: () => {
            layoutRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
        },
        scrollIntoView: () => {
            console.log("이동함")
            layoutRef.current?.scrollIntoView({ 'behavior': 'smooth' });
        },
        get scrollHeight() {
            return layoutRef.current?.scrollHeight ?? 0;
        },
        get clientHeight() {
            return layoutRef.current?.clientHeight ?? 0;
        }
    }))
    return (
        <StyledForwardRefContainer ref={layoutRef} className={className}>
            {children}
        </StyledForwardRefContainer>
    )
})

ForwardRefLayoutV1.displayName = 'Layout';

export default ForwardRefLayoutV1;