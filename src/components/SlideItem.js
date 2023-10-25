import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";
export default function SlideItem({ id, year, title, poster }) {
    return (
        <Link to={`/movie/${id}`}>
            <MovieWrap>
                <MovieImg>
                    {poster && (
                        <Poster src={poster} alt={title} title={title} />
                    )}
                </MovieImg>
                <MovieInfo>
                    <h4>
                        {title.length > 40 ? `${title.slice(0, 40)}...` : title}
                    </h4>
                    <h5>{year}</h5>
                </MovieInfo>
            </MovieWrap>
        </Link>
    );
}

SlideItem.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
};

const MovieImg = styled.div`
    width: 164px;
    height: 245px;
    border: 2.5px solid rgba(244, 167, 188, 0.4);
    transition: all ease-in-out 0.2s;
`;

const Poster = styled.img`
    width: 160px;
    height: 240px;
    position: relative;
    top: 0;
    left: 0;
    position: relative;

    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: #000;
        opacity: 0;
    }
`;
const MovieWrap = styled.div`
    width: 165px;
    height: 400px;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    transition: all 0.2s ease-in-out;
    &:hover {
        ${MovieImg} {
            transform: scale(1.08);
        }
    }
`;

const MovieInfo = styled.div`
    margin-top: 10px;
    h4 {
        color: #f08ca7;
        margin-bottom: 10px;
        text-align: left;
    }
    h5 {
        margin-bottom: 15px;
        color: #fff;
    }
`;
