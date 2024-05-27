import styled from "styled-components";

export const StyledMain = styled.main`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: "Noto Sans KR", sans-serif;
    /* font-weight: 400; */
    color: #212529;
    position: relative;
    overflow: hidden;
    height: 100vh;

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
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
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
`;
