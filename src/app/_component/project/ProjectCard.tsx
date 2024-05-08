//@ts-nocheck
"use client"
// import Image from "next/image"
import { Flex, Carousel, Divider, Button, Image } from "antd"
import { StyledProjectCard } from "./StyledProjectCard";
import { forwardRef } from "react";

const ImageProps = { width: 650, height: 400 }
const contentStyle: React.CSSProperties = {
    height: `${ImageProps.height}px`,
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};

export type Project = {
    projectId?: string;
    isPort?: boolean;
    title: string,
    description: string,
    outline: string,
    link?: string,
    images: any[],
    main: string,
    git?: string,
    url?: string,
    notion?: string,
    Frontend: string,
    Backend: string,
    Database: string,
    Deployment: string
    youtubeLink?: string
    isVisible?: boolean;
}


export const ProjectCard = forwardRef<HTMLDivElement, Project>(({
    projectId, isPort = true, title, description, outline, link, images,
    main, git, url, notion, Frontend, Backend, Database, Deployment, youtubeLink
}, ref) => {

    const handleClickEvent = () => {
        alert(`click ${link}`)
    }

    return (
        <StyledProjectCard id={projectId ? projectId : undefined} ref={ref}>
            <div className="title">{title}</div>
            <div className="description">{description} / {isPort ? '포트폴리오' : '회사프로젝트'}</div>
            <Flex style={{ width: '100%' }} gap={"middle"}>
                <div style={{ width: '50%', height: '500px' }}>
                    <Carousel autoplay>
                        {
                            images.map((obj, index) => {
                                return (<div key={index} style={{ width: '100%', height: '100%' }}>
                                    <Image src={obj} width={ImageProps.width} height={ImageProps.height} alt='에러'></Image>
                                </div>)
                            })
                        }
                        {/* <div>
                            <div style={contentStyle}>1</div>
                        </div>
                        <div>
                            <div style={contentStyle}>2</div>
                        </div>
                        <div>
                            <div style={contentStyle}>3</div>
                        </div>
                        <div>
                            <div style={contentStyle}>4</div>
                        </div> */}
                    </Carousel>
                    {youtubeLink && ((<a href={youtubeLink}>youtube보러가기!</a>))}
                </div>

                <Flex vertical style={{ width: '50%' }}>
                    <Flex vertical gap={"middle"}>
                        <h3>O 프로젝트 설명</h3>
                        <div style={{ whiteSpace: 'pre-line' }}>{outline}</div>
                        {/* <Button style={{ width: '200px' }} onClick={handleClickEvent}>자세히 보러가기</Button> */}
                    </Flex>

                    <Divider />
                    <Flex vertical gap='small'>
                        <Flex gap={'middle'}>
                            <div className="icon">
                                ✔
                            </div>
                            <div className="header">
                                주요기능
                            </div>
                            <div className="value" style={{ whiteSpace: 'pre-line' }}>{main}
                            </div>
                        </Flex>
                        <Flex gap={'middle'}>
                            <div className="icon">
                                ✔
                            </div>
                            <div className="header">
                                GitHub
                            </div>
                            <div className="value">
                                {git ? (<a href={git}>Git 주소로가기</a>) : '-'}
                            </div>
                        </Flex>
                        <Flex gap={'middle'}>
                            <div className="icon">
                                ✔
                            </div>
                            <div className="header">
                                URL
                            </div>
                            <div className="value">
                                {url ? (<a href={url}>홈페이지 보러가기</a>) : '-'}
                            </div>
                        </Flex>
                        <Flex gap={'middle'}>
                            <div className="icon">
                                ✔
                            </div>
                            <div className="header">
                                Notion
                            </div>
                            <div className="value">
                                {notion ? (<a href={notion}>프로젝트 설계 보러가기</a>) : '-'}
                            </div>
                        </Flex>
                        <Flex gap={'middle'}>
                            <div className="icon">
                                ✔
                            </div>
                            <div className="header">
                                Frontend
                            </div>
                            <div className="value">
                                {Frontend}
                            </div>
                        </Flex>
                        <Flex gap={'middle'}>
                            <div className="icon">
                                ✔
                            </div>
                            <div className="header">
                                Backend
                            </div>
                            <div className="value">
                                {Backend}
                            </div>
                        </Flex>
                        <Flex gap={'middle'}>
                            <div className="icon">
                                ✔
                            </div>
                            <div className="header">
                                Database
                            </div>
                            <div className="value">
                                {Database}
                            </div>
                        </Flex>
                        <Flex gap={'middle'}>
                            <div className="icon">
                                ✔
                            </div>
                            <div className="header">
                                Deployment
                            </div>
                            <div className="value">
                                {Deployment}
                            </div>
                        </Flex>
                    </Flex>
                </Flex>

            </Flex>
        </StyledProjectCard>
    )
})

ProjectCard.displayName = 'ProjectCard'
export default ProjectCard