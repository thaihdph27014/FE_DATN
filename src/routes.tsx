import { createBrowserRouter, Navigate } from "react-router-dom";
import HomePage from "./pages/homepage";
import TourPage from "./pages/TourPage";
import NewPage from "./pages/NewPage";
import TitelPage from "./pages/TitelPage";
import Signup from "./auth/signup";
import SignIn from "./auth/signin";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <div><HomePage /></div>,
  }
,
    {path: "/tour",element:<TourPage/>},
    {path: "/New",element:<NewPage/>},
    {path: "/title",element:<TitelPage/>},
    {path: "/tour",element:<TourPage/>},
    {path: "/signin",element:<SignIn/>},
    {path: "/signup",element:<Signup/>},
  
  { path: "*", element: "Not Found Page" },
]);