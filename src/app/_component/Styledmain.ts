import styled from "styled-components";

export const StyledMain = styled.main`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: Black Han Sans, sans-serif;

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
            url("/assets/image.png") 50% no-repeat;
        /* opacity: 0.7; */
        color: #fff;
        & .title-box {
            font-weight: 400;
            font-size: 4rem;
        }

        & .text-box {
            /* font-weight: 400; */
            font-size: 1rem;
        }
    }

    & .container {
        padding-top: 20px;
        padding-bottom: 20px;
        width: 100%;
        min-height: 300px;
        /* background-color: aqua; */
        & > .header {
            font-weight: 400;
            font-size: 3rem;
            border-bottom-width: 1px;
            border-bottom-style: solid;
        }
    }

    & .aboutme {
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
    }
`;
