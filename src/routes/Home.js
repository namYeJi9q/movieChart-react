import { useEffect, useState } from "react";
import Movie from "../components/Movie";

function Home() {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);

    const getMovies = async () => {
        const json = await (
            await fetch(
                `https://yts-proxy.nomadcoders1.now.sh/list_movies.json?minimum_rating=9&sort_by=year`
            )
        ).json();
        setMovies(json.data.movies);
        setLoading(false);
    };

    useEffect(() => {
        getMovies();
    }, []);
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

export default Home;
