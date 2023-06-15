import { useState } from "react";
import Movie from "./Movie";

export default function Slide({ movieTypes }) {
    const [trans, setTrans] = useState(0);

    const onClickL = () => {
        if (trans >= 0) {
            return;
        }
        setTrans((current) => current + 350);
    };
    const onClickR = () => {
        if (trans <= -2450) {
            return;
        }
        setTrans((current) => current - 350);
    };
    return (
        <div>
            <div>
                <div
                    style={{
                        transform: `translateX(${trans}px)`,
                    }}
                >
                    {movieTypes.map((movie) => (
                        <Movie
                            key={movie.id}
                            id={movie.id}
                            year={movie.year}
                            poster={movie.medium_cover_image}
                            title={movie.title}
                            genres={movie.genres}
                        />
                    ))}
                </div>
            </div>
            <div>
                <button onClick={onClickL}>
                    <i class="fas fa-caret-square-left"></i>
                </button>
                <button onClick={onClickR}>
                    <i class="fas fa-caret-square-right"></i>
                </button>
            </div>
        </div>
    );
}
