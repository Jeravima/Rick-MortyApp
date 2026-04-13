
import { Link } from "react-router";
import image from "../assets/Rick_and_Morty.png";
import { ThemeToggle } from "./ThemeToggle";
import { SearchBar } from "./SearchBar";

export const NavBar = () => {
  return (
    <div className="w-full p-4 mb-4 shadow-xl">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="hidden sm:flex flex-1"></div>

        <div className="shrink-0 sm:flex-1 flex justify-center">
          <Link to="/">
            <img src={image} className="h-20 w-auto" alt="image" />
          </Link>
        </div>

        <div className="flex gap-2 justify-center sm:justify-end sm:flex-1">
          <SearchBar />
          <ThemeToggle />
        </div>
      </div>
    </div>
    // <div className="w-full p-4 mb-4 shadow-xl">

    //   <div className="hidden sm:flex  items-center   justify-between relative">
    //     {/* <div className="flex-1  "></div> */}

    //     <div className="absolute left-1/2 transform -translate-x-1/2 ">
    //       <Link to="/">
    //         <img src={image} alt="image" className="h-20 w-auto" />
    //       </Link>
    //     </div>
    //     <div className="flex-1 flex items-center justify-end gap-4">
    //       <SearchBar />
    //       <ThemeToggle />
    //     </div>

    //   </div>

    /* <div className="sm:hidden flex flex-col items-center gap-4">
        <Link to="/">
          <img src={image} alt="image" className="h-16 w-auto" />
        </Link>
        <div className="flex gap-2">
          <SearchBar />
          <ThemeToggle />
        </div>
      </div> */
    // </div>
  );
};