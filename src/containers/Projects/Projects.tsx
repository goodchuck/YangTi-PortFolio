"use client";

import ProjectCard, { Project } from "@/app/_component/project/ProjectCard";
import { useProjectStore } from "@/stores/useProjectStore";
import { Flex } from "antd";
import { useEffect, useRef } from "react";
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

const Projects = () => {
    const projectRefs = useRef<(HTMLDivElement | null)[]>([]);
    const setProjectRefs = useProjectStore((state) => state.setProjectRefs);

    useEffect(() => {
        if (projectRefs.current) {
            setProjectRefs(projectRefs.current)
        }
    }, [setProjectRefs])

    return (
        <Flex className="container"
            vertical gap={'middle'} align="center" style={{ backgroundColor: '#6cdab2' }}
        >
            <div className="forward-ref-container__title" style={{ color: 'white' }}>PROJECTS</div>
            <Flex vertical gap={'middle'} align="center" style={{ width: '100%' }}>
                {projects
                    .filter(v => v.isVisible !== false)
                    .map((obj, index) => (
                        <ProjectCard key={index} {...obj} ref={(ref) => {
                            projectRefs.current[index] = ref;
                        }} />))}
            </Flex>
        </Flex>
    )
}

export default Projects;