import styled from "styled-components";

export const StyledMain = styled.main`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: "Archivo Black", sans-serif;
    font-weight: 400;
    color: #212529;
    @font-face {
        font-family: "GOR";
        src: url("./fonts/GasoekOne-Regular.ttf") format("truetype");
        font-weight: normal;
        font-style: normal;
    }
    @font-face {
        font-family: "Black Han Sans";
        src: url("./fonts/BlackHanSans-Regular.ttf") format("truetype");
        font-weight: normal;
        font-style: normal;
    }
    @font-face {
        font-family: "Noto Sans KR";
        src: url("./fonts/NotoSansKR-VariableFont_wght.ttf") format("truetype");
        font-weight: normal;
        font-style: normal;
    }

    @font-face {
        font-family: "Archivo Black", sans-serif;
        src: url("./fonts/ArchivoBlack-Regular.ttf") format("truetype");
        font-weight: 400;
        font-style: normal;
    }

    & > .main-container {
        width: 100%;
        height: 500px;
        word-break: keep-all;
        background-color: green;
        background: linear-gradient(
                180deg,
                rgba(112, 93, 80, 0.8) 0,
                rgba(112, 93, 80, 0.8) 90%
            ),
            url("./assets/frame.jpg") 50% no-repeat;
        /* opacity: 0.7; */
        color: #fff;
        & .title-box {
            /* font-weight: 400; */
            font-size: 4rem;
        }

        & .text-box {
            /* font-weight: 400; */
            font-size: 2rem;
        }
    }

    & .typer-box {
        margin-top: 72px;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        background-color: black;
        /* background-image: url("./assets/background1.jpg"); */
        /* background-attachment: fixed; */
        /* background-repeat: no-repeat; */
        /* background-size: cover; */
        color: white;
        width: 100%;

        & > p {
            font-size: 5rem;
        }
    }

    & .container {
        padding-top: 20px;
        padding-bottom: 20px;
        width: 100%;
        /* background-color: aqua; */
        & > .header {
            font-weight: 700;
            font-size: 3rem;
            border-bottom-width: 1px;
            border-bottom-style: solid;
        }
    }

    & .aboutme {
        /* height: 100vh; */
        .icon {
            font-size: 48px;
        }
        .top {
            font-weight: 700;
            font-size: 1.5rem;
        }
        .bottom {
            font-size: 1rem;
        }

        & .innerContainer {
            display: flex;
            flex-direction: column;
            font-size: 1.25rem;
        }
    }

    & .archive {
        & .card {
            width: 350px;
            background-color: white;
            border-radius: 0.5rem;
            padding: 20px;
            & a {
                color: blue;
            }
        }
    }

    & .experience {
        & .inner-container {
            width: 70%;
            & .left {
                width: 30%;
                display: flex;
                flex-direction: column;
            }
            & .right {
                width: 70%;

                & .contribute-container {
                    padding-left: 20px;
                }
            }
        }
    }

    & .skills {
        background-color: yellow;
        & .container {
            width: 70%;
        }
        & .skills-container {
            & .title {
                font-size: 1.2rem;
            }
        }
        & .skill-row {
            background-color: white;
            padding: 20px;
        }
    }
`;
