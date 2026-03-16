import { RouterProvider } from "react-router";
import { appRouter } from "./routes/routes";
import { Footer } from "./components/Footer";

export const RickApp = () => {
  return (
    <>
      <RouterProvider router={appRouter} />

      <Footer />
    </>
  );
};
