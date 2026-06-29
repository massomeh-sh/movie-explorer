import {type JSX, useState} from 'react';
import {RiMovie2AiFill} from "react-icons/ri";
import {IoSearchOutline} from "react-icons/io5";
import {getMovies} from "../services/movieApi.ts";
import {useMovie} from "../context/MovieContext.tsx";
import SideBar from "./SideBar.tsx";
import toast from "react-hot-toast";

function Header(): JSX.Element {
    const {dispatch} = useMovie();
    const [inputSearch, setInputSearch] = useState("");

    async function handleForm(e: React.SubmitEvent<HTMLFormElement>) {
        e.preventDefault();
        const query = inputSearch.trim();
        if (!query) return toast.error("Invalid query!");

        dispatch({type: "SET_QUERY", payload: inputSearch});
        setInputSearch("");
        try {
            dispatch({type: "FETCH_START"});
            const movies = await getMovies(inputSearch);
            dispatch({type: "FETCH_SUCCESS", payload: movies});
            toast.success("Movie found!");
        } catch (error) {
            const message =
                error instanceof Error
                    ? error.message
                    : "Unexpected error occurred";

            dispatch({type: "FETCH_FAIL", payload: message});
            toast.error(message);
        }
    }

    return (
        <div
            className="flex gap-10 md:gap-100 lg-150 xl:gap-200 xlg:gap-250 py-8 px-5 md:py-10 md:px-8 items-center border-b border-white/10">
            <div className="flex gap-5 md:gap-5">
                <SideBar/>
                <div className="flex gap-2 items-center">
                    <div className="text-4xl md:text-6xl">
                        <RiMovie2AiFill color="blue"/>
                    </div>
                    <h1 className="text-text text-3xl md:text-4xl">Movie<span className="text-primary">Explorer</span>
                    </h1>
                </div>
            </div>
            <form onSubmit={handleForm} className="w-full flex items-center border border-gray-400 rounded-xl px-4">
                <button type="submit">
                    <IoSearchOutline size={20} className="cursor-pointer text-grey-400"/>
                </button>
                <input value={inputSearch} onChange={(e) => setInputSearch(e.target.value)} name="search" type="text"
                       placeholder="Search for movie, TV shows.."
                       className="w-full py-4 px-3 pl-2 outline-none text-sm md:text-lg"/>
            </form>
        </div>
    );
}59

export default Header;