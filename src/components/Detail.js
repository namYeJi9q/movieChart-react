export default function Detail({
    background_image_original,
    medium_cover_image,
    url,
    title_long,
    rating,
    runtime,
    genres,
    download_count,
}) {
    return (
        <div>
            <img src={medium_cover_image} />
            <div>
                <h1>
                    <a href={url} target="_blank">
                        {title_long}
                    </a>
                </h1>
                <ul>
                    <li>Rating {rating}</li>
                    <li>Runtime {runtime}</li>
                    <li>Download {download_count}</li>
                    <li>
                        Genres
                        <ul>
                            {genres.map((genre) => (
                                <li>{genre}</li>
                            ))}
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    );
}
