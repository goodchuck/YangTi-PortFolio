import styled from "styled-components";

export const StyledProjectCard = styled.div`
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;

    padding: 1rem 3rem 1rem 3rem;
    background-color: #fff;
    width: 70%;
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
        width: 110px;
    }

    & .value {
        max-width: 400px;
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        /* white-space: nowrap; */
        /* text-overflow: ellipsis; */
        & a {
            color: #258ddb;
            cursor: pointer;
        }
    }
`;
