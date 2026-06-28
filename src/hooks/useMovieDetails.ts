import {useState} from "react";
import {useMovie} from "../context/MovieContext.tsx";
import toast from "react-hot-toast";
import {getMovieDetails} from "../services/movieApi.ts";

export function useMovieDetails() {
    const [loading, setLoading] = useState<boolean>(false);
    const {dispatch} = useMovie();

    async function handleMovieDetails(id: number) {
        setLoading(true);
        try {
            const movieDetails = await getMovieDetails(id);
            dispatch({type: "SET_MOVIE_DETAILS", payload: movieDetails});
            dispatch({type: "SET_SELECT_MOVIE", payload: id});
            dispatch({type: "SET_PAGE", payload: "details"});
            setLoading(false);

        } catch (err) {
            if (err instanceof Error) {
                toast.error(err.message);
            }
            setLoading(false);
        }
    }

    return {loading, handleMovieDetails};
}