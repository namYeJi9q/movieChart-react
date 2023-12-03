import styled from "styled-components";

export default function ScarletonInMovieList() {
    return (
        <>
            <LoadingWrap>
                {Array(20)
                    .fill()
                    .map((_, index) => (
                        <>
                            <MovieBox key={index}>
                                <LoadingImg></LoadingImg>
                                <MovieBoxRightCont>
                                    <h3></h3>
                                    <h5></h5>
                                    <p></p>
                                    <p></p>
                                    <p></p>
                                </MovieBoxRightCont>
                            </MovieBox>
                        </>
                    ))}
            </LoadingWrap>
        </>
    );
}

const LoadingWrap = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    row-gap: 140px;
`;

const LoadingImg = styled.div`
    width: 150px;
    height: 225px;
    position: relative;
    top: 0;
    left: 0;
    background-color: gray;
`;

const MovieBox = styled.div`
    width: 400px;
    height: 400px;
    display: flex;
    padding: 20px;
    margin: 0 10px;
    background-color: lightgrey;
    border-radius: 5px;
`;

const MovieBoxRightCont = styled.div`
    margin-left: 30px;
    h3 {
        color: #f08ca7;
        margin-bottom: 10px;
    }
    h5 {
        margin-bottom: 15px;
        color: #fff;
    }
    p {
        line-height: 1.3;
        font-size: 15px;
        color: #ddd;
    }
`;
