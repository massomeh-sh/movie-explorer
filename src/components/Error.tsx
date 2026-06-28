import type {JSX} from 'react';
import {useMovie} from "../context/MovieContext.tsx";
import SearchSpinner from "./SearchSpinner.tsx";

function Error(): JSX.Element {
    const {state} = useMovie();

    return (
        <>
            <div className="flex min-h-[70vh] flex-col items-center justify-center text-center">
                <h2 className="mt-4 text-3xl md:text-4xl font-bold">🎬 {state.error}</h2>
                <p className="mt-2 md:mt-4 md:text-lg text-text-secondary max-w-md">We couldn't find any movie matching your search. Try
                    another title or keyword.</p>
            </div>
            {
                state.loading && <SearchSpinner/>
            }
        </>
    );
}

export default Error;