import type {JSX} from 'react';
import { ImSpinner2 } from "react-icons/im";


function SearchSpinner(): JSX.Element {
      return (
          <div className="flex items-center justify-center mt-1 md:mt-20 lg:mt-10">
              <ImSpinner2 className="animate-spin text-5xl text-blue-500" />
          </div>
      );
    }

    export default SearchSpinner;