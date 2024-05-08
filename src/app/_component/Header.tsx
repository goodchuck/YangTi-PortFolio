"use client"

import { Flex } from "antd"
import { StyledHeader } from "./StyledHeader"
interface Props {
    refs: {
        firstRef: React.RefObject<HTMLDivElement>;
        aboutMeRef: React.RefObject<HTMLDivElement>;
        archiveRef: React.RefObject<HTMLDivElement>;
        experienceRef: React.RefObject<HTMLDivElement>;
        skillsRef: React.RefObject<HTMLDivElement>;
        projectsRef: React.RefObject<HTMLDivElement>;
    };
}
export const Header = ({ refs }: Props) => {
    const { firstRef, aboutMeRef, archiveRef, experienceRef, skillsRef, projectsRef } = refs;

    const scrollToRef = (ref: React.RefObject<HTMLDivElement>) => {
        if (ref !== projectsRef) {
            ref.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
        else {
            ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }



    };

    return (
        <StyledHeader>
            <Flex className="main-container" align="center" justify="space-between">
                <div className="header-title">
                    YTH Portfolio
                </div>
                {/* 목차들 */}
                <Flex gap={'middle'} className="list-container">
                    <div onClick={() => scrollToRef(firstRef)}>Typed</div>
                    <div onClick={() => scrollToRef(aboutMeRef)}>About me</div>
                    <div onClick={() => scrollToRef(archiveRef)}>Archive</div>
                    <div onClick={() => scrollToRef(experienceRef)}>Experience</div>
                    <div onClick={() => scrollToRef(skillsRef)}>Skills</div>
                    <div onClick={() => scrollToRef(projectsRef)}>Projects</div>
                </Flex>
            </Flex>
        </StyledHeader>
    )
}