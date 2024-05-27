"use client"

import { Flex } from "antd"
import { StyledHeader } from "./StyledHeader"
import { LayoutHandle } from "@/containers/ForwardRefContainer/ForwardRefContainer";
import { useEffect } from "react";
import { useScrollStore } from "@/stores/useScrollStore";
interface Props {
    // refs: {
    //     firstRef: React.RefObject<LayoutHandle>;
    //     aboutMeRef: React.RefObject<LayoutHandle>;
    //     archiveRef: React.RefObject<LayoutHandle>;
    //     experienceRef: React.RefObject<LayoutHandle>;
    //     skillsRef: React.RefObject<LayoutHandle>;
    //     projectsRef: React.RefObject<LayoutHandle>;
    // };
    refs: React.RefObject<LayoutHandle>[];
}
export const Header = ({ refs }: Props) => {
    const { setCurrentSection } = useScrollStore();
    // const { firstRef, aboutMeRef, archiveRef, experienceRef, skillsRef, projectsRef } = refs;

    // const scrollToRef = (ref: React.RefObject<HTMLDivElement | LayoutHandle>) => {
    //     if (ref !== projectsRef) {
    //         ref.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    //     }
    //     else {
    //         ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    //     }
    // };

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
                    <div onClick={() => setCurrentSection(2)}>Archive</div>
                    <div onClick={() => setCurrentSection(3)}>Experience</div>
                    <div onClick={() => setCurrentSection(4)}>Skills</div>
                    <div onClick={() => setCurrentSection(5)}>Projects</div>
                    {/* <div onClick={() => {
                        console.log("클릭", firstRef.current)
                        firstRef.current?.scrollIntoView()

                    }}>Typed</div>
                    <div onClick={() => scrollToRef(aboutMeRef)}>About me</div>
                    <div onClick={() => scrollToRef(archiveRef)}>Archive</div>
                    <div onClick={() => scrollToRef(experienceRef)}>Experience</div>
                    <div onClick={() => scrollToRef(skillsRef)}>Skills</div>
                    <div onClick={() => scrollToRef(projectsRef)}>Projects</div> */}
                </Flex>
            </Flex>
        </StyledHeader>
    )
}