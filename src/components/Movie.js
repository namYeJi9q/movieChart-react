import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";
export default function Movie({ id, year, title, summary, poster, genres }) {
    return (
        <Link to={`/movie/${id}`}>
            <MovieWrap>
                {poster && <MovieImg src={poster} alt={title} title={title} />}
                <MovieInfo>
                    <h3>
                        {title.length > 40 ? `${title.slice(0, 40)}...` : title}
                    </h3>
                    <h5>{year}</h5>
                    <p>
                        {summary.length > 205
                            ? `${summary.slice(0, 200)}...`
                            : summary}
                    </p>
                    <ul>
                        {genres.map((genre, index) => (
                            <li key={index}>{genre}</li>
                        ))}
                    </ul>
                </MovieInfo>
            </MovieWrap>
        </Link>
    );
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const MovieImg = styled.img`
    width: 150px;
    height: 225px;
    position: relative;
    box-shadow: 1px 3px 10px 5px #000;
`;
const MovieWrap = styled.div`
    width: 400px;
    height: 350px;
    display: flex;
    padding: 20px;
    margin: 0 10px;
    background-color: #fff;
    border-radius: 5px;
    &:hover {
        box-shadow: 2px 5px 20px 6px #eee;
        ${MovieImg} {
            top: -30px;
        }
    }
`;

const MovieInfo = styled.div`
    margin-left: 30px;
    h2 {
        margin-bottom: 10px;
    }
    h5 {
        margin-bottom: 15px;
    }
    p {
        margin-bottom: 24px;
        line-height: 1.3;
        font-size: 15px;
    }

    ul {
        display: flex;
        flex-wrap: wrap;
    }
    ul > li {
        font-size: 14px;
        margin-right: 5px;
    }
`;
