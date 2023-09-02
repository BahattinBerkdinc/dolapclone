import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "../pages/home-page/Homepage.jsx"



import CommonLayout from "../layouts/CommonLayout.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <CommonLayout/>,
        children:[
            {
                index: true,
                element: <HomePage/>
            }
        ]
    }
])


export default function AppRouter () {
    return <RouterProvider router={router} />
}