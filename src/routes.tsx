import { createBrowserRouter, Navigate } from "react-router-dom";



import TourPage from "./pages/Client/TourPage";
import DetailPage from "./pages/Client/detail";
import { Children } from "react";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <DetailPage/>,
    children:[

      {
        path:'/tour',
        element:<TourPage/>
      }
    ]
  },
  


    
  
  { path: "*", element: "Not Found Page" },
]);

