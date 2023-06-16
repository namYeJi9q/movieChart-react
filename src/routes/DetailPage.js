import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
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
    return (
        <Wrap>
            {loading ? (
                <Loading>Loading...</Loading>
            ) : (
                <Detail
                    background_image_original={movie.background_image_original}
                    large_poster={movie.large_cover_image}
                    url={movie.url}
                    title={movie.title}
                    year={movie.year}
                    rating={movie.rating}
                    runtime={movie.runtime}
                    genres={movie.genres}
                    summary={movie.description_full}
                    download_count={movie.download_count}
                />
            )}
        </Wrap>
    );
}

const Wrap = styled.main`
    width: 100%;
    height: 100%;
    background-color: #000;
    border: 1px solid #000;
`;

const Loading = styled.h3`
    text-align: center;
    margin-top: 240px;
    color: #fff;
`;
