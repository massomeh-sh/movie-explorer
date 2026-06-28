import type {JSX} from 'react';
import {useMovie} from "../context/MovieContext.tsx";
import SearchSpinner from "./SearchSpinner.tsx";
import backgroundImg from "../assets/wp1945939-movie-posters-wallpapers.jpg";

function SearchMovie(): JSX.Element {
    const {state} = useMovie();

    return (
        <>
            <div className="min-h-[70vh] flex flex-col justify-center items-center">
                <div className="flex flex-col gap-8">
                    <div>
                        <h1 className="text-3xl lg:text-5xl">Find your next favorite movie</h1>
                        <p className="text-text-secondary md:text-lg">Search for any movie to discover details, cast,
                            ratings and
                            add
                            them to your saved list.</p>
                    </div>
                    <img src={backgroundImg} alt="Background image" className="w-full max-w-7xl"/>
                </div>
            </div>
            {
                state.loading && <SearchSpinner/>
            }
        </>

    )
        ;
}

export default SearchMovie;