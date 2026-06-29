import type {JSX} from 'react';
import {FaSpinner} from "react-icons/fa";

function MovieSpinner(): JSX.Element {
    return (
        <div className="text-sm mt-1 md:text-2xl text-blue-200">
            <FaSpinner className="animate-spin"/>
        </div>
    );
}

export default MovieSpinner;