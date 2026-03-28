import { Link } from "react-router";
import image from "../assets/Rick_and_Morty.png";

export const NavBar = () => {
  return (
    <div className="flex shadow-xl   w-full p-4 mb-4">
      <div className=" mx-auto h-auto  flex">
        <Link to="/">
          <img src={image} alt="image" className="h-20 w-auto" />
        </Link>
      </div>
    </div>
  );
};
