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
const projects: Project[] = [
  {
    isPort: true,
    title: "PDF문제 생성기",
    description: '2024. 03 (1인 개발)',
    outline: `OpenAI의 ChatGPT4의 PDF읽기 기능을 이용하여
    사용자가 PDF를 업로드하고 거기서 문제를 만들어주는 기능을 하는 챗봇을 만들었습니다.
    
    Next.js 를 이용하여 개발하였고

    비즈니스모델은 코인충전형을 염두해두었음
    사용자가 로그인을하고 매일 5회의 무료 기회를 가지고 해야하나
    백엔드가 없으므로 비사용자가 매일 5회를 이용하는방식으로 개발하였습니다.
    사용자는 문제를 한번 생성할때마다 1회의 기능을 사용하고 5회 다사용하면 문제를 더 생성할 수 없습니다.
    
    문제가 제대로 생성됬는지 안됬는지를 구분하는 로직이 있으며
    문제가 잘못 생성되었을 시 횟수가 차감되지 않습니다.
    `,
    link: 'https://yangti.site/assistant/chatting/asst_K4r7EXhRTQ0JqewkgZGHkZIV',
    images: [
      './projects/PDFProblem/image1.png',
      './projects/PDFProblem/image2.png',
      './projects/PDFProblem/image3.png',
      './projects/PDFProblem/image4.png'],
    main: `- OpenAI의 언어모델 ChatGPT4를 사용
    - 사용자가 PDF를 업로드하고 문제를 제공받음
    `,
    git: 'https://github.com/goodchuck/yangGPT',
    url: 'https://yangti.site/assistant/chatting/asst_K4r7EXhRTQ0JqewkgZGHkZIV',
    notion: 'https://www.notion.so/PDF-18b2975d21e84d8882454e58bbb40abf?pvs=4',
    Frontend: 'Next.js, TypeScript',
    Backend: '-',
    Database: '-',
    Deployment: 'AWS'
  },
  {
    isPort: true,
    title: "YangGPT",
    description: '2024 / 03 (1인 개발)',
    outline: `OpenAI를 활용해 챗봇 및 여러 기능을 테스트해본 사이트들의 모음집입니다.
    
    AI의 시대가 올수 있음에 따라 시장 조사 및 프론트로써의 활용을 하기위해 제작하게 되었습니다.

    Next.js를 이용해 제작을 하였고 프론트엔드개발자이기 때문에
    백엔드는 간소화해서 Vercel의 Postgres를 이용하였습니다.

    배포는 AWS의 EC2를 이용하였고, let's Encript를 통해 https화도 같이 배워 사용하였습니다.`,
    link: 'https://yangti.site/',
    images: [faker.image.urlLoremFlickr(), faker.image.urlLoremFlickr()],
    main: `OpenAI를 활용
    `,
    git: 'https://github.com/goodchuck/yangGPT',
    url: 'https://yangti.site/',
    Frontend: 'Next.js / TypeScript',
    Backend: 'Next.js / Vercel',
    Database: 'Postgres',
    Deployment: 'AWS'
  },
  {
    isPort: true,
    title: "프론트용 라이브러리 버전별 사용법 가이드",
    description: '2024 / 01 (1인 개발)',
    outline: `개발자라고해서 언제나 최신코드로만 사용할 수 있는 것이 아닙니다.
    최신코드가 아닌것의 정보를 찾는건 제한적일 수 있기 때문에 해당 사이트에 코드를 저장하고
    버전별 사용법을 정리해둠으로써 코드저장소의 역할을 하는 사이트입니다`,
    link: 'https://nextjs-repo-kohl.vercel.app',
    images: [faker.image.urlLoremFlickr(), faker.image.urlLoremFlickr()],
    main: ``,
    git: 'https://github.com/goodchuck/nextjs-repo',
    url: 'https://nextjs-repo-kohl.vercel.app',
    Frontend: 'Next.js / TypeScript',
    Backend: 'Next.js / Vercel',
    Database: '',
    Deployment: 'Vercel'
  },
  {
    isPort: false,
    title: "4S",
    description: '2023 (유지보수 및 기능개발)',
    outline: `해외 사우디에 오픈한 서비스로 (주)도로시에서 하청으로 제작한 사우디의 건설 it솔루션 프로젝트입니다
    해외 지역엔 it솔루션이 고도화가 되어있지 않은경우가 잦아 오프라인으로 이루어져있는 안전 장치들을 온라인으로 고도화가 목적인프로젝트입니다.

    개발 중간에 참여하였으며 건설솔루션의 핵심인 PTW(Permit to Work) 사전작업허가제라는 사전 작업 허가를 위한 안전 확보 방안을 오프라인에서 온라인에서 수행할 수 있게 프론트엔드 개발을 진행 하였습니다.

    `,
    link: 'https://s100-4s.com/login',
    images: [
      './projects/4S/4S-1.png',
      './projects/4S/4S-2.png',
      './projects/4S/4S-3.png',
      './projects/4S/4S-4.png',
      './projects/4S/4S-5.png',
      './projects/4S/4S-6.png',
      './projects/4S/4S-7.png',
      './projects/4S/4S-8.png',
    ],
    main: ``,
    // git: 'https://github.com/goodchuck/nextjs-repo',
    url: 'https://s100-4s.com/login',
    notion: 'https://www.notion.so/4S-ffd586ce5d364c179818d46d492ea57f?pvs=4',
    Frontend: 'React / TypeScript',
    Backend: '',
    Database: '',
    Deployment: 'AWS EC2'
  },
  {
    isPort: false,
    title: "도로시3D어노테이션툴(웹)",
    description: '2023 (유지보수 및 기능 개발)',
    outline: `(주)도로시 재직 시절 진행했던 프로젝트로
    인공지능 자율주행 자동차의 정답데이터를 만들기위한 웹사이트를 구축하였습니다.
    Vanilla JS로 개발 및 Three.js(WebGL)을 이용해 개발하였으며
    입사때부터 "90%이상 혼자 개발" 하였습니다.
    
    위의 사진처럼 5개의 창에서 좌측상단엔 Lidar라는 장비를 통해서 얻은 포인트클라우드 데이터를 three.js를 통해 3D로 표출하고
    좌측상단에 마우스로 측정 박스를 만들면 우측 상단에도 매치되어 3D → 2D로 변환식을 통하여 
    우측상단에 자동차나 물체에대한 박스를 그린후 우측 리스트와같은 데이터로 
    인공지능 정답 데이터를 만드는 프로젝트 입니다.
    `
    ,
    // link: '',
    images: [
      './projects/Dorosee3DTool/Dorosee3DTool1.png',
      './projects/Dorosee3DTool/Dorosee3DTool2.png',
    ],
    main: `- 폴더를 입력받아 여러장의 Lidar데이터를 활용
    - 웹을통해 Three.js를 이용하여 부드러운 프레임 활용
    `,
    // git: 'https://github.com/goodchuck/nextjs-repo',
    // url: 'https://nextjs-repo-kohl.vercel.app',
    notion: 'https://www.notion.so/3D-2bf62c751fb24ca39a35d32696cb98d7?pvs=4',
    Frontend: 'Vanilla JS',
    Backend: '',
    Database: '',
    Deployment: 'AWS EC2'
  },
  {
    isPort: false,
    title: "ROADPMS - 도로하자보수 분석 사이트",
    description: '2021 ~ 2023 (유지보수 및 기능 개발)',
    outline: `전 직장인 (주)도로시와 한국건설기술연구원의 도로하자를 웹에서 조회 및 조치하는 웹사이트입니다
    국내에 각 지역에 차량 앞부분에 도로하자측정기기를 세팅후 돌아다니면서 주기적으로 도로하자를 측정하며
    초기엔 AI로 1차적으로 분석후 웹사이트에 데이터가 넘어와 사람이 2차적으로 측정하여
    시간적 효율을 추구하였습니다.
    
    해당 페이지의 기능 개발 및 일부 로직 최적화를 맡았습니다.
    한국건설기술연구원에서 내부적으로 사용하는 프로젝트라 링크와 소스는 없습니다.
    `
    ,
    // link: '',
    images: [
      './projects/ROADPMS/ROADPMS1.png',
      './projects/ROADPMS/ROADPMS2.png',
      './projects/ROADPMS/ROADPMS3.png',
      './projects/ROADPMS/ROADPMS4.png'
    ],
    main: ``,
    // git: 'https://github.com/goodchuck/nextjs-repo',
    // url: 'https://nextjs-repo-kohl.vercel.app',
    notion: 'https://www.notion.so/ROADPMS-3138aadb87354be6b3311677729ac09e?pvs=4',
    Frontend: 'Vanilla JS',
    Backend: 'Java Spring',
    Database: '',
    Deployment: 'AWS EC2'
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

      {/* ARCHIVING */}
      <Flex className="container archive" vertical gap={'middle'} align="center" style={{ backgroundColor: 'black' }}>
        <div className="header" style={{ color: 'white' }}>개인 기록</div>

        {/* Card들 */}
        <Flex gap={'middle'}>
          <Flex vertical gap={'middle'} className="card">
            <Flex gap={'middle'} align="center">
              <Image src={'./icons/gold1.svg'} width={64} height={64} alt="github"></Image>
              <p>백준 알고리즘 / 24년 4월기준 : 골드 1</p>
            </Flex>
            <Flex vertical>
              <a href='https://solved.ac/profile/y502100'>백준 프로필</a>
              <a href='https://www.notion.so/e43182b977fe432e87c06bf96746ce19'>백준 과정 노션링크</a>
              <a href='https://www.notion.so/43c257b935784a14814ac7df6e46e9a6'>알고리즘 정리 노션링크</a>
            </Flex>

            <div>
              - 24년 4월기준 골드 1로 상위 9퍼센트 달성

            </div>
          </Flex>
          <Flex vertical gap={'middle'} className="card">
            <Flex gap={'middle'} align="center">
              <Image src={'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1567128822/noticon/osiivsvhnu4nt8doquo0.png'} width={64} height={64} alt="github"></Image>
              <p>GitHub </p>
            </Flex>
            <Flex vertical>
              <a href='https://github.com/goodchuck'>깃허브 주소</a>
            </Flex>
            <div>
              개인 소스코드 저장장소
            </div>
          </Flex>

          <Flex vertical gap={'middle'} className="card">
            <Flex gap={'middle'} align="center">
              <Image src={'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1566778642/noticon/kjaaizycfgz017qxvlnu.png'} width={64} height={64} alt="github"></Image>
              <p>Notion</p>
            </Flex>
            <Flex vertical>
              <a href='https://www.notion.so/Skills-78f0b8ca2217494ba83b17e8333cdc55'>노션 링크</a>
            </Flex>
            <div>
              개인 개발 이슈들 정리한 곳!
            </div>
          </Flex>
        </Flex>

      </Flex>

      {/* Skills */}
      <Flex className="container skills" vertical gap={'middle'} align="center">
        <div className="header">Skills</div>
        <Flex vertical gap={'middle'} className="container" >
          {/* 프론트엔드 */}
          <Flex vertical gap={'middle'} className="skills-container">
            <div className="title">Front-End</div>
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
            <div className="title">상태관리 및 라이브러리</div>
            <Flex gap={'large'} className="skill-row">
              <SkillComponent src='https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1675253316/noticon/gg2mfsvpu2aje4f8rpuc.png' text='zustand' />
              <SkillComponent src='https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1570521380/noticon/lbpvcvhvvszxrlu78vnc.png' text='electron' />
              <SkillComponent src='./icons/threedotjs-color.svg' text='THREE.js' />
              <SkillComponent src='./icons/chartdotjs-color.svg' text='Chart.js' />
            </Flex>
          </Flex>

          {/* Depolyment */}
          <Flex vertical gap={'middle'} className="skills-container">
            <div className="title">Deployment</div>
            <Flex gap={'large'} className="skill-row">
              <SkillComponent src='https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1566777755/noticon/yfmwxv8nhnr5aqaxhxpg.png' text='AWS' />
              <SkillComponent src='https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1679312641/noticon/rx8rni4npifrbo9ckxmt.png' text='Vercel' />
            </Flex>
          </Flex>

          {/* AI */}
          <Flex vertical gap={'middle'} className="skills-container">
            <div className="title">AI</div>
            <Flex gap={'large'} className="skill-row">
              <SkillComponent src='./icons/openai-color.svg' text='OpenAI' />
            </Flex>
          </Flex>
          <Flex vertical gap={'middle'} className="skills-container">
            <div className="title">ETC</div>
            <Flex gap={'large'} className="skill-row">
              <SkillComponent src='https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1567128822/noticon/osiivsvhnu4nt8doquo0.png' text='Git' />
              <SkillComponent src='https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1640982247/noticon/tpvr26zp02angin4t0jv.png' text='Figma' />
              <SkillComponent src='https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1566913651/noticon/rj9nd1qsykajfusei65f.jpg' text='Slack' />
              <SkillComponent src='https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1640152045/noticon/albswwsjaaxvxbyhmwig.png' text='Discord' />
            </Flex>
          </Flex>
        </Flex>
      </Flex>


      {/* Projects */}
      <Flex className="container" vertical gap={'middle'} align="center" style={{ backgroundColor: '#6cdab2' }}>
        <div className="header" style={{ color: 'white' }}>PROJECTS</div>
        <Flex vertical gap={'middle'} align="center" style={{ width: '100%' }}>
          {projects.map((obj, index) => (<ProjectCard key={index} {...obj} />))}

        </Flex>
      </Flex>
    </StyledMain>

  );
}
