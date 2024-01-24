import styled from "styled-components";
import { SkeletonItem } from "./SkeletonUI.styled";

export default function SkeletonInDetail() {
    return (
        <>
            <Wrap>
                <MovieInfo>
                    <MovieTitle></MovieTitle>
                    <MovieDetail>
                        <InfoLIst></InfoLIst>
                        <Summary></Summary>
                        <Summary></Summary>
                        <Summary></Summary>
                        <Genres></Genres>
                    </MovieDetail>
                </MovieInfo>
                <Poster></Poster>
            </Wrap>
        </>
    );
}

const Wrap = styled.section`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
`;

const MovieInfo = styled.div`
    width: 50%;
    padding-top: 160px;
    padding-left: 80px;
`;

const MovieTitle = styled(SkeletonItem)`
    width: 70%;
    height: 40px;
`;
const MovieDetail = styled.ul`
    width: 90%;
`;

const InfoLIst = styled(SkeletonItem)`
    width: 50%;
    height: 20px;
    margin: 20px 0;
`;
const Summary = styled(SkeletonItem)`
    width: 100%;
    height: 22px;
    margin-top: 10px;
`;

const Genres = styled(SkeletonItem)`
    width: 20%;
    height: 18px;
    margin-top: 30px;
`;

const Poster = styled(SkeletonItem)`
    width: 70vw;
    height: 90%;
    max-width: 1000px;
`;
