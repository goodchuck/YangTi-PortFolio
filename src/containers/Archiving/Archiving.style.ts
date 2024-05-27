import styled from "styled-components";

export const StyledArchiving = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: black;
    gap: 10px;
    height: 100%;
    & .card {
        width: 350px;
        background-color: white;
        border-radius: 0.5rem;
        padding: 20px;
        & a {
            color: blue;
        }
    }
`;
