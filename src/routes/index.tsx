import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/Layout/MainLayout.tsx";
import Home from "../pages/Home.tsx";
import BookDetails from "../pages/BookDetails.tsx";
import Error404 from "../pages/404.tsx";

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/book-detail/${id}",
        element: <BookDetails />,
      },
    ],
  },
]);
