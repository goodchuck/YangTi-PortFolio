"use client"
import Image from "next/image";
import styles from "./page.module.css";
import { Col, Divider, Flex, Row } from "antd";
import { StyledMain } from "./_component/Styledmain";
import { Header } from "./_component/Header";

export default function Home() {
  return (
    <StyledMain>
      <Header></Header>
      <Flex vertical className="main-container" justify="center" align="center">
        <Flex className="title-box" justify="center" align="center" vertical>
          <div>양태현 <br /></div>
          <div>프론트엔드 개발자 포트폴리오</div>
        </Flex>
        <Divider />
        <Flex>
          <Flex className="text-box" vertical justify="center" align="center">
            <div>안녕하세요?</div>
            <div>AI와 프론트엔드 기술에 관심이 많은 사람입니다!</div>
            <div>언제나 새로운기술에 도전하고 싶습니다!</div>

          </Flex>
        </Flex>
      </Flex>
      <Flex className="container" vertical gap={'middle'} justify="center" align="center">
        <h1>ABOUT ME</h1>
        <Flex vertical gap={'middle'} style={{ width: '100%' }}>
          <Row>
            <Col span={8}>
              <Flex style={{ width: '100%' }} justify="space-between">
                <div>아이콘</div>
                <Flex vertical>
                  <div>위쪽</div>
                  <div>아래쪽</div>
                </Flex>
              </Flex>
            </Col>
            <Col span={8}>
              <Flex style={{ width: '100%' }} justify="space-between">
                <div>아이콘</div>
                <Flex vertical>
                  <div>위쪽</div>
                  <div>아래쪽</div>
                </Flex>
              </Flex>
            </Col>
            <Col span={8}>
              <Flex style={{ width: '100%' }} justify="space-between">
                <div>아이콘</div>
                <Flex vertical>
                  <div>위쪽</div>
                  <div>아래쪽</div>
                </Flex>
              </Flex>
            </Col>
          </Row>
          <Row>
            <Col span={8}>
              <Flex style={{ width: '100%' }} justify="space-between">
                <div>아이콘</div>
                <Flex vertical>
                  <div>위쪽</div>
                  <div>아래쪽</div>
                </Flex>
              </Flex>
            </Col>
            <Col span={8}>
              <Flex style={{ width: '100%' }} justify="space-between">
                <div>아이콘</div>
                <Flex vertical>
                  <div>위쪽</div>
                  <div>아래쪽</div>
                </Flex>
              </Flex>
            </Col>
            <Col span={8}>
              <Flex style={{ width: '100%' }} justify="space-between">
                <div>아이콘</div>
                <Flex vertical>
                  <div>위쪽</div>
                  <div>아래쪽</div>
                </Flex>
              </Flex>
            </Col>
          </Row>
        </Flex>

      </Flex>
    </StyledMain>

  );
}
