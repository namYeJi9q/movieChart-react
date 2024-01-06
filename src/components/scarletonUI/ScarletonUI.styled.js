import styled from "styled-components";

export const SkeletonItem = styled.div`
    background-color: #f2f2f2;
    position: relative;
    width: 100%;
    height: 100%;

    @keyframes skeleton-gradient {
        0% {
            background-color: rgba(165, 165, 165, 0.1);
        }
        30% {
            background-color: rgba(165, 165, 165, 0.4);
        }
        75% {
            background-color: rgba(165, 165, 165, 0.1);
        }
        100% {
            background-color: rgba(165, 165, 165, 0.4);
        }
    }

    &:before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 1;
        animation: skeleton-gradient 1s infinite ease-in;
    }
`;
