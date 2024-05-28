import styled from "styled-components";

export const StyledForwardRefContainer = styled.div`
    overflow-y: auto;
    height: 100%;
    /* padding: 10px 40px 10px 40px; */

    .forward-ref-container__container {
        display: flex;
        flex-direction: column;
        /* justify-content: space-between; */
        padding-top: 20px;
        /* padding-bottom: 20px; */
        width: 100%;
        min-height: 100%;
        /* background-color: aqua; */
    }
    .forward-ref-container__title {
        font-weight: 700;
        font-size: 3rem;
        border-bottom-width: 1px;
        border-bottom-style: solid;
    }
`;
