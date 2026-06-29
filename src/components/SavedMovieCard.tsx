import type {JSX} from 'react';
import type {Movie} from "../types/movieTypes.ts";
import {IMAGE_BASE_URL} from "../services/movieApi.ts";
import {GrView} from "react-icons/gr";
import {MdOutlineDeleteForever} from "react-icons/md";
import {useMovie} from "../context/MovieContext.tsx";
import toast from "react-hot-toast";
import {useMovieDetails} from "../hooks/useMovieDetails.ts";
import MovieSpinner from "./MovieSpinner.tsx";


type SavedMovieCardProps = {
    movie: Movie
}

function SavedMovieCard({movie}: SavedMovieCardProps): JSX.Element {
    const {dispatch} = useMovie();
    const year = movie.release_date.slice(0, 4);

    const {loading, handleMovieDetails} = useMovieDetails();

    function handleDeleteMovie(id: number) {
        dispatch({type: "REMOVE_SAVED_MOVIE", payload: id})
        toast.success("Movie deleted successfully.");
    }

    function handleMovieClick(id: number) {
        handleMovieDetails(id);
    }

    return (
        <div
            className="flex items-center justify-between gap-5 border border-white/10 p-4 md:p-3 hover:border-violet-500 transition">
            <div className="flex gap-10">
                <img className="aspect-[2/3] w-25 md:w-40 object-cover shadow-xl"
                     src={`${IMAGE_BASE_URL}${movie.poster_path}`}/>
                <div className="flex flex-col gap-2">
                    <h2 className="text-xl mt-7 font-bold">{movie.original_title}</h2>
                    <p className="text-text-secondary">
                        {year}
                    </p>
                    <p className="text-yellow-400">⭐ {movie.vote_average.toFixed(1)} <span
                        className="text-text-secondary text-sm">IMDb</span></p>
                </div>
            </div>
            <div className="flex gap-2">
                <button
                    onClick={() => handleMovieClick(movie.id)}
                    className="cursor-pointer rounded-lg hover:bg-blue-950 p-2 flex gap-2 justify-center items-center">
                    <div className="text-lg md:text-3xl text-white">
                        <GrView/>
                    </div>
                    <span className="text-sm md:text-lg">View Details</span>
                </button>
                <button
                    onClick={() => handleDeleteMovie(movie.id)}
                    className="cursor-pointer rounded-lg bg-surface hover:bg-card p-2 flex gap-2 justify-center items-center">
                    {loading ? <MovieSpinner/> : <div className="text-lg md:text-3xl text-white">
                        <MdOutlineDeleteForever/>
                    </div>}
                </button>
            </div>
        </div>
    );
}

export default SavedMovieCard;