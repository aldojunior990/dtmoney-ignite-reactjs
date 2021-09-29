import styled from "styled-components";

export const Container = styled.div`
    gap: 2rem;
    margin-top: -10rem;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    div{
        background: var(--shape);
        padding: 1.5rem 2rem;
        border-radius: 0.25rem;
        color: var(--text-title);
        width: 30%;
        align-items: center;
        flex-wrap: wrap;
        @media (max-width: 768px) {
            width: 100%;
        }
        header{
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
        strong{
            word-break: break-all;
            display: flex;
            margin-top: 1rem;
            font-size: 2rem;
            font-weight: 500;
            line-height: 3rem;
            min-width: 90%;
            justify-content: space-between;
            flex-wrap: wrap;
        }
        &.back{
            background: var(--green);
            color: #fff;
        }
    }
`