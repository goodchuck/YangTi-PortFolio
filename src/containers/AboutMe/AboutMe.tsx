"use client";

import { CalendarOutlined, EditOutlined, EnvironmentOutlined, MailOutlined, PhoneOutlined, UserOutlined } from "@ant-design/icons"
import { Avatar, Badge, Card, Col, Descriptions, DescriptionsProps, Flex, Row } from "antd"
import { StyledAboutMe } from "./AboutMe.style";
import ThreeScene from "@/components/ThreeScene/ThreeScene";
import ArchivingV2 from "../Archiving/ArchivingV2/ArchivingV2";

function AboutMe() {


    return (
        <StyledAboutMe className="forward-ref-container__container">

            <div className="forward-ref-container__title">ABOUT ME</div>
            <div className="aboutme-container">
                <ThreeScene></ThreeScene>
                <div className="aboutme-container__left">
                    <ArchivingV2></ArchivingV2>
                </div>
                <div className="aboutme-container__center">
                    <p><b>아래 캐릭터는 Three.js 로 구현한 프로필 캐릭터입니다!</b></p>
                </div>
                <div className="aboutme-container__right">
                    <div className="aboutme-container__right__container">
                        <h1>모든 세상을 개발화 하려는 양태현입니다!</h1>
                        <div className="innerContainer">
                            <p>&nbsp;</p>
                            <p>3년차 프론트엔드 개발자입니다!</p>
                            <p>&nbsp;</p>
                            <p><b>개발</b>, <b>AI</b> <b>자동화</b>, <b>웹크롤링</b>, <b>알고리즘</b>에 관심이 많은 개발자입니다!</p>
                            <p>&nbsp;</p>
                            <p>사람들에게 보다 더 나은 경험을 주고싶어 개발자가 되었습니다!</p>
                            <p>&nbsp;</p>
                            <p>새로운 기술을 시도하는 것을 좋아하고 세상의 돌아가는 일의 자동화 및 고도화하는 것을 좋아합니다!</p>
                            <p>&nbsp;</p>
                            <p>자동화 및 고도화를 수행하기위해 세상을 이해하고 구현하는 알고리즘도 공부를 하고있습니다!</p>
                            <p>&nbsp;</p>
                            <p>주로 쓰는 기술 스택은 : Next.js, React, Three.js 입니다!</p>
                        </div>
                    </div>

                </div>

            </div>
        </StyledAboutMe >
    )
}

export default AboutMe