import type {JSX} from 'react';
import {useMovie} from "../context/MovieContext.tsx";
import MovieCard from "./MovieCard.tsx";
import type {Movie} from "../types/movieTypes.ts";

function MovieList(): JSX.Element {
    const {state} = useMovie();

    return (
        <div className="py-8 px-5 md:py-15 md:px-12 lg:py-19 lg:px-16 flex flex-col gap-8">
            <div>
                <p className="text-2xl md:text-3xl lg:text-4xl">Searched results for <span
                    className="text-primary">"{state.query}"</span></p>
                <p className="text-text-secondary md:text-2xl">{state.movies.length} results found</p></div>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6 md:gap-8">
                {state.movies.map((movie: Movie) => <MovieCard key={movie.id} movie={movie}/>)}
            </div>
        </div>
    );
}

export default MovieList;