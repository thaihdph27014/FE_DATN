import { createBrowserRouter, Navigate } from "react-router-dom";



import TourPage from "./pages/Client/TourPage";
import DetailPage from "./pages/Client/detail";
import { Children } from "react";
import BookTour from "./pages/Client/Book_tour";

export const router = createBrowserRouter([
  {
    path: "/:id/tour",
    element: <DetailPage/>,
  },
  {
    path: "/booktour",
    element: <BookTour/>,
  },

  


    
  
  { path: "*", element: "Not Found Page" },
]);

