import styled from "styled-components";
import { SkeletonItem } from "./SkeletonUI.styled";

export default function SkeletonInHome() {
    return (
        <>
            <SlideWrap>
                <Slide></Slide>
                <Slide></Slide>
                <Slide></Slide>
                <Slide></Slide>
            </SlideWrap>
        </>
    );
}
const SlideWrap = styled.div`
    width: 950px;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
    padding-top: 30px;
`;

const Slide = styled(SkeletonItem)`
    width: 160px;
    height: 240px;
    background-color: #f2f2f2;
`;
