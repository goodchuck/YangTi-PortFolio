"use client"
import { StyledMain } from "./MainPage.style";
import { Header } from "../Header/Header";
import { Component, useEffect, useRef, useState } from "react";
import useScrollSection from "@/hooks/useScrollSection";
import ScrollSection from "@/components/ScrollSection";
import Intro from "@/containers/Intro/IntroContainer";
import ForwardRefLayoutV1, { LayoutHandle } from "@/containers/ForwardRefContainer/ForwardRefContainer";
import AboutMe from "@/containers/AboutMe/AboutMe";
import Archiving from "@/containers/Archiving/Archiving";
import Experience from "@/containers/Experience/Experience";
import Skills from "@/containers/Skills/Skills";
import Projects from "@/containers/Projects/Projects";
import React from "react";

const sections = [
    { component: Intro, ref: React.createRef<LayoutHandle>() },
    { component: AboutMe, ref: React.createRef<LayoutHandle>() },
    // { component: Archiving, ref: React.createRef<LayoutHandle>() },
    { component: Experience, ref: React.createRef<LayoutHandle>() },
    { component: Skills, ref: React.createRef<LayoutHandle>() },
    { component: Projects, ref: React.createRef<LayoutHandle>() },
]

export default function MainPage() {
    const currentSection = useScrollSection(sections.length);


    useEffect(() => {
        console.log(sections);
    }, [sections])

    return (
        <StyledMain>
            <Header refs={sections.map(section => section.ref)}></Header>
            {sections.map(({ component: Component, ref }, index) => (
                <ScrollSection key={index} isActive={index === currentSection}>
                    <ForwardRefLayoutV1 ref={ref} className={`section-${index}`}>
                        <Component />
                    </ForwardRefLayoutV1>
                </ScrollSection>
            ))}

        </StyledMain>

    );
}
