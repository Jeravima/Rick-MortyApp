import { RouterProvider } from "react-router";
import { appRouter } from "./routes/routes";
import { Footer } from "./components/Footer";

export const RickApp = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col bg-white dark:bg-gray-800 transition-colors">
        <div className="grow">
          <RouterProvider router={appRouter} />
        </div>

        <Footer />
      </div>
    </>
  );
};
