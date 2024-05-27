import { TypingEffect } from "@/app/_component/TypingEffect"
import ImageSlider from "@/components/ImageSlider/ImageSlider"
import PathMorph from "@/components/PathMorph/PathMorph"

const Intro = () => {

    return (
        <div className="typer-box">
            {/* <TypingEffect strings={[`안녕하세요!`, `프론트엔드 개발자 양태현의 포트폴리오입니다!`]} size="4rem" /> */}
            {/* <PathMorph></PathMorph> */}
            <ImageSlider></ImageSlider>
        </div>
    )
}

export default Intro