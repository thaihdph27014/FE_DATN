import { createBrowserRouter, Navigate } from "react-router-dom";
import LayoutWebsite from "./components/layouts/LayoutWebsite";
import DetailPage from "./pages/Client/detail";
import Contact from "./pages/Client/contact";

export const router = createBrowserRouter([
    {
        path: "/",element:<LayoutWebsite/>
    },
    {
        path: "/detail",element:<DetailPage/>
    },

    {
        path: "/lienhe",element:<Contact/>
    },

    { path: "*", element: "Not Found Page" },
]);
