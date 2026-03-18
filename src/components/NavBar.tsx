import { Link,  } from "react-router"


export const NavBar = () => {
  return (
    <div className="flex shadow-xl  w-full min-h-15 p-4 bg-[#00FFFF]">
      <div className="  w-full h-auto  text-center">
        
          <Link to="/" className="text-4xl font-extrabold text-black ">
            Rick and Morty App
          </Link>
        
       
      </div>
    </div>
  );
}
