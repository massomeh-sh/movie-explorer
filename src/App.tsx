import Home from "./pages/Home.tsx";
import {useMovie} from "./context/MovieContext.tsx";
import MovieDetails from "./pages/MovieDetails.tsx";
import SavedMovies from "./pages/SavedMovies.tsx";

function App() {
    const {state} = useMovie();

    if (state.page === "details") {
        return (
            <MovieDetails/>
        )
    }

    if (state.page === "savedMovies") {
        return (
            <SavedMovies/>
        )
    }

    return (
        <Home/>
    )
}

export default App
