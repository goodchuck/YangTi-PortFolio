"use client";
import Image from "next/image";
import { Flex } from "antd"
import { StyledArchivingV2 } from "./ArchivingV2.style";
import AnimatedButton from "@/components/Animated/Button/AnimatedButton";
const Archiving = () => {
    return (
        <StyledArchivingV2>
            <div style={{ color: 'white' }}>Archive - 아래 카드들을 클릭하면 이동해요!</div>

            {/* Card들 */}
            <Flex gap={'middle'} vertical style={{ width: '100%' }}>
                <AnimatedButton url={'https://solved.ac/profile/y502100'}>
                    <Flex vertical gap={'middle'} className="card">
                        <Flex gap={'middle'} align="center">
                            <Image src={'./icons/gold1.svg'} width={64} height={64} alt="github"></Image>
                            <div style={{ whiteSpace: 'pre-line' }}>{`백준 알고리즘 (24년 4월기준 : 골드 1)`}</div>
                        </Flex>
                        <Flex gap={'middle'} justify="space-between">
                            <Flex vertical align="flex-start">
                                <p>- 24년 12월 말 브론즈 5부터 시작!</p>
                                <p>- 24년 4월기준 골드 1로 상위 9퍼센트 달성</p>
                            </Flex>
                            {/* <Flex vertical>
                                <a href='https://solved.ac/profile/y502100'>백준 프로필</a>
                                <a href='https://www.notion.so/e43182b977fe432e87c06bf96746ce19'>백준 과정 노션링크</a>
                                <a href='https://www.notion.so/43c257b935784a14814ac7df6e46e9a6'>알고리즘 정리 노션링크</a>
                            </Flex> */}

                        </Flex>

                    </Flex>
                </AnimatedButton>

                <AnimatedButton url={'https://github.com/goodchuck'}>
                    <Flex vertical gap={'middle'} className="card">
                        <Flex gap={'middle'} align="center">
                            <Image src={'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1567128822/noticon/osiivsvhnu4nt8doquo0.png'} width={64} height={64} alt="github"></Image>
                            <p>GitHub </p>
                        </Flex>
                        <Flex gap={'middle'} justify="space-between">
                            <Flex vertical align="flex-start">
                                <p>- 개인 소스코드 저장장소</p>
                            </Flex>
                            {/* <Flex vertical>
                                <a href='https://github.com/goodchuck'>깃허브 링크</a>
                            </Flex> */}

                        </Flex>


                    </Flex>
                </AnimatedButton>

                <AnimatedButton url={'https://www.notion.so/Skills-78f0b8ca2217494ba83b17e8333cdc55'}>
                    <Flex vertical gap={'middle'} className="card">
                        <Flex gap={'middle'} align="center">
                            <Image src={'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1566778642/noticon/kjaaizycfgz017qxvlnu.png'} width={64} height={64} alt="github"></Image>
                            <p>Notion</p>
                        </Flex>
                        <Flex gap={'middle'} justify="space-between">
                            <Flex vertical align="flex-start">
                                <p>- 개인 개발 창고입니다!</p>
                            </Flex>
                            {/* <Flex vertical>
                                <a href='https://www.notion.so/Skills-78f0b8ca2217494ba83b17e8333cdc55'>노션 링크</a>
                            </Flex> */}

                        </Flex>

                    </Flex>
                </AnimatedButton>

                <AnimatedButton url={"https://yangtinomad.com/"}>
                    <Flex vertical gap={'middle'} className="card">
                        <Flex gap={'middle'} align="center">
                            <Image src={'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1605926847/noticon/ku5wj788ubjwba7pecrw.png'} width={64} height={64} alt="github"></Image>
                            <p>Tistory</p>
                        </Flex>
                        <Flex gap={'middle'} justify="space-between">
                            <Flex vertical align="flex-start">
                                <p>- 자동화 테스트 및 노션과 병행해서 사용하려는 곳입니다!</p>
                                <p>- 개인 개발 창고입니다!</p>
                            </Flex>
                            {/* <Flex vertical>
                                <a href='https://yangtinomad.com/'>티스토리 링크</a>
                            </Flex> */}

                        </Flex>

                    </Flex>
                </AnimatedButton>

            </Flex>
        </StyledArchivingV2>
    )
}

export default Archiving