import type {JSX} from 'react';
import {useMovie} from "../context/MovieContext.tsx";
import BackHome from "../components/BackHome.tsx";
import {MdOutlineDeleteForever} from "react-icons/md";
import SavedMovieCard from "../components/SavedMovieCard.tsx";
import toast from "react-hot-toast";


function SavedMovies(): JSX.Element {
    const {state, dispatch} = useMovie();

    function handleDeleteAllSavedMovies() {
        if (state.movies.length === 0) return toast.error("There are no movies to delete right now!");
        dispatch({type: "REMOVE_ALL_SAVED_MOVIES"})
        toast.success("All Movies deleted successfully.");
    }

    return (
        <div className="bg-bg min-h-screen p-8 md:p-20 flex flex-col gap-10">
            <BackHome/>
            <div className="flex justify-between items-center mt-15">
                <div>
                    <h1 className="text-2xl md:text-3xl">Saved Movies</h1>
                    <p className="text-text-secondary md:text-lg">{state.savedMovies.length} movies</p>
                </div>
                <button
                    onClick={handleDeleteAllSavedMovies}
                    className="cursor-pointer p-3 rounded-lg border border-white/10 hover:bg-card text-text-secondary flex gap-2 items-center">
                    <MdOutlineDeleteForever size={20}/>
                    <span className="text-sm md:text-2xl">Clear All</span>
                </button>
            </div>
            {state.savedMovies.length === 0 &&
                <p className="text-center font-bold text-primary md:text-2xl">Please save your favorite movie :)</p>}
            <div>
                {state.savedMovies.map((movie) => <SavedMovieCard key={movie.id} movie={movie}/>)}
            </div>
        </div>
    );
}

export default SavedMovies;