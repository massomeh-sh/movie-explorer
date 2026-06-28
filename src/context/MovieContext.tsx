import {createContext, type ReactNode, useReducer, useContext} from "react";
import type {Action, MovieContextType, MovieState} from "../types/movieTypes.ts";

type MovieContextProviderProps = {
    children: ReactNode;
}

const initialState: MovieState = {
    movies: [],
    loading: false,
    error: null,
    query: "",
    selectedMovie: null,
    movieDetails: null,
    savedMovies: [],
    page: "home"
}

const MovieContext = createContext<MovieContextType | null>(null);

function MovieReducer(state: MovieState, action: Action): MovieState {
    switch (action.type) {
        case "FETCH_START":
            return {
                ...state,
                loading: true,
                error: null,
                movies: []
            }
        case "FETCH_SUCCESS":
            return {
                ...state,
                loading: false,
                error: null,
                movies: action.payload,
            }
        case "FETCH_FAIL":
            return {
                ...state,
                loading: false,
                error: action.payload,
                movies: []
            }
        case "SET_QUERY":
            return {
                ...state,
                query: action.payload,
            }
        case "SET_SELECT_MOVIE":
            return {
                ...state,
                selectedMovie: action.payload,
            }
        case "UNDO_SELECT_MOVIE":
            return {
                ...state,
                selectedMovie: null,
                page: "home"
            }

        case "SET_MOVIE_DETAILS":
            return {
                ...state,
                movieDetails: action.payload,
            }
        case "ADD_SAVED_MOVIE":
            return {
                ...state,
                savedMovies: [...state.savedMovies, action.payload],
            }
        case "REMOVE_ALL_SAVED_MOVIES":
            return {
                ...state,
                savedMovies: [],
            }
        case "REMOVE_SAVED_MOVIE":
            return {
                ...state,
                savedMovies: state.savedMovies.filter((m) => m.id !== action.payload),
            }
        case "SET_PAGE":
            return {
                ...state,
                page: action.payload,
            }
        default:
            return state;
    }
}

function MovieContextProvider({children}: MovieContextProviderProps) {
    const [state, dispatch] = useReducer(MovieReducer, initialState);

    return (
        <MovieContext.Provider value={{state, dispatch}}>
            {children}
        </MovieContext.Provider>)

}

/* eslint-disable react-refresh/only-export-components */
export function useMovie(): MovieContextType {
    const context = useContext(MovieContext);
    if (!context) {
        throw new Error("useMovie must be used inside MovieProvider");
    }
    return context;
}

export default MovieContextProvider;