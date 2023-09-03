import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "../pages/home-page/Homepage.jsx"



import CommonLayout from "../layouts/CommonLayout.jsx";
import HowItWorks from "../pages/how-it-works/HowItWorks.jsx";
import Contact from "../pages/contact-page/Contact.jsx";
import ProductDetailsPage from "../pages/product-detail/ProductDetailsPage.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <CommonLayout/>,
        children:[
            {
                index: true,
                element: <HomePage/>,
            },
            {
                path:"/:id",
                element:<ProductDetailsPage/>
            },
            {
                path:"/nasil-calisir",
                element:<HowItWorks/>
            },
            {
                path:"/iletisim",
                element:<Contact/>
            }
        ]
    }
])


export default function AppRouter () {
    return <RouterProvider router={router} />
}