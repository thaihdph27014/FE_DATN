import { createBrowserRouter, Navigate } from "react-router-dom";
import HomePage from "./pages/homepage";
import TourPage from "./pages/TourPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <div><HomePage /></div>,
  }
,
    {path: "/tour",element:<TourPage/>},
    {path: "/tour",element:<TourPage/>},
    {path: "/tour",element:<TourPage/>},
    {path: "/tour",element:<TourPage/>},
    
  
  { path: "*", element: "Not Found Page" },
]);