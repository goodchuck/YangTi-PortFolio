"use client";

import { CalendarOutlined, EditOutlined, EnvironmentOutlined, MailOutlined, PhoneOutlined, UserOutlined } from "@ant-design/icons"
import { Col, Flex, Row } from "antd"
import { StyledAboutMe } from "./AboutMe.style";


function AboutMe() {
    return (
        <StyledAboutMe className="forward-ref-container__container">
            <div className="forward-ref-container__title">ABOUT ME</div>

            <Flex vertical gap={'middle'} className="aboutme__innercontainer">
                <h1>안녕하세요! 프론트엔드개발자 양태현이라고 합니다!</h1>
                <div className="innerContainer">
                    <p>3년차 프론트엔드 개발자입니다!</p>
                    <p>&nbsp;</p>
                    <p><b>프론트엔드</b>와 <b>AI</b> 그리고 <b>자동화</b>그리고 <b>알고리즘</b>에 관심이 많은 개발자입니다!</p>
                    <p>&nbsp;</p>
                    <p>새로운 기술을 시도하는 것을 좋아하고 세상의 돌아가는 일의 자동화 및 고도화하는 것을 좋아합니다!</p>
                    <p>&nbsp;</p>
                    <p>자동화 및 고도화를 수행하기위해 세상을 이해하고 구현하는 알고리즘도 공부를 하고있습니다!</p>
                    <p>&nbsp;</p>
                    <p>그리고 사용자에게 좋은 경험을 전달하고싶어 프론트엔드 기술도 열심히 공부하고있습니다!</p>
                </div>
            </Flex>

            <Flex vertical gap={'middle'} className="aboutme__innercontainer">
                <Row>
                    <Col span={8}>
                        <Flex style={{ width: '100%' }} gap={'middle'}>
                            <UserOutlined className="icon" />

                            <Flex vertical>
                                <div className="top">이름</div>
                                <div className="bottom">양태현</div>
                            </Flex>
                        </Flex>
                    </Col>
                    <Col span={8}>
                        <Flex style={{ width: '100%' }} gap={'middle'}>
                            <CalendarOutlined className="icon" />
                            <Flex vertical>
                                <div className="top">생년월일</div>
                                <div className="bottom" >96 / 11 / 28</div>
                            </Flex>
                        </Flex>
                    </Col>
                    <Col span={8}>
                        <Flex style={{ width: '100%' }} gap={'middle'}>
                            <EnvironmentOutlined className='icon' />

                            <Flex vertical>
                                <div className="top">주소지</div>
                                <div className="bottom">인천광역시 연수구</div>
                            </Flex>
                        </Flex>
                    </Col>
                </Row>
                <Row>
                    <Col span={8}>
                        <Flex style={{ width: '100%' }} gap={'middle'}>
                            <PhoneOutlined className="icon" />
                            <Flex vertical>
                                <div className="top">연락처</div>
                                <div className="bottom">010-2894-5605</div>
                            </Flex>
                        </Flex>
                    </Col>
                    <Col span={8}>
                        <Flex style={{ width: '100%' }} gap={'middle'}>
                            <MailOutlined className="icon" />
                            <Flex vertical>
                                <div className="top">이메일</div>
                                <div className="bottom">goodchuck852@gmail.com</div>
                            </Flex>
                        </Flex>
                    </Col>
                    <Col span={8}>
                        <Flex style={{ width: '100%' }} gap={'middle'}>
                            <EditOutlined className="icon" />
                            <Flex vertical>
                                <div className="top">학력</div>
                                <div className="bottom">인하공전 컴퓨터시스템과</div>
                            </Flex>
                        </Flex>
                    </Col>
                </Row>
            </Flex>

            <Flex vertical justify="center">
                <div>
                    문의는 위 연락처 또는 이메일로 부탁드립니다!
                </div>
            </Flex>
        </StyledAboutMe>
    )
}

export default AboutMe