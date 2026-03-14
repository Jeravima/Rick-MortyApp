import { createBrowserRouter } from "react-router";
import { Humans } from "../pages/Humans";
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
        path: "/humans",
        element: <Humans />,
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
