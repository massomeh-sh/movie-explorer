import {type JSX} from 'react';
import {BsBookmark, BsBookmarkFill} from "react-icons/bs";
import {useMovie} from "../context/MovieContext.tsx";
import type {Movie} from "../types/movieTypes.ts";

type SavedButtonProps = {
    movie: Movie;
}

function SavedButton({movie}: SavedButtonProps): JSX.Element {
    const {state, dispatch} = useMovie();

    const isSaved = state.savedMovies.some((m: Movie) => m.id === movie.id);

    const toggleSave = () => {
        if (isSaved) {
            dispatch({type: "REMOVE_SAVED_MOVIE", payload: movie.id})
        } else {
            dispatch({type: "ADD_SAVED_MOVIE", payload: movie})
        }
    }

    return (
        <button
            onClick={toggleSave}
            className="cursor-pointer absolute right-3 top-6 text-primary transition">
            {isSaved ? <BsBookmarkFill size={28}/> :
                <BsBookmark size={28}/>}
        </button>
    );
}

export default SavedButton;