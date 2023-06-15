import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import Movie from "../components/Movie";
import { listPageReLoading } from "../atom/Atoms";

function MovieList() {
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

    // const getMovies = async () => {
    //     const json = await (
    //         await fetch(
    //             `https://yts-proxy.nomadcoders1.now.sh/list_movies.json?minimum_rating=9&sort_by=year`
    //         )
    //     ).json();
    //     setMovies(json.data.movies);
    //     setLoading(false);
    // };

    // useEffect(() => {
    //     getMovies();
    // }, []);

    return (
        <div>
            {loading ? (
                <h1>Loading...</h1>
            ) : (
                <div>
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
                </div>
            )}
        </div>
    );
}

export default MovieList;
