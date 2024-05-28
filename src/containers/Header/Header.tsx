"use client"

import { Flex } from "antd"
import { StyledHeader } from "./StyledHeader"
import { LayoutHandle } from "@/containers/ForwardRefContainer/ForwardRefContainer";
import { useEffect } from "react";
import { useScrollStore } from "@/stores/useScrollStore";
interface Props {
    refs: React.RefObject<LayoutHandle>[];
}
export const Header = ({ refs }: Props) => {
    const { setCurrentSection } = useScrollStore();

    useEffect(() => {
        console.log(refs);
    }, [refs])

    return (
        <StyledHeader>
            <Flex className="main-container" align="center" justify="space-between">
                <div className="header-title">
                    YTH Portfolio
                </div>
                {/* 목차들 */}
                <Flex gap={'middle'} className="list-container">
                    <div onClick={() => setCurrentSection(0)}>Intro</div>
                    <div onClick={() => setCurrentSection(1)}>About-Me</div>
                    {/* <div onClick={() => setCurrentSection(2)}>Archive</div> */}
                    <div onClick={() => setCurrentSection(2)}>Experience</div>
                    <div onClick={() => setCurrentSection(3)}>Skills</div>
                    <div onClick={() => setCurrentSection(4)}>Projects</div>
                </Flex>
            </Flex>
        </StyledHeader>
    )
}