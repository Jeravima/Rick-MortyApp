// import { Link } from "react-router";
// import image from "../assets/Rick_and_Morty.png";
// import { ThemeToggle } from "./ThemeToggle";
// import { SearchBar } from "./SearchBar";

// export const NavBar = () => {

//   return (
//     <div className="relative flex items-center shadow-xl w-full p-4 mb-4 min-h-28">
//       <div className=" absolute left-1/2 transform -translate-x-1/2 ">
//         <Link to="/">
//           <img src={image} alt="image" className="h-20 w-auto" />
//         </Link>
//       </div>

//       <div className="ml-auto flex-row sm:flex  items-center gap-4">
//         <SearchBar />
//         <ThemeToggle />
//       </div>
//     </div>
//   );
// };

import { Link } from "react-router";
import image from "../assets/Rick_and_Morty.png";
import { ThemeToggle } from "./ThemeToggle";
import { SearchBar } from "./SearchBar";

export const NavBar = () => {
  return (
    <div className="w-full p-4 mb-4 shadow-xl">
      <div className="hidden sm:flex items-center justify-between relative">
        <div className="flex-1 "></div>

        <div className="absolute left-1/2 transform -translate-x-1/2">
          <Link to="/">
            <img src={image} alt="image" className="h-20 w-auto" />
          </Link>
        </div>

        <div className="flex-1 flex items-center justify-end gap-4">
          <SearchBar />
          <ThemeToggle />
        </div>
      </div>

      <div className="sm:hidden flex flex-col items-center gap-4">
        <Link to="/">
          <img src={image} alt="image" className="h-16 w-auto" />
        </Link>
        <div className="flex gap-2">
          <SearchBar />
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
};