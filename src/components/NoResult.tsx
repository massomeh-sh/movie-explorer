import type {JSX} from 'react';
import Error from "./Error.tsx";
import SearchMovie from "./SearchMovie.tsx";
import {useMovie} from "../context/MovieContext.tsx";


function NoResult(): JSX.Element {
    const {state} = useMovie();

    return (
        <div className="px-8 py-8 md:px-10 md:py-10 lg:px-20 lg:py-20 ">
            {state.error ? <Error/> : <SearchMovie/>}
        </div>
    );
}

export default NoResult;