import styled from "styled-components";

export const StyledArchivingV2 = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: black;
    gap: 10px;
    height: 100%;
    width: 100%;
    padding: 10px;
    border-radius: 5px;
    .card {
        width: 100%;
        background-color: white;
        border-radius: 0.5rem;
        padding: 20px;
        & a {
            color: blue;
        }
    }
`;
