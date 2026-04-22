import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import SignIn from "../pages/SignIn";
import LandingLayout from "../layout/LandingLayout";
import Features from "../pages/Features";
import SignUp from "../pages/SignUp";
import ResetPassword from "../pages/ResetPassword";
import Dashboard from "../layout/DashboardLayout";
import Overview from "../pages/Overview";
import Assets from "../pages/Assets";
import Audits from "../pages/Audits";
import Reports from "../pages/Reports";
import Settings from "../pages/Settings";

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
            },
            {
                path: '/signin',
                element: <SignIn />
            },
            {
                path: '/signup',
                element: <SignUp />
            },
            {
                path: '/reset/password',
                element: <ResetPassword />
            },
        ] 
    },
    {
        path: '/dashboard',
        element: <Dashboard />,
        children: [
            {
                path: '/dashboard',
                element: <Overview />
            },
            {
                path: '/dashboard/assets',
                element: <Assets />
            },
            {
                path: '/dashboard/audits',
                element: <Audits />
            },
            {
                path: '/dashboard/reports',
                element: <Reports />
            },
            {
                path: '/dashboard/settings',
                element: <Settings />
            }
        ]
    }
])

export default router;