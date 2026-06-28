import type {JSX} from 'react';
import {IMAGE_BASE_URL} from "../services/movieApi.ts";
import type {Movie} from "../types/movieTypes.ts";

interface RelatedMovieCardProps {
    // Props here
    movie: Movie;
}

function RelatedMovieCard({movie}: RelatedMovieCardProps): JSX.Element {
    const {original_title, poster_path, release_date} = movie;
    const year = release_date.slice(0, 4)

    return (
        <div
            className="bg-card p-2 group relative overflow-hidden rounded-2xl border border-black min-w-1/3">
            <div className="aspect-[2/3] rounded-lg">
                <img src={`${IMAGE_BASE_URL}${poster_path}`} alt="movie picture"
                     className="h-full w-full object-cover mb-1"/>
            </div>
            <div className="flex flex-col">
                <div>
                    <h3 className="truncate font-semibold text-2xl mt-2">{original_title}</h3>
                </div>
                <span>{year}</span>
            </div>
        </div>
    );
}

export default RelatedMovieCard;