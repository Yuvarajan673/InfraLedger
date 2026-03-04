import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import LandingLayout from "../layout/LandingLayout";
import Features from "../pages/Features";

const router = createBrowserRouter([
    {
        path: '/',
        element: <LandingLayout />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/features',
                element: <Features />
            }
        ]
    }
])


export default router;