import {type JSX} from 'react';
import type {Movie} from "../types/movieTypes.ts";
import { IMAGE_BASE_URL} from "../services/movieApi.ts";
import SavedButton from "./SavedButton.tsx";
import MovieSpinner from "./MovieSpinner.tsx";
import {useMovieDetails} from "../hooks/useMovieDetails.ts";


interface CardProps {
    // Props here
    movie: Movie;
}

function MovieCard({movie}: CardProps): JSX.Element {
    const {original_title, poster_path, id, release_date} = movie;
    const year = release_date.slice(0, 4)

    const {loading, handleMovieDetails} = useMovieDetails();

    function handleMovieClick(id: number) {
        handleMovieDetails(id)
    }

    return (
        <div
            className="bg-card p-2 group relative overflow-hidden rounded-2xl border border-black transition-all duration-300 hover:-translate-y-1 hover:border-surface hover:shadow-xl hover:shadow-blue-400/10">
            <SavedButton movie={movie}/>
            <img src={`${IMAGE_BASE_URL}${poster_path}`} alt="movie picture"
                 className="aspect-2/3 w-full object-cover mb-3"/>
            <div className="flex flex-col gap-2 md:gap-4">
                <div className="space-y-2">
                    <h3 className="truncate font-semibold text-2xl">{original_title}</h3>
                </div>
                <span>{year}</span>
                <div className="flex gap-5">
                    <p onClick={() => handleMovieClick(id)}
                       className="cursor-pointer text-text-secondary hover:text-primary border-b w-fit mb-2">CLick to
                        see
                        the
                        details.</p>
                    {loading && <MovieSpinner/>}
                </div>
            </div>
        </div>
    );
}

export default MovieCard;