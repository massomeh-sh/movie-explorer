export const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

export async function getMovies(query: string) {

    if (!navigator.onLine) {
        throw new Error("You are offline, please check your internet connection");
    }

    const res = await fetch(`https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(query)}&language=en-US`, {
        headers: {
            Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
            accept: 'application/json',
        }
    });


    if (!res.ok) {
        throw new Error("API request failed");
    }

    const data = await res.json();

    if (!data.results || data.results.length === 0) {
        throw new Error("No movie found!");
    }
    return data.results;
}

export async function getMovieDetails(movieId: number) {

    if (!navigator.onLine) {
        throw new Error("You are offline, please check your internet connection!");
    }

    const [movieRes, recommendations] = await Promise.all([
        fetch(`https://api.themoviedb.org/3/movie/${movieId}?append_to_response=credits`, {
            headers: {
                Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
                accept: 'application/json',
            }
        }),

        fetch(
            `https://api.themoviedb.org/3/movie/${movieId}/recommendations`, {
                headers: {
                    Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
                    accept: 'application/json',
                }
            }
        ),
    ])

    if (!movieRes.ok || !recommendations.ok) {
        throw new Error("API request failed");
    }

    const movie = await movieRes.json();
    const movieRecommendations = await recommendations.json();

    if (!movie || !movieRecommendations) {
        throw new Error("Could not find movie with id " + movieId);
    }
    return {...movie, movieRecommendations};
}