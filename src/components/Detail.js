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
                    <li>
                        <span>⭐️ {rating}</span>•<span>{runtime}분</span>•
                        <span>{download_count}+</span>•<span>{year}</span>
                    </li>
                    <Summary>{summary}</Summary>
                    <Genres>
                        <span>장르</span>
                        <ul>
                            {genres.map((genre, index) => (
                                <li key={index}>{genre}</li>
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
        height: 100%;
        content: "";
        background: ${(props) =>
            `url(${props.backImg})no-repeat center center`};
        background-size: cover;
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
        opacity: 0.5;
    }
`;

const MovieInfo = styled.div`
    width: 50%;
    position: absolute;
    top: 150px;
    left: 50px;
    color: #fff;
    z-index: 1;
    h1 {
        font-size: 40px;
    }
`;
const MovieDetail = styled.ul`
    > li {
        margin-bottom: 20px;
    }
`;
const Summary = styled.li`
    height: 300px;
    overflow: auto;
    font-size: 16px;
    font-weight: 500;
    line-height: 1.71;
`;
const Genres = styled.li`
    display: flex;
    flex-direction: row;

    ul {
        display: flex;
        flex-direction: row;
        li {
            margin-left: 5px;
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
`;

const PosterImg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top;
    position: relative;

    &::before {
        content: "";
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 11;
        border: 1px solid red;
        /* background-image: linear-gradient(
                to top,
                rgb(0, 0, 0) 2%,
                rgba(0, 0, 0, 0) 50%
            ),
            linear-gradient(
                to right,
                rgb(0, 0, 0) 20%,
                rgba(0, 0, 0, 0) 50%,
                rgba(0, 0, 0, 0.1) 100%
            ); */
    }
`;
