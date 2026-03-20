import { Link,  } from "react-router"
import image from "../assets/Rick_and_Morty.png"


export const NavBar = () => {
  return (
    <div className="flex shadow-xl  w-full min-h-15 p-4 ">
      <div className=" mx-auto h-auto  flex">
        
          <Link to="/" >
           <img src={image} alt="image" className="h-20 w-auto"/>
          </Link>
        
       
      </div>
    </div>
  );
}
