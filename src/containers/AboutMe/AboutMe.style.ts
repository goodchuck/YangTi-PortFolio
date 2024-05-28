import styled from "styled-components";
export const StyledAboutMe = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    height: 100%;
    padding-bottom: 10px;
    background: lightblue;
    .aboutme__innercontainer {
        width: 70%;
    }

    .aboutme-container {
        position: relative;
        width: 100%;
        height: 90%;
    }

    .aboutme-container__left {
        position: absolute;
        top: 0;
        left: 0;
        width: 35%;
        height: 100%;
        background: lightblue;
        padding: 0 10px 15px 10px;
    }

    .aboutme-container__center {
        position: absolute;
        top: 0;
        left: 40%;
        width: 400px;
        height: 100px;
        /* background: lightblue; */
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .aboutme-container__right {
        position: absolute;
        top: 0;
        right: 0;
        width: 35%;
        height: 100%;
        background: lightblue;
        padding: 0 10px 15px 10px;
    }

    .aboutme-container__right__container {
        width: 100%;
        height: 100%;
        padding: 10px;

        border-radius: 5px;
        background: white;
    }

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
`;
