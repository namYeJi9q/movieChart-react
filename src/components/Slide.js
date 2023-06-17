import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import PropTypes from "prop-types";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SlideItem from "./SlideItem";

export default function Slide({ movieTypes }) {
    if (!movieTypes || movieTypes.length === 0) {
        return null;
    }
    const settings = {
        arrows: true,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
    };

    return (
        <SlideWrapper>
            <SlideContainer {...settings}>
                {movieTypes &&
                    movieTypes.map((movie) => (
                        <SlideItem
                            key={movie.id}
                            id={movie.id}
                            year={movie.year}
                            poster={movie.medium_cover_image}
                            title={movie.title}
                        />
                    ))}
            </SlideContainer>
        </SlideWrapper>
    );
}

const SlideWrapper = styled.div`
    width: 950px;
    margin: 0 auto;
`;

Slide.propTypes = {
    movieTypes: PropTypes.array.isRequired,
};

const SlideContainer = styled(Slider)`
    .slick-list {
        padding-top: 30px;
    }
`;
