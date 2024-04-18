"use client"
import Image from 'next/image';
import { Flex } from "antd"

type props = {
    src: string;
    width?: number;
    height?: number;
    alt?: string;
    text: string;
}
export const SkillComponent = ({ src, width, height, alt, text }: props) => {
    return (
        <Flex vertical justify="center" align="center">
            <Image src={src} width={width ? width : 32} height={height ? height : 32} alt={alt ? alt : 'null'}></Image>
            <div style={{ fontSize: '1.2rem' }}>{text}</div>
        </Flex>
    )
}