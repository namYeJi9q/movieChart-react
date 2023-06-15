import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
export default function Movie({ id, year, title, summary, poster, genres }) {
    if (poster == "") {
        return;
    }
    return (
        <MovieWrap>
            <img src={poster} alt={title} title={title} />
            <h3>{title}</h3>
            <h5>{year}</h5>
            <p>{summary}</p>
            <ul>
                {genres.map((gen, index) => (
                    <li key={index}>{gen}</li>
                ))}
            </ul>
        </MovieWrap>
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

const MovieWrap = styled.div`
    min-width: "350px";
    width: 40%;
    height: "300px";
    border: 1px solid red;
`;
