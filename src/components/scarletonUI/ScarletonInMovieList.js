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
        background-color: gray;
        margin-bottom: 10px;
        width: 100px;
        height: 24px;
        border-radius: 5px;
    }
    h5 {
        margin-bottom: 15px;
        background-color: gray;
        width: 50px;
        height: 17px;
        border-radius: 5px;
    }
    p {
        font-size: 15px;
        background-color: gray;
        width: 180px;
        height: 20px;
        border-radius: 5px;
        margin-bottom: 4px;
    }
`;
