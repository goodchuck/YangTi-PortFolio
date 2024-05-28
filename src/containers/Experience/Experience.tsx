"use client";
import Image from "next/image";
import { Button, Divider, Flex } from "antd";
import { StyledExperience } from "./Experience.style";
import { useScrollStore } from "@/stores/useScrollStore";
import { useProjectStore } from "@/stores/useProjectStore";
import { sleep } from "@/utils";

const Experience = () => {
    const { setCurrentSection } = useScrollStore();
    const { scrollToProject } = useProjectStore();


    const handleProjectClick = async (id: string) => {
        try {
            setCurrentSection(4);
            await sleep(500)
            scrollToProject(id);
        }
        catch (e) {
            throw e;
        }
    }

    return (
        <StyledExperience className="forward-ref-container__container">
            <div className="forward-ref-container__title">Experience</div>
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
                                <Button type="primary" onClick={() => { handleProjectClick('4S') }}>프로젝트 보러가기</Button>
                            </Flex>
                            <Flex vertical className="contribute-container">
                                <p>- 개발 도중에 참여하여 해당 사이트의 핵심 기능인 PTW(Permit-To-Work)를 개발하였습니다.</p>
                                <p>- 오프라인의 PTW기능을 온라인으로 시뮬레이션 및 알고리즘화하여 기술을 적용하였습니다.</p>
                            </Flex>
                        </Flex>

                        <Flex vertical gap={'middle'}>
                            <Flex gap={'middle'} align="center" justify="space-between">
                                <h3>- 도로시 웹3D 어노테이션툴(자율주행 인공지능의 정답데이터를 만드는 사이트)</h3>
                                <Button type="primary" onClick={() => {
                                    handleProjectClick('Dorosee3DTool')
                                }}>프로젝트 보러가기</Button>
                            </Flex>
                            <Flex vertical className="contribute-container">
                                <p>- 전면 개발을 진행하였고 90%이상 개발을하였고 실제로 연구기관에도 연구용으로 활용되기도하였습니다.</p>
                                <p>- 3D좌표 to 2D를 이용하는 로직과 좌표계를 이용한 이벤트들을 개발하였습니다.</p>

                            </Flex>

                        </Flex>

                        <Flex vertical gap={'middle'}>
                            <Flex gap={'middle'} align="center" justify="space-between">
                                <h3>- ROADPMS(도로하자보수 분석 사이트)</h3>
                                <Button type="primary" onClick={() => handleProjectClick("ROADPMS")}>프로젝트 보러가기</Button>
                            </Flex>
                            <Flex vertical className="contribute-container">
                                <p>- 유지보수 및 새로운 기술 개발을 담당하였습니다.</p>
                            </Flex>
                        </Flex>

                    </Flex>


                </div>
            </Flex>
            {/* <Divider /> */}
        </StyledExperience>

    )
}
export default Experience