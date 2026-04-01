import { createBrowserRouter } from "react-router";
import { Home } from "../pages/Home";
import { Layout } from "../layout/Layout";
import { CharacterDetails } from "../pages/CharacterDetails";

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },

      {
        path: "character/:id",
        element: <CharacterDetails />,
      },

      {
        path: "*",
        element: <Home />,
      },
    ],
  },
]);
