import styled from "styled-components";

export const StyledHeader = styled.header`
    height: 72px;
    width: 100%;
    position: fixed;
    top: 0;
    display: flex;
    justify-content: center;
    background-color: white;
    z-index: 1000;
    & .main-container {
        /* padding: 0 40px 0 40px; */
        width: 70%;
        height: 100%;

        & .header-title {
            color: #453a33;
            cursor: pointer;
            font-size: 1.5rem;
            font-weight: 700;
            &:hover {
                color: #f4623a;
            }
        }
    }
    & .list-container {
        color: #453a33;
        cursor: pointer;
        font-size: 1rem;
        font-weight: 700;
        & > div {
            &:hover {
                color: #f4623a;
            }
        }
    }
`;
