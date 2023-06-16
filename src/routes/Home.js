import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import navList from "../atom/NavList";
import Slide from "../components/Slide";

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
    // console.log(movieTypes);
    return (
        <Wrap>
            <InnerWrap>
                {navList.map(({ title, path }, index) => (
                    <MovieTypeList key={index}>
                        <h2>
                            <Link to={`/page/${path}/1`}>{title}</Link>
                        </h2>
                        {loading ? (
                            <Loading>Loading...</Loading>
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
            </InnerWrap>
        </Wrap>
    );
}

const Wrap = styled.main`
    width: 100%;
    background-color: #000;
`;

const InnerWrap = styled.section`
    width: 1300px;
    margin: 0 auto;
    padding: 150px;
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
    > h2 {
        color: #fff;
        margin-bottom: 40px;
    }
`;
const Loading = styled.h3`
    text-align: center;
    margin-top: 240px;
    color: #fff;
`;

const SlideWrap = styled.div`
    width: 1300px;
    height: 400px;
    align-self: flex-end;
`;
