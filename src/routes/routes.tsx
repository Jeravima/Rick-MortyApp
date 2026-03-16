import { createBrowserRouter } from "react-router";
import { Especies } from "../pages/Especies";
import { Estado } from "../pages/Estado";
import { Home } from "../pages/Home";
import { Layout } from "../layout/Layout";

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "/especies",
        element: <Especies />,
      },

      {
        path: "/estado",
        element: <Estado />,
      },
      {
        path: "*",
        element: <Home />,
      },
    ],
  },
]);
