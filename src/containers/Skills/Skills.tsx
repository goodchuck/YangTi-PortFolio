"use client";

import { Flex } from "antd";
import { SkillComponent } from "@/app/_component/SkillComponent";
import { StyledSkills } from "./Skills.style";

const Skills = () => {

    return (
        <StyledSkills className="forward-ref-container__container" >
            <div className="forward-ref-container__title">Skills</div>
            <Flex vertical gap={'middle'} className="container" >
                {/* 프론트엔드 */}
                <Flex vertical gap={'middle'} className="skills-container">
                    <div className="title"><b>Front-End</b></div>
                    <Flex gap={'large'} className="skill-row">
                        <SkillComponent src='./icons/html5-color.svg' text='HTML5' />
                        <SkillComponent src='./icons/css3-color.svg' text='CSS3' />
                        <SkillComponent src='./icons/javascript-color.svg' text='JS' />
                        <SkillComponent src='./icons/typescript-color.svg' text='TS' />
                        <SkillComponent src='./icons/react-color.svg' text='React' />

                        <SkillComponent src='./icons/nextdotjs-color.svg' text='Next.js' />
                        <SkillComponent src='./icons/reactquery-color.svg' text='ReactQuery' />
                        <SkillComponent src='https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1566557264/noticon/eyhvbmh82nhdoydl4j2a.png' text='Node.js' />
                        <SkillComponent src='https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1568851518/noticon/lwj3hr9v1yoheimtwc1w.png' text='Styled-Components' />
                    </Flex>
                </Flex>

                {/* 상태관리 */}
                <Flex vertical gap={'middle'} className="skills-container">
                    <div className="title"><b>상태관리 및 라이브러리</b></div>
                    <Flex gap={'large'} className="skill-row">
                        <SkillComponent src='https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1675253316/noticon/gg2mfsvpu2aje4f8rpuc.png' text='zustand' />
                        <SkillComponent src='https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1570521380/noticon/lbpvcvhvvszxrlu78vnc.png' text='electron' />
                        <SkillComponent src='./icons/threedotjs-color.svg' text='THREE.js' />
                        <SkillComponent src='./icons/chartdotjs-color.svg' text='Chart.js' />
                    </Flex>
                </Flex>

                {/* Depolyment */}
                <Flex vertical gap={'middle'} className="skills-container">
                    <div className="title"><b>Deployment</b></div>
                    <Flex gap={'large'} className="skill-row">
                        <SkillComponent src='https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1566777755/noticon/yfmwxv8nhnr5aqaxhxpg.png' text='AWS' />
                        <SkillComponent src='https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1679312641/noticon/rx8rni4npifrbo9ckxmt.png' text='Vercel' />
                    </Flex>
                </Flex>

                {/* AI */}
                <Flex vertical gap={'middle'} className="skills-container">
                    <div className="title"><b>AI</b></div>
                    <Flex gap={'large'} className="skill-row">
                        <SkillComponent src='./icons/openai-color.svg' text='OpenAI' />
                    </Flex>
                </Flex>
                <Flex vertical gap={'middle'} className="skills-container">
                    <div className="title"><b>ETC</b></div>
                    <Flex gap={'large'} className="skill-row">
                        <SkillComponent src='https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1567128822/noticon/osiivsvhnu4nt8doquo0.png' text='Git' />
                        <SkillComponent src='https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1640982247/noticon/tpvr26zp02angin4t0jv.png' text='Figma' />
                        <SkillComponent src='https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1566913651/noticon/rj9nd1qsykajfusei65f.jpg' text='Slack' />
                        <SkillComponent src='https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1640152045/noticon/albswwsjaaxvxbyhmwig.png' text='Discord' />
                    </Flex>
                </Flex>
            </Flex>
        </StyledSkills>
    )
}

export default Skills