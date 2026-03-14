import { Outlet } from "react-router"
import { NavBar } from "../components/ui/NavBar"

export const Layout = () => {
  return (
    <>
    
    <div>
    <NavBar/>

    <Outlet/>
    </div>
    
    
    </>
  )
}
