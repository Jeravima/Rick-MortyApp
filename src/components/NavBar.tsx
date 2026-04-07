import { Link } from "react-router";
import image from "../assets/Rick_and_Morty.png";
import { ThemeToggle } from "./ThemeToggle";

export const NavBar = () => {
  return (
    <div className="relative flex items-center shadow-xl w-full p-4 mb-4 min-h-28">
      <div className=" absolute left-1/2 transform -translate-x-1/2 ">
        <Link to="/">
          <img src={image} alt="image" className="h-20 w-auto" />
        </Link>
      </div>

      <div className="ml-auto">
        <ThemeToggle />
      </div>
    </div>
  );
};
