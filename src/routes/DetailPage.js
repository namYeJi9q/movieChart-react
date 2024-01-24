import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Detail from "../components/Detail";
import { Loading } from "../components/Loading.styled";
import SkeletonInDetail from "../components/skeletonUI/SkeletonInDetail";

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
    console.log(movie.background_image_original);
    return (
        <Wrap>
            {loading ? (
                <SkeletonInDetail />
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
`;
