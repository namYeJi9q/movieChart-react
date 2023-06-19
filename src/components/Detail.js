import PropTypes from "prop-types";
import styled from "styled-components";

export default function Detail({
    background_image_original,
    large_poster,
    url,
    title,
    year,
    rating,
    runtime,
    genres,
    summary,
    download_count,
}) {
    return (
        <Wrap backImg={background_image_original}>
            <MovieInfo>
                <h1>
                    <a href={url} target="_blank">
                        {title}
                    </a>
                </h1>
                <MovieDetail>
                    <InfoLIst>
                        <span>⭐️ {rating}</span>•<span>{runtime}분</span>•
                        <span>{download_count}+</span>•<span>{year}</span>
                    </InfoLIst>
                    <Summary>{summary}</Summary>
                    <Genres>
                        <ul>
                            {genres.map((genre, index) => (
                                <li key={index}>#{genre}</li>
                            ))}
                        </ul>
                    </Genres>
                </MovieDetail>
            </MovieInfo>
            <Poster>
                <PosterImg src={large_poster} />
            </Poster>
        </Wrap>
    );
}

Detail.propTypes = {
    background_image_original: PropTypes.string.isRequired,
    large_poster: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    runtime: PropTypes.number.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
    summary: PropTypes.string.isRequired,
    download_count: PropTypes.number.isRequired,
};

const Wrap = styled.section`
    width: 100%;
    height: 100%;
    position: relative;
    z-index: 1;
    &:after {
        width: 100%;
        min-height: 100%;
        content: "";
        background: ${(props) =>
            `url(${props.backImg})no-repeat center center`};
        background-size: cover;
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
        opacity: 0.6;
    }
`;

const MovieInfo = styled.div`
    position: absolute;
    top: 160px;
    left: 80px;
    z-index: 1;
    h1 {
        width: 50%;
        font-size: 40px;
        color: #f9f5f6;
        text-shadow: 2px 1px 3px #aaa;
        margin-bottom: 5px;
    }
`;

const MovieDetail = styled.ul`
    width: 40%;
    > li {
        color: #f9f5f6;
        margin-bottom: 20px;
        text-shadow: 2px 1px 3px #aaa;
    }
`;

const InfoLIst = styled.li`
    span {
        margin-right: 6px;
        margin-left: 6px;
        :nth-child(1) {
            margin-left: 0;
        }
    }
`;
const Summary = styled.li`
    max-height: 300px;
    overflow: auto;
    font-size: 17px;
    font-weight: 500;
    line-height: 1.5;
`;
const Genres = styled.li`
    ul {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        li {
            margin-right: 10px;
            font-size: 14px;
            color: #f8e8ee;
        }
    }
`;

const Poster = styled.div`
    width: 70vw;
    height: 90%;
    max-width: 1000px;
    position: absolute;
    top: 0;
    right: 0;

    &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        box-shadow: inset 10px -10px 50px 1px #111, -10px 10px 50px 10px #111;
    }
`;

const PosterImg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top;
    position: relative;
`;
