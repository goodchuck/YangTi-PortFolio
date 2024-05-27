"use client"
import { StyledMain } from "./MainPage.style";
import { Header } from "../Header/Header";
import { Component, useEffect, useRef, useState } from "react";
import useScrollSection from "@/hooks/useScrollSection";
import ScrollSection from "@/components/ScrollSection";
import Intro from "@/containers/Intro/IntroForwardRef";
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
    { component: Archiving, ref: React.createRef<LayoutHandle>() },
    { component: Experience, ref: React.createRef<LayoutHandle>() },
    { component: Skills, ref: React.createRef<LayoutHandle>() },
    { component: Projects, ref: React.createRef<LayoutHandle>() },
]

export default function MainPage() {
    // const [refs, setRefs] = useState<any[]>(projects.filter(v => v.projectId).map(v => v.projectId));



    // const firstRef = useRef<LayoutHandle>(null);
    // const aboutMeRef = useRef<LayoutHandle>(null);
    // const archiveRef = useRef<LayoutHandle>(null);
    // const experienceRef = useRef<LayoutHandle>(null);
    // const skillsRef = useRef<LayoutHandle>(null);
    // const projectsRef = useRef<LayoutHandle>(null);

    const currentSection = useScrollSection(sections.length);

    // const handleLogScrollInfo = () => {
    //     if (firstRef.current) {
    //         console.log(`Scroll Height: ${firstRef.current.scrollHeight}`);
    //         console.log(`Client Height: ${firstRef.current.clientHeight}`);
    //     }
    // };

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
            {/* 자기소개 */}
            {/* <ScrollSection isActive={0 === currentSection}>
                <ForwardRefLayoutV1 ref={firstRef}>
                    <Intro></Intro>
                </ForwardRefLayoutV1>
            </ScrollSection> */}


            {/* About Me */}
            {/* <ScrollSection isActive={1 === currentSection}>
                <ForwardRefLayoutV1 ref={aboutMeRef}>
                    <AboutMe></AboutMe>
                </ForwardRefLayoutV1>

            </ScrollSection> */}
            {/* ARCHIVING */}
            {/* <ScrollSection isActive={2 === currentSection}>
                <ForwardRefLayoutV1 ref={archiveRef}>
                    <Archiving></Archiving>
                </ForwardRefLayoutV1>

            </ScrollSection> */}


            {/* Experience */}
            {/* <ScrollSection isActive={3 === currentSection}>
                <ForwardRefLayoutV1 ref={experienceRef}>
                    <Experience></Experience>
                </ForwardRefLayoutV1>

            </ScrollSection> */}


            {/* Skills */}
            {/* <ScrollSection isActive={4 === currentSection}>
                <ForwardRefLayoutV1 ref={skillsRef}>
                    <Skills></Skills>
                </ForwardRefLayoutV1>
            </ScrollSection> */}



            {/* Projects */}
            {/* <ScrollSection isActive={5 === currentSection} >
                <ForwardRefLayoutV1 ref={projectsRef}>
                    <Projects></Projects>
                </ForwardRefLayoutV1>

            </ScrollSection> */}

        </StyledMain>

    );
}
