"use client"
import Image from "next/image";
import styles from "./page.module.css";
import { Button, Col, Divider, Flex, Row } from "antd";
import { StyledMain } from "./_component/Styledmain";
import { Header } from "./_component/Header";
import { CalendarOutlined, EditOutlined, EnvironmentOutlined, MailOutlined, PhoneOutlined, UserOutlined } from "@ant-design/icons";
import { SkillComponent } from "./_component/SkillComponent";
import { Project, ProjectCard } from "./_component/project/ProjectCard";
import { faker } from "@faker-js/faker"
import { TypingEffect } from "./_component/TypingEffect";
import { useEffect, useRef, useState } from "react";
const projects: Project[] = [
  {
    isPort: true,
    title: "네이버/티스토리 & ChatGPT 블로그 자동 포스팅기",
    description: '2024. 04 (1인 개발) / 웹 & 앱',
    outline: `Next.js와 ChatGPT를 합쳐서 만든 프로젝트입니다.
    
    Next.js사용없이 React으로 개발하면 되지 않나 싶지만 
    puppeteer는 기본적으로 fs모듈을 사용하기때문에 서버 컴포넌트가 필요합니다 
    
    그래서 사용자가 사용할수있게 bat파일을 제공하여 
    콘솔창이 돌아가는동안 프로그램이자 웹으로써 활용가능한 형태로 사용하게됩니다.

    그렇기에 서버컴포넌트를 도입을 위하여 Next.js를 활용하였습니다.
    
    AI의 시대가 다가오는만큼 자동화와 AI를 접목시키는 것이 중요해질 것이라 생각이되어 만든 프로젝트입니다.
    
    ChatGPT에게 주제를 던져주고 글을 받아온 후, 
    pixabay라는 사이트에서 저작권 없는 이미지를 크롤링하여
    랜덤으로 이미지를 가져온후, 
    
    주제텍스트와 합쳐서 주어진 계정만큼 반복하며
    네이버와 Tistory에 자동 포스팅을 해줍니다. 
    
    아래 git은 private로 되어있으며
    견본품은 naver만 테스트 가능한형태로 
    아래 download 링크로 구글드라이브에서 프로젝트를 받아 테스트를 해보실 수 있습니다!

    사용영상은 youtube로 간략하게 올려두어 좌측 하단에서
    링크로 확인 하실 수 있습니다!
    `,
    link: '',
    youtubeLink: 'https://youtu.be/GLzzxYmqUaE',
    images: [
      './projects/autopost/category/image1.png',
      './projects/autopost/category/image2.png',
      './projects/autopost/category/image3.png',],
    main: `- OpenAI의 언어모델 ChatGPT3.5 Turbo를 사용
    - Naver랑 Tistory의 한해서 입력한 아이디만큼 반복 포스팅을 합니다.
    - Next.js로 브라우저와 서버의 역할을 둘다 수행
    - puppeteer를 활용한 자동화 작업
    - 글만 올라가면 저품질의 위험이 있기때문에 저작권없는 이미지를 가져와 가공
    - 크몽사이트에 나와있는 자동 포스팅기의 기능을 구현(시중 15만원 프로그램)
    `,
    git: 'https://github.com/goodchuck/yangti-auto-post',
    url: '',
    download: 'https://drive.google.com/file/d/1ec559DSX6m3N_h26h4eS_Xub7SbT-dkr/view?usp=drive_link',
    notion: 'https://www.notion.so/0cbdd7046f2e4395bfa2ad48b2378b87?pvs=4',
    Frontend: 'Next.js, TypeScript',
    Backend: '-',
    Database: '-',
    Deployment: '프로그램 제공 형태'
  },
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
    isVisible: false,
    isPort: true,
    title: "YangGPT",
    description: '2024 / 03 (1인 개발)',
    outline: `OpenAI를 활용해 챗봇 및 여러 기능을 테스트해본 사이트들의 모음집입니다.
    
    AI의 시대가 올수 있음에 따라 시장 조사 및 프론트로써의 활용을 하기위해 제작하게 되었습니다.

    Next.js를 이용해 제작을 하였고 프론트엔드개발자이기 때문에
    백엔드는 간소화해서 Vercel의 Postgres를 이용하였습니다.

    배포는 AWS의 EC2를 이용하였고, let's Encript를 통해 https화도 같이 배워 사용하였습니다.`,
    link: 'https://yangti.site/',
    images: [],
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
    images: ['./projects/frontLibs/image1.png',
      './projects/frontLibs/image2.png',
      './projects/frontLibs/image3.png',
      './projects/frontLibs/image4.png',],
    main: ``,
    git: 'https://github.com/goodchuck/nextjs-repo',
    url: 'https://nextjs-repo-kohl.vercel.app',
    Frontend: 'Next.js / TypeScript',
    Backend: 'Next.js / Vercel',
    Database: '',
    Deployment: 'Vercel'
  },
  {
    projectId: '4S',
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
    projectId: 'Dorosee3DTool',
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
    projectId: 'ROADPMS',
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
  // const [refs, setRefs] = useState<any[]>(projects.filter(v => v.projectId).map(v => v.projectId));
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);
  useEffect(() => {
    console.log({ refs: projectRefs })
  }, [projectRefs])

  const scrollToProject = (id: string) => {
    if (projectRefs.current) {
      for (let ref of projectRefs.current) {
        if (ref && ref.id && ref.id === id) {
          ref.scrollIntoView({ block: 'center', behavior: 'smooth' });
        }
      }
    }
  }


  const firstRef = useRef<HTMLDivElement>(null);
  const aboutMeRef = useRef<HTMLDivElement>(null);
  const archiveRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  return (
    <StyledMain>
      <Header refs={{
        firstRef,
        aboutMeRef,
        archiveRef,
        experienceRef,
        skillsRef,
        projectsRef
      }}></Header>
      {/* 자기소개 */}
      <div className="typer-box" ref={firstRef}>
        <TypingEffect strings={[`안녕하세요!`, `프론트엔드 개발자 양태현의 포트폴리오입니다!`]} size="4rem" />
      </div>

      {/* About Me */}
      <Flex className="container aboutme" vertical gap={'middle'} align="center" ref={aboutMeRef}>
        <div className="header">ABOUT ME</div>

        <Flex vertical gap={'middle'} style={{ width: '70%' }}>
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
      <Flex className="container archive"
        vertical
        gap={'middle'}
        align="center"
        style={{ backgroundColor: 'black' }}
        ref={archiveRef}
      >
        <div className="header" style={{ color: 'white' }}>Archive</div>

        {/* Card들 */}
        <Flex gap={'middle'}>
          <Flex vertical gap={'middle'} className="card">
            <Flex gap={'middle'} align="center">
              <Image src={'./icons/gold1.svg'} width={64} height={64} alt="github"></Image>
              <div style={{ whiteSpace: 'pre-line' }}>{`백준 알고리즘
              24년 4월기준 : 골드 1`}</div>
            </Flex>
            <Flex vertical>
              <a href='https://solved.ac/profile/y502100'>백준 프로필</a>
              <a href='https://www.notion.so/e43182b977fe432e87c06bf96746ce19'>백준 과정 노션링크</a>
              <a href='https://www.notion.so/43c257b935784a14814ac7df6e46e9a6'>알고리즘 정리 노션링크</a>
            </Flex>

            <Flex vertical>
              <p>- 24년 12월 말 브론즈 5부터 시작!</p>
              <p>- 24년 4월기준 골드 1로 상위 9퍼센트 달성</p>

            </Flex>
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
          <Flex vertical gap={'middle'} className="card">
            <Flex gap={'middle'} align="center">
              <Image src={'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1605926847/noticon/ku5wj788ubjwba7pecrw.png'} width={64} height={64} alt="github"></Image>
              <p>Tistory</p>
            </Flex>
            <Flex vertical>
              <a href='https://yangtinomad.com/'>티스토리 링크</a>
            </Flex>
            <div>
              자동화 테스트 및 노션과 병행해서 사용하려는 주소입니다!
            </div>
          </Flex>
        </Flex>

      </Flex>

      {/* Experience */}
      <Flex className="container experience"
        vertical gap={'middle'} align="center"
        ref={experienceRef}
      >
        <div className="header">Experience</div>
        <Flex gap={'middle'} className={'inner-container'}>
          <div className="left">
            <Flex gap={'middle'}>
              <Image src={'./company/logo-dorosee.svg'} width={32} height={32} alt='도로시'></Image>
              <p>(주)도로시</p>
            </Flex>
            <p>프론트엔드 개발자 - 2021.05 ~ 2023.12</p>
          </div>
          <div className="right">
            <p>(주)도로시는 AI를 활용하여 다양한 SI업무를 수행하는 곳 입니다.</p>
            <p>해당 기업에 입사하여 BTB에맞는 프로그램개발 및 웹사이트 개발을 하였습니다.</p>
            <p>회사가 아직 프로세스가 정립이 안되어있던 상황이였어서 개발자들과 디자이너, 기획자 등등</p>
            <p>업무 프로세스를 맞추는 여러 방법들을 시행착오를 해보았고</p>
            <p>회사 내 프론트팀의 코드 문화를 팀원들과 어떻게 맞춰나가면 좋을지 항상 고민하고 토론도 진행하였습니다</p>
            <p>&nbsp;</p>
            <Flex vertical gap={'large'}>
              <h2>회사내 기여 내용</h2>
              <Flex vertical gap={'middle'}>
                <Flex gap={'middle'} align="center" justify="space-between">
                  <h3>- 4S(건설의 오프라인 안전장치 고도화 사이트)</h3>
                  <Button type="primary" onClick={() => scrollToProject("4S")}>프로젝트 보러가기</Button>
                </Flex>
                <Flex vertical className="contribute-container">
                  <p>- 개발 도중에 참여하여 해당 사이트의 핵심 기능인 PTW(Permit-To-Work)를 개발하였습니다.</p>
                  <p>- 오프라인의 PTW기능을 온라인으로 시뮬레이션 및 알고리즘화하여 기술을 적용하였습니다.</p>
                </Flex>
              </Flex>

              <Flex vertical gap={'middle'}>
                <Flex gap={'middle'} align="center" justify="space-between">
                  <h3>- 도로시 웹3D 어노테이션툴(자율주행 인공지능의 정답데이터를 만드는 사이트)</h3>
                  <Button type="primary" onClick={() => scrollToProject("Dorosee3DTool")}>프로젝트 보러가기</Button>
                </Flex>
                <Flex vertical className="contribute-container">
                  <p>- 전면 개발을 진행하였고 90%이상 개발을하였고 실제로 연구기관에도 연구용으로 활용되기도하였습니다.</p>
                  <p>- 3D좌표 to 2D를 이용하는 로직과 좌표계를 이용한 이벤트들을 개발하였습니다.</p>

                </Flex>

              </Flex>

              <Flex vertical gap={'middle'}>
                <Flex gap={'middle'} align="center" justify="space-between">
                  <h3>- ROADPMS(도로하자보수 분석 사이트)</h3>
                  <Button type="primary" onClick={() => scrollToProject("ROADPMS")}>프로젝트 보러가기</Button>
                </Flex>
                <Flex vertical className="contribute-container">
                  <p>- 유지보수 및 새로운 기술 개발을 담당하였습니다.</p>
                </Flex>
              </Flex>

            </Flex>


          </div>
        </Flex>
        <Divider />
      </Flex>

      {/* Skills */}
      <Flex className="container skills" vertical gap={'middle'} align="center" ref={skillsRef}>
        <div className="header">Skills</div>
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
      </Flex>


      {/* Projects */}
      <Flex className="container"
        vertical gap={'middle'} align="center" style={{ backgroundColor: '#6cdab2' }}
        ref={projectsRef}>
        <div className="header" style={{ color: 'white' }}>PROJECTS</div>
        <Flex vertical gap={'middle'} align="center" style={{ width: '100%' }}>
          {projects.filter(v => v.isVisible !== false).map((obj, index) => (<ProjectCard key={index} {...obj} ref={(ref) => {
            projectRefs.current[index] = ref;
          }} />))}
        </Flex>
      </Flex>
    </StyledMain>

  );
}
