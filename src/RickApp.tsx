import { RouterProvider } from "react-router";
import { appRouter } from "./routes/routes";
import { Footer } from "./components/Footer";

export const RickApp = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col">

        
        <div className="grow">
          <RouterProvider router={appRouter} />
        </div>

        <Footer />
      </div>
    </>
  );
};
