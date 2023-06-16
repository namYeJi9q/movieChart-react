import React from "react";
import styled from "styled-components";
import Movie from "./Movie";
import Slider from "react-slick";
import PropTypes from "prop-types";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Slide({ movieTypes }) {
    if (!movieTypes || movieTypes.length === 0) {
        return null; // 또는 로딩 중인 상태를 보여줄 수 있는 컴포넌트를 반환합니다.
    }
    const settings = {
        arrows: true,
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
    };

    return (
        <SlideWrapper>
            <Slider {...settings}>
                {movieTypes &&
                    movieTypes.map((movie) => (
                        <Movie
                            key={movie.id}
                            id={movie.id}
                            year={movie.year}
                            poster={movie.medium_cover_image}
                            title={movie.title}
                            summary={movie.summary}
                            genres={movie.genres}
                            style={{ maxWidth: "350px" }}
                        />
                    ))}
            </Slider>
        </SlideWrapper>
    );
}

const SlideWrapper = styled.div`
    height: 350px;
    width: 1300px;
`;

Slide.propTypes = {
    movieTypes: PropTypes.array.isRequired,
};
