import {type JSX} from 'react';
import {useMovie} from "../context/MovieContext.tsx";
import SavedButton from "../components/SavedButton.tsx";
import {IMAGE_BASE_URL} from "../services/movieApi.ts";
import type {Movie} from "../types/movieTypes.ts";
import BackHome from "../components/BackHome.tsx";
import InfoRow from "../components/InfoRow.tsx";
import SearchSpinner from "../components/SearchSpinner.tsx";
import {dateFormatter} from "../utils/date.ts";
import SimilarMovies from "../components/SimilarMovies.tsx";

function MovieDetails(): JSX.Element {
    const {state} = useMovie();


    if (!state.movieDetails) {
        return <SearchSpinner/>;
    }
    const {
        backdrop_path,
        title,
        id,
        release_date,
        runtime,
        vote_average,
        overview,
        credits,
        genres,
        movieRecommendations,
    } = state.movieDetails;

    const relatedMovies = movieRecommendations?.results.map(movie => (movie)) ?? [];

    const director = credits.crew.find((p) => p.department === "Directing")?.name || "Unknown";

    const writer = credits.crew.find((p) => p.department === "Writing")?.name || "Unknown";

    const stars = credits.cast.slice(0, 4).map((p) => p.name).join(", ") || "Unknown";

    const movieGenres = genres.map((p) => p.name).join(", ");

    const formattedDate = dateFormatter(release_date);

    const year = release_date.slice(0, 4);

    const selectedMovie = state.movies.find((movie: Movie) => movie.id === id);
    if (!selectedMovie) {
        return <p>Movie not found.</p>
    }

    return (
        <>
            <div className="flex flex-col bg-bg min-h-screen block md:hidden">

                <div className="relative w-full aspect-video">

                    <img
                        src={`${IMAGE_BASE_URL}${backdrop_path}`}
                        className="w-full h-full object-cover"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-black/30 to-transparent"></div>

                    <SavedButton movie={selectedMovie}/>
                    <BackHome/>
                </div>
                <div className="px-6">
                    <div className="flex flex-col py-4 gap-3 text-text-secondary w-fit border-b border-gray-500 pb-5">
                        <h2 className="text-3xl font-bold text-text">{title}</h2>
                        <p className=" flex gap-3">
                            <span>{year}</span>
                            <span>•</span>
                            <span>{runtime}m</span>
                        </p>
                        <p>
                            <span className="text-2xl font-medium text-text">⭐ {vote_average.toFixed(1)}</span>
                            <span className=" ml-4">IMDb</span>
                        </p>
                        <p>{overview}</p>
                    </div>
                    <div className="border-b border-gray-500 pb-5">
                        <div className="grid grid-cols-[90px_1fr] gap-y-3 gap-x-6 mt-3 text-[12px]">
                            <InfoRow label="Director" value={director}/>
                            <InfoRow label="Writer" value={writer}/>
                            <InfoRow label="Stars" value={stars}/>
                            <InfoRow label="Genres" value={movieGenres}/>
                            <InfoRow label="Release" value={formattedDate}/>
                        </div>
                    </div>
                    <div className="py-4">
                        <h3 className="text-2xl mb-4">Similar Movies</h3>
                        <SimilarMovies relatedMovies={relatedMovies}/>
                    </div>
                </div>
            </div>
            <div className="hidden md:block bg-bg text-white">
                <div className="relative min-h-screen">
                    <img
                        src={`${IMAGE_BASE_URL}${backdrop_path}`}
                        alt={title}
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-bg via-black/50 to-transparent"/>
                    <SavedButton movie={selectedMovie}/>
                    <BackHome/>
                    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-full max-w-7xl px-8">
                        <div className="flex gap-8 items-end">
                            <img
                                src={`${IMAGE_BASE_URL}${state.movieDetails.poster_path}`}
                                alt={title}
                                className="w-64 rounded-xl shadow-2xl"
                            />
                            <div className="pb-4">
                                <h1 className="text-5xl font-bold">
                                    {title}
                                </h1>
                                <div className="flex gap-3 mt-4 text-gray-300">
                                    <span>{year}</span>
                                    <span>•</span>
                                    <span>{runtime} min</span>
                                </div>
                                <div className="mt-5">
                        <span className="text-2xl text-yellow-400">
                            ⭐ {vote_average.toFixed(1)}
                        </span>
                                    <span className="ml-2 text-gray-300">
                            IMDb
                        </span>
                                </div>
                                <p className="mt-6 max-w-3xl leading-8 text-gray-200">
                                    {overview}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="max-w-7xl mx-auto px-8 mt-12">
                    <div className="grid grid-cols-[150px_1fr] gap-y-5 text-sm">
                        <InfoRow label="Director" value={director}/>
                        <InfoRow label="Writer" value={writer}/>
                        <InfoRow label="Stars" value={stars}/>
                        <InfoRow label="Genres" value={movieGenres}/>
                        <InfoRow label="Release" value={formattedDate}/>
                    </div>
                </div>
                <div className="max-w-7xl mx-auto px-8 mt-14">
                    <h2 className="text-3xl font-bold mb-6">
                        Similar Movies
                    </h2>
                    <SimilarMovies relatedMovies={relatedMovies}/>
                </div>
            </div>
        </>
    );
}

export default MovieDetails;