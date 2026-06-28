import {type JSX, useState} from "react";
import {HiOutlineMenu, HiHome} from "react-icons/hi";
import {IoClose} from "react-icons/io5";
import {
    MdFavoriteBorder,
    MdLocalFireDepartment,
    MdOutlineMail,
} from "react-icons/md";
import {FaStar} from "react-icons/fa";
import {PiFilmSlate} from "react-icons/pi";
import {IoSettingsOutline} from "react-icons/io5";
import type {ComingSoonItems} from "../types/movieTypes.ts";
import toast from "react-hot-toast";
import {useMovie} from "../context/MovieContext.tsx";


const comingSoonItems: ComingSoonItems[] = [
    {title: "Top Rated", icon: <FaStar/>},
    {title: "Popular", icon: <MdLocalFireDepartment/>},
    {title: "Now Playing", icon: <PiFilmSlate/>},
    {title: "Settings", icon: <IoSettingsOutline/>}
];

function SideBar(): JSX.Element {
    const {state, dispatch} = useMovie();
    const [isOpenSidebar, setIsOpenSidebar] = useState(false);
    const [isOpenModal, setIsOpenModal] = useState(false);

    function handleChangePage(page: string) {
        setIsOpenSidebar(false);
        dispatch({type: "SET_PAGE", payload: page});
    }

    return (
        <>
            <button onClick={() => setIsOpenSidebar((pre) => !pre)}>
                <div className="text-4xl md:text-6xl cursor-pointer">
                    <HiOutlineMenu/>
                </div>
            </button>
            {isOpenSidebar && (
                <>
                    <div onClick={() => setIsOpenSidebar(false)} className="z-40 fixed inset-0 bg-black/40"/>
                    <aside
                        className={"fixed top-0 left-0 z-50 flex h-screen w-80 md:w-120 lg:w-160 2xl:w-200 flex-col border-r border-white/10 bg-bg p-6"}>
                        <button className="self-end" onClick={() => setIsOpenSidebar(false)}>
                            <div className="text-4xl md:text-6xl cursor-pointer">
                                <IoClose/>
                            </div>
                        </button>
                        <p className="mt-8 mb-5 text-xs md:text-lg lg:text-2xl font-semibold uppercase tracking-[0.2em]">navigation</p>
                        <ul className="space-y-2">
                            <li>
                                <button
                                    onClick={() => handleChangePage("home")}
                                    className={`flex w-full items-center gap-3 cursor-pointer rounded-xl ${state.page === "home" ? "bg-primary" : "bg-surface"} px-4 py-3 font-medium text-white`}>
                                    <HiHome className="text-xl md:text-2xl lg:text-3xl"/>
                                    Home
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => handleChangePage("savedMovies")}
                                    className={`flex w-full items-center gap-3 cursor-pointer rounded-xl mt-4 ${state.page === "savedMovies" ? "bg-primary" : "bg-surface"} px-4 py-3 font-medium text-white`}>
                                    <MdFavoriteBorder className="text-xl md:text-2xl lg:text-3xl"/>
                                    Saved Movies
                                </button>
                            </li>
                            {comingSoonItems.map((item) => <li key={item.title} className={item.title}>
                                <button
                                    onClick={() => toast("🚀 Feature coming soon!", {
                                        duration: 2000,
                                        style: {
                                            fontSize: "12px",
                                            borderRadius: "10px",
                                            background: "#1f2937",
                                            color: "#fff",
                                            border: "1px solid #4f46e5",
                                            padding: "8px 4px",
                                        },
                                    })}
                                    className="group cursor-pointer flex justify-between items-center w-full rounded-xl px-4 py-3 text-zinc-500 opacity-70 transition hover:opacity-100">
                                <span className="flex items-center gap-5">
                                    <span className="text-xl md:text-2xl lg:text-3xl">{item.icon}</span>
                                    {item.title}
                                </span>
                                    <span
                                        className="invisible text-[6px] md:text-[8px] lg:text-[10px] font-semibold uppercase tracking-wider text-indigo-400 group-hover:visible">coming soon</span>
                                </button>
                            </li>)}
                        </ul>
                        <div className="my-8 border-t border-white/10">
                            <p className="mb-2 mt-8 text-xs md:text-lg lg:text-2xl font-semibold uppercase tracking-[0.2em]">
                                extras
                            </p>
                            <button
                                onClick={() => setIsOpenModal((pre) => !pre)}
                                className="flex cursor-pointer w-full items-center gap-3 rounded-xl px-4 py-3 text-zinc-300 transition hover:bg-primary hover:text-white">
                                <MdOutlineMail className="text-xl md:text-2xl lg:text-3xl"/>
                                Contact Me
                            </button>
                        </div>
                        <div className="mt-auto rounded-xl text-xl md:text-2xl border border-white/10 bg-white/5 p-4">
                            <p className="font-medium">
                                Movie-Explorer
                            </p>

                            <p className="mt-2 text-[10px] md:text-[12px] lg:text-[14px] leading-5 text-zinc-400">
                                Discover movies, explore details and save your favorites.
                            </p>

                            <p className="mt-4 text-[10px] md:text-[12px] lg:text-[14px] text-text-secondary">
                                React • TypeScript • TMDB
                            </p>
                        </div>
                    </aside>
                    {isOpenModal && (
                        <div
                            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
                            onClick={() => setIsOpenModal(false)}
                        >
                            <div
                                className="w-full max-w-md md:max-w-xl lg:max-w-3xl rounded-2xl bg-bg p-6 md:p-8 lg:p-10 shadow-xl"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <h2 className="text-2xl lg:text-3xl font-bold">
                                    Contact Me
                                </h2>

                                <p className="mt-4 text-text-secondary">
                                    Thanks for checking out my project!
                                </p>

                                <div className="mt-6 space-y-3">
                                    <a
                                        href="mailto:thisismassomeh@gmail.com"
                                        className="block rounded-lg bg-zinc-800 p-3 md:p-4 lg:p-6 hover:bg-zinc-700"
                                    >
                                        📧 Email
                                    </a>

                                    <a
                                        href="https://github.com/massomeh-sh"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block rounded-lg bg-zinc-800 p-3 md:p-4 lg:p-6 hover:bg-zinc-700"
                                    >
                                        💻 GitHub
                                    </a>
                                </div>

                                <button
                                    onClick={() => setIsOpenModal(false)}
                                    className="cursor-pointer mt-6 w-full rounded-lg bg-card py-3 md:p-4 lg:p-6 font-semibold hover:bg-primary"
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    )}
                </>
            )}

        </>
    );
}

export default SideBar;