import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Detail from "../components/Detail";

export default function DetailPage() {
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [movie, setMovie] = useState({});

    useEffect(() => {
        fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
            .then((response) => response.json())
            .then((json) => {
                setMovie(json.data.movie);
                setLoading(false);
            });
    }, []);

    console.log(movie);

    return (
        <div>
            {loading ? (
                <h3>Loading...</h3>
            ) : (
                <Detail
                    background_image_original={movie.background_image_original}
                    medium_cover_image={movie.medium_cover_image}
                    url={movie.url}
                    title_long={movie.title_long}
                    rating={movie.rating}
                    runtime={movie.runtime}
                    genres={movie.genres}
                    download_count={movie.download_count}
                />
            )}
        </div>
    );
}
