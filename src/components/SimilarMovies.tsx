import {type JSX, useRef, useState, useEffect} from 'react';
import {FaChevronLeft, FaChevronRight} from "react-icons/fa";
import RelatedMovieCard from "./RelatedMovieCard.tsx";
import type {Movie} from "../types/movieTypes.ts";

type SimilarMoviesProps = {
    relatedMovies: Movie[];
};

function SimilarMovies({relatedMovies}: SimilarMoviesProps): JSX.Element {
    const sliderRef = useRef<HTMLDivElement | null>(null);

    const [showLeftArrow, setShowLeftArrow] = useState(false);
    const [showRightArrow, setShowRightArrow] = useState(true);

    const updateArrows = () => {
        if (!sliderRef.current) return;
        const {scrollLeft, scrollWidth, clientWidth} = sliderRef.current;

        setShowLeftArrow(scrollLeft > 0);

        const isEnd = scrollLeft + clientWidth >= scrollWidth;
        setShowRightArrow(!isEnd);
    };

    const scrollLeft = () => {
        console.log("clickedLeft");
        sliderRef.current?.scrollBy({
            left: -300,
            behavior: "smooth",
        });
    };

    const scrollRight = () => {
        console.log("clickedRight");
        console.log(sliderRef.current);
        sliderRef.current?.scrollBy({
            left: 300,
            behavior: "smooth",
        });
    };

    useEffect(() => {
        updateArrows();
    }, [relatedMovies]);

    return (
        <div className="relative">
            {showLeftArrow && (
                <button
                    onClick={scrollLeft}
                    className="cursor-pointer absolute left-2 top-1/2 -translate-y-1/2 z-10"
                >
                    <FaChevronLeft size={30}/>
                </button>
            )}

            <div className="relative w-full">
                <div ref={sliderRef} onScroll={updateArrows} className="flex gap-4 overflow-x-auto scrollbar-none scroll-smooth">
                    {relatedMovies.map((movie) => (
                        <RelatedMovieCard key={movie.id} movie={movie}/>
                    ))}
                </div>
            </div>

            {showRightArrow && (
                <button
                    onClick={scrollRight}
                    className="absolute right-2 top-1/2 -translate-y-1/2 z-10 cursor-pointer"
                >
                    <FaChevronRight size={30}/>
                </button>
            )}
        </div>
    );
}

export default SimilarMovies;