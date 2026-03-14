import { Link,  } from "react-router"


export const NavBar = () => {
  return (
    <div className="flex shadow-xl  bg-amber-100 w-full min-h-15 p-4">
      <div className="flex justify-between w-full h-auto items-center">
        <div>
            <Link to='/' className="text-2xl font-extrabold">Rick and Morty</Link>
        </div>
        <div className="flex gap-4 ">
          <Link to="/humans">Humans</Link>
          <Link to="/estado">Estado</Link>
        </div>
      </div>
    </div>
  );
}
