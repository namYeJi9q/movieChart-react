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
    return (
        <Wrap>
            <InnerWrap>
                {navList.map(({ title, path }, index) => (
                    <MovieTypeList>
                        <h2 key={index}>
                            <Link to={`/page/${path}`}>{title}</Link>
                        </h2>
                        {loading ? (
                            <h3>Loading...</h3>
                        ) : (
                            <ul>
                                {movieTypes && movieTypes.length === 0 ? (
                                    <h3>Loading...</h3>
                                ) : (
                                    <Slide movieTypes={movieTypes[index]} />
                                )}
                            </ul>
                        )}
                    </MovieTypeList>
                ))}
            </InnerWrap>
        </Wrap>
    );
}

const Wrap = styled.main`
    width: 100%;
    height: 100%;
`;

const InnerWrap = styled.section`
    padding: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const MovieTypeList = styled.article`
    margin-bottom: 100px;
`;
