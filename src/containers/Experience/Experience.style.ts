import styled from "styled-components";

export const StyledExperience = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
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
`;
