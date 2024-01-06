import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import navList from "../atom/NavList";
import Slide from "../components/Slide";
import Footer from "../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { Loading } from "../components/Loading.styled";
import ScarletonInHome from "../components/scarletonUI/ScarletonInHome";

export default function Home() {
    const [loading, setLoading] = useState(true);
    const [movieTypes, setMovieTypes] = useState([]);
    useEffect(() => {
        const request = navList.map(({ path }) => {
            return axios.get("https://yts.mx/api/v2/list_movies.json?" + path, {
                params: {
                    limit: 10,
                    sort_by: "year",
                },
            });
        });

        axios.all(request).then(
            axios.spread(async (...response) => {
                const data = await response.map((res) => {
                    if (res.status === 200) {
                        return res.data.data.movies;
                    }
                });

                setMovieTypes(data);
                setLoading(false);
            })
        );
    }, []);
    console.log(navList);

    return (
        <Wrap>
            <InnerWrap>
                {navList.map(({ title, path }, index) => (
                    <MovieTypeList key={index}>
                        <MovieTypesTitle>
                            <Link to={`/page/${path}/1`}>
                                {title}
                                <FontAwesomeIcon
                                    icon={faArrowUpRightFromSquare}
                                    style={{ marginLeft: "5px" }}
                                />
                            </Link>
                        </MovieTypesTitle>
                        {loading ? (
                            <ScarletonInHome />
                        ) : (
                            <SlideWrap>
                                {movieTypes && movieTypes.length === 0 ? (
                                    <Loading>No movies found</Loading>
                                ) : (
                                    <Slide movieTypes={movieTypes[index]} />
                                )}
                            </SlideWrap>
                        )}
                    </MovieTypeList>
                ))}
                <Footer />
            </InnerWrap>
        </Wrap>
    );
}

const Wrap = styled.main`
    width: 100%;
`;

const InnerWrap = styled.section`
    width: 1300px;
    margin: 0 auto;
    padding: 150px 0 0 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const MovieTypeList = styled.article`
    margin-bottom: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const MovieTypesTitle = styled.h2`
    color: #f4a7bc;
    margin-bottom: 40px;
    font-size: 26px;
    transition: 0.2s ease-in-out;
    border-bottom: 3px solid transparent;
    border-radius: 1px;
    cursor: pointer;
    &:hover {
        border-bottom: 3px solid #f08ca7;
        color: #f08ca7;
    }
`;

const SlideWrap = styled.div``;
