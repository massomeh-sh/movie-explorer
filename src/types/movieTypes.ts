import {type Dispatch, type JSX} from "react";

export interface Movie {
    id: number;
    original_title: string;
    overview: string;
    poster_path: string | undefined;
    backdrop_path: string | null;
    release_date: string;
    vote_average: number;
    genre_ids: number[];
}

export type MovieContextType = {
    state: MovieState;
    dispatch: Dispatch<Action>;
};

export interface MovieState {
    movies: Movie[],
    loading: boolean,
    error: string | null,
    query: string,
    selectedMovie: number | null,
    savedMovies: Movie[],
    movieDetails: MovieDetails | null,
    page: string
}

export interface Genre {
    id: number;
    name: string;
}

export interface Cast {
    id: number;
    name: string;
    character: string;
    profile_path: string | undefined;
}

export interface Crew {
    name: string;
    department: string;
}

export interface Credits {
    cast: Cast[]
    crew: Crew[]
}

export interface Related {
    results: Movie[];
}

export interface MovieDetails {
    id: number;
    title: string;
    overview: string;
    release_date: string;
    release_dates: string;
    runtime: number;
    poster_path: string | null;
    backdrop_path: string | undefined;
    vote_average: number;
    vote_count: number;

    genres: Genre[];
    credits: Credits;
    movieRecommendations: Related;
}

export interface MovieError {
    Response: "False";
    Error: string;
}

export interface Rating {
    Source: string;
    Value: string;
}

export type Action = { type: "FETCH_START" } | { type: "FETCH_SUCCESS", payload: Movie[] } | {
    type: "FETCH_FAIL",
    payload: string
} | { type: "SET_QUERY", payload: string } | { type: "SET_SELECT_MOVIE", payload: number | null } | {
    type: "SET_MOVIE_DETAILS",
    payload: MovieDetails
} | { type: "ADD_SAVED_MOVIE", payload: Movie } | { type: "REMOVE_SAVED_MOVIE", payload: number } | {
    type: "UNDO_SELECT_MOVIE"
} | { type: "SET_PAGE", payload: string } | { type: "REMOVE_ALL_SAVED_MOVIES" };

export interface ComingSoonItems {
    title: string;
    icon: JSX.Element;
}
