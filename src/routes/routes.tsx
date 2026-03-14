
import { createBrowserRouter } from "react-router";
import { Humans } from "../pages/Humans";
import { Estado } from "../pages/Estado";
import { Home } from "../pages/Home";


export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path:'/humans',
    element: <Humans/>
  },

  {
    path:'/estado',
    element: <Estado/>
  },
  {
    path:'*',
    element:<Home/>
  }
]);