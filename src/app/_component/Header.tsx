"use client"

import { Flex } from "antd"
import { StyledHeader } from "./StyledHeader"

export const Header = () => {


    return (
        <StyledHeader>
            <Flex className="main-container" align="center" justify="space-between">
                <div className="header-title">
                    YTH Portfolio
                </div>
                {/* 목차들 */}
                <Flex gap={'middle'} className="list-container">
                    <div>About me</div>
                    <div>Skills</div>
                    <div>Archiving</div>
                    <div>Projects</div>
                    <div>Career</div>
                </Flex>
            </Flex>
        </StyledHeader>
    )
}