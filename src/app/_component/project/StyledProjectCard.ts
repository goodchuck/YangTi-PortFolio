import styled from "styled-components";

export const StyledProjectCard = styled.div`
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
    padding: 3rem;
    background-color: #fff;
    width: 1000px;
    /* height: 900px; */
    font-family: Noto Sans KR, sans-serif;
    /* font-weight: 400; */
    gap: 10px;
    & > .title {
        font-weight: 400;
        color: #222;
        font-size: 2.5rem;
    }

    & > .description {
        font-size: 1rem;
        color: #6c757d;
        opacity: 0.8;
    }

    & .left-container {
        /* background-color: white; */

        width: 50%;
    }

    & .right-container {
        /* background-color: white; */
        width: 50%;
    }

    & .icon {
    }

    & .header {
        width: 170px;
    }

    & .value {
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
    }
`;
