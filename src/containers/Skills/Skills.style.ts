import styled from "styled-components";

export const StyledSkills = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
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
`;
