import {type JSX} from 'react';
import Header from "../components/Header.tsx";
import NoResult from "../components/NoResult.tsx";
import {useMovie} from "../context/MovieContext.tsx";
import MovieList from "../components/MovieList.tsx";

function Home(): JSX.Element {
    const {state} = useMovie();

    return (
        <div className="bg-bg min-h-screen">
            <Header/>
            {state.movies.length === 0 ? <NoResult/> : <MovieList/>}
        </div>
    );
}

export default Home;