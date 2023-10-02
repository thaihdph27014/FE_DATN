import { createBrowserRouter, Navigate } from "react-router-dom";

import HomePage from "./homepage";
export const router = createBrowserRouter([
    {
        path: "/",
        element: <div><HomePage /></div>,
    
    },
    { path: "*", element: "Not Found Page" },
]);
