import styled from "styled-components";

export const StyledAboutMe = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    height: 100%;

    .aboutme__innercontainer {
        width: 70%;
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
