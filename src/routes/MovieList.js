import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import Movie from "../components/Movie";
import { listPageReLoading } from "../atom/Atoms";
import styled from "styled-components";
import Footer from "../components/Footer";
import ScarletonInMovieList from "../components/scarletonUI/ScarletonInMovieList";

export default function MovieList() {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const { num, detail } = useParams();
    const [reloading, setReloading] = useRecoilState(listPageReLoading);
    const getMovies = async () => {
        const json = await (
            await fetch(
                `https://yts.mx/api/v2/list_movies.json?page=${num}&${detail}&sort_by=year`
            )
        ).json();
        setMovies(json.data.movies);
        setLoading(false);
    };
    useEffect(() => {
        setReloading(false);
        setLoading(true);

        getMovies();
    }, [reloading]);

    console.log(movies);

    return (
        <Wrap>
            <InnerWarp>
                {loading ? (
                    <ScarletonInMovieList />
                ) : (
                    <Contents>
                        {movies.map((movie) => {
                            return (
                                <Movie
                                    key={movie.id}
                                    id={movie.id}
                                    year={movie.year}
                                    title={movie.title}
                                    summary={movie.summary}
                                    poster={movie.medium_cover_image}
                                    genres={movie.genres}
                                />
                            );
                        })}
                    </Contents>
                )}
                <Footer />
            </InnerWarp>
        </Wrap>
    );
}

const Wrap = styled.section`
    width: 100%;
    padding: 150px 0 0 0;
    background-color: #000;
`;

const InnerWarp = styled.div`
    width: 1300px;
    margin: 0 auto;
`;

const Contents = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    row-gap: 140px;
`;
