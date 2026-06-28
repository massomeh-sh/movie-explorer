import type {JSX} from 'react';
import {IoArrowBackCircle} from "react-icons/io5";
import {useMovie} from "../context/MovieContext.tsx";


function BackHome(): JSX.Element {
    const {dispatch} = useMovie();

    return (
        <div className="cursor-pointer absolute left-4 top-[9px] text-primary transition">
            <IoArrowBackCircle onClick={() => dispatch({type: "UNDO_SELECT_MOVIE"})} size={38}/>
        </div>
    );
}

export default BackHome;