"use client";
// src/components/ImageSlider/ImageSlider.tsx
import { useEffect, useState, useRef, CSSProperties } from 'react';
import { motion, useAnimation } from 'framer-motion';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  overflow: hidden;
  width: 100%;
  height: calc(100vh - 72px);
  position: relative;
  /* opacity: 0.7; */
`;

const Slide = styled(motion.div)`
  min-width: 100%;
  height: 100%;
  background-size: contain; /* 이미지 전체가 보이도록 설정 */
  background-repeat: no-repeat;
  background-position: center;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 5rem;
  font-weight: bold;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 1);
`;

const Title = styled.div<{ customStyle: CSSProperties }>`
  white-space: pre-line; /* 줄바꿈 적용 */
  text-align: center; /* 중앙 정렬 */
  font-size: ${(props) => props.customStyle.fontSize || '5rem'};
`;

interface Image {
    title: string;
    src?: string;
    duration: number;
    style: CSSProperties;
}

const images: Image[] = [
    {
        title: '자동화 - 네이버/티스토리 GPT기반 내용 자동 포스팅',
        src: './projects/autopost/category/autopostShort.gif',
        duration: 20000,
        style: { fontSize: '5rem' }
    },
    {
        title: '알고리즘 - 골드 1',
        src: './algorithm/profile.png',
        duration: 4000,
        style: { fontSize: '5rem' }
    },
    {
        title: 'AI - ChatGPT 기반 PDF 문제 생성기',
        src: './projects/PDFProblem/image4.png',
        duration: 4000,
        style: { fontSize: '5rem' }
    },
    {
        title: `프론트 개발 
        프로젝트 : 3D 어노테이션 툴 - 자율주행 정답데이터`,
        src: './projects/Dorosee3DTool/Dorosee3DTool1.png',
        duration: 4000,
        style: { fontSize: '5rem' }
    },
    {
        title: `프론트 개발 
        프로젝트 : 4S - 삼성전자 사우디 건설 고도화 프로젝트 `,
        src: './projects/4S/4S-1.png',
        duration: 4000,
        style: { fontSize: '5rem' }
    },
    {
        title: `프론트 개발 
        프로젝트 : ROADPMS - AI 도로 하자 검수`,
        src: './projects/ROADPMS/ROADPMS3.png',
        duration: 4000,
        style: { fontSize: '5rem' }
    },
    {
        title: `안녕하세요 3년차 프론트엔드개발자 양태현입니다!
        알고리즘, 웹크롤링, 자동화, AI, 개발 등등 관심이 많습니다!
        저에관한 내용을 더 보고 싶으시다면 스크롤 다운을 해주세요!`,
        src: '',
        style: {
            fontSize: '3rem'
        },
        duration: 10000
    }
];

const ImageSlider = () => {
    const controls = useAnimation();
    const [currentIndex, setCurrentIndex] = useState(0);
    const animationFrameId = useRef<number | null>(null);
    const startTime = useRef<number | null>(null);

    useEffect(() => {
        let isMounted = true;

        const update = (timestamp: number) => {
            if (!startTime.current) {
                startTime.current = timestamp;
            }

            const elapsed = timestamp - startTime.current;
            const currentImage = images[currentIndex];

            if (elapsed >= currentImage.duration) {
                startTime.current = timestamp;
                setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
            }

            if (isMounted) {
                animationFrameId.current = requestAnimationFrame(update);
            }
        };

        const sequence = async () => {
            while (isMounted) {
                const currentImage = images[currentIndex];
                await controls.start({
                    x: `-${currentIndex * 100}%`,
                    transition: {
                        type: 'spring',
                        stiffness: 500,
                        damping: 20,
                    },
                });
                animationFrameId.current = requestAnimationFrame(update);
            }
        };

        sequence();

        return () => {
            isMounted = false; // 컴포넌트 언마운트 시 플래그를 false로 설정하여 애니메이션 정지
            if (animationFrameId.current) {
                cancelAnimationFrame(animationFrameId.current);
            }
        };
    }, [controls, currentIndex]);

    return (
        <Container>
            <motion.div
                style={{ display: 'flex', width: `${images.length * 100}%` }}
                animate={controls}
            >
                {images.map((image, index) => (
                    <Slide key={index} style={{ backgroundImage: `url(${image.src})` }}>
                        <Title customStyle={image.style}>{image.title}</Title>
                    </Slide>
                ))}
            </motion.div>
        </Container>
    );
};

export default ImageSlider;
