"use client"
import Image from "next/image";
import styles from "./page.module.css";
import { Col, Divider, Flex, Row } from "antd";
import { StyledMain } from "./_component/Styledmain";
import { Header } from "./_component/Header";
import { CalendarOutlined, EditOutlined, EnvironmentOutlined, MailOutlined, PhoneOutlined, UserOutlined } from "@ant-design/icons";
import { SkillComponent } from "./_component/SkillComponent";
import { Project, ProjectCard } from "./_component/project/ProjectCard";
import { faker } from "@faker-js/faker"
console.log("isProd?", process.env.NODE_ENV, process.env.NEXT_PUBLIC_BASE_URL);
const projects: Project[] = [
  {
    isPort: true,
    title: "YangGPT",
    description: '2024 / 03 (1인 개발)',
    outline: `OpenAI를 활용해 챗봇 및 여러 기능을 테스트해본 사이트입니다.
    AI의 시대가 올수 있음에 따라 시장 조사 및 프론트로써의 활용을 하기위해 제작하게 되었습니다.

    Next.js를 이용해 제작을 하였고 프론트엔드개발자이므로 백엔드는 간소화해서 Vercel의 Postgres를 이용하였습니다.

    배포는 AWS의 EC2를 이용하였고, let's Encript를 통해 https화도 같이 배워 사용하였습니다.`,
    link: 'https://yangti.site/',
    images: [faker.image.urlLoremFlickr(), faker.image.urlLoremFlickr()],
    main: `OpenAI를 활용 \n
    `,
    git: 'https://github.com/goodchuck/yangGPT',
    url: 'https://yangti.site/',
    Frontend: 'Next.js / TypeScript',
    Backend: 'Next.js / Vercel',
    Database: 'Postgres',
    Deployment: 'AWS'
  }
]

export default function Home() {
  return (
    <StyledMain>
      <Header></Header>
      {/* 자기소개 */}
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
      {/* About Me */}
      <Flex className="container aboutme" vertical gap={'middle'} align="center">
        <div className="header">ABOUT ME</div>
        <Flex vertical gap={'middle'} style={{ width: '70%' }}>
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
      </Flex>

      {/* Skills */}
      <Flex className="container aboutme" vertical gap={'middle'} align="center" style={{ backgroundColor: 'yellow' }}>
        <div className="header">Skills</div>
        <Flex vertical gap={'middle'}>
          {/* 프론트엔드 */}
          <Flex vertical>
            <div>Front-End</div>
            <Flex gap={'middle'} style={{ backgroundColor: 'white' }}>
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
          <Flex vertical>
            <div>상태관리 및 라이브러리</div>
            <Flex gap={'middle'} style={{ backgroundColor: 'white' }}>
              <SkillComponent src='https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1675253316/noticon/gg2mfsvpu2aje4f8rpuc.png' text='zustand' />
              <SkillComponent src='https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1570521380/noticon/lbpvcvhvvszxrlu78vnc.png' text='electron' />
              <SkillComponent src='./icons/threedotjs-color.svg' text='THREE.js' />
              <SkillComponent src='./icons/chartdotjs-color.svg' text='Chart.js' />
            </Flex>
          </Flex>

          {/* Depolyment */}
          <Flex vertical>
            <div>Deployment</div>
            <Flex gap={'middle'} style={{ backgroundColor: 'white' }}>
              <SkillComponent src='https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1566777755/noticon/yfmwxv8nhnr5aqaxhxpg.png' text='AWS' />
            </Flex>
          </Flex>

          {/* AI */}
          <Flex vertical>
            <div>AI</div>
            <Flex gap={'middle'} style={{ backgroundColor: 'white' }}>
              <SkillComponent src='./icons/openai-color.svg' text='OpenAI' />
            </Flex>
          </Flex>
          <Flex vertical>
            <div>ETC</div>
            <Flex gap={'middle'} style={{ backgroundColor: 'white' }}>
              <SkillComponent src='https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1567128822/noticon/osiivsvhnu4nt8doquo0.png' text='Git' />
              <SkillComponent src='https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1640982247/noticon/tpvr26zp02angin4t0jv.png' text='Figma' />
              <SkillComponent src='https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1566913651/noticon/rj9nd1qsykajfusei65f.jpg' text='Slack' />
              <SkillComponent src='https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1640152045/noticon/albswwsjaaxvxbyhmwig.png' text='Discord' />
            </Flex>
          </Flex>
        </Flex>
      </Flex>

      {/* ARCHIVING */}
      <Flex className="container" vertical gap={'middle'} align="center" style={{ backgroundColor: 'black' }}>
        <div className="header" style={{ color: 'white' }}>개인 기록</div>

        {/* Card들 */}
        <Flex gap={'middle'}>
          <Flex vertical gap={'middle'} style={{ backgroundColor: 'white', borderRadius: '0.5rem', padding: 10 }}>
            <Flex gap={'middle'} align="center">
              <Image src={'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1567128822/noticon/osiivsvhnu4nt8doquo0.png'} width={64} height={64} alt="github"></Image>
              <p>GitHub</p>
            </Flex>
            <div>링크 : https://github.com/goodchuck</div>
            <div>
              개인 소스코드 저장장소
            </div>
          </Flex>

          <Flex vertical gap={'middle'} style={{ backgroundColor: 'white', borderRadius: '0.5rem', padding: 10 }}>
            <Flex gap={'middle'} align="center">
              <Image src={'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1566778642/noticon/kjaaizycfgz017qxvlnu.png'} width={64} height={64} alt="github"></Image>
              <p>Notion</p>
            </Flex>
            <div>링크 : https://www.notion.so/Skills-78f0b8ca2217494ba83b17e8333cdc55</div>
            <div>
              개인 개발 이슈들 정리한 곳!
            </div>
          </Flex>
        </Flex>

      </Flex>

      {/* Projects */}
      <Flex className="container" vertical gap={'middle'} align="center" style={{ backgroundColor: '#6cdab2' }}>
        <div className="header" style={{ color: 'white' }}>PROJECTS</div>
        <Flex vertical gap={'middle'} align="center" style={{ width: '70%' }}>
          {projects.map((obj, index) => (<ProjectCard key={index} {...obj} />))}

        </Flex>
      </Flex>
    </StyledMain>

  );
}
