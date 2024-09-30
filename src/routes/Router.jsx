import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import EstateDetails from "../pages/Home/EstateDetails";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import UpdateProfile from "../pages/UpdateProfile/UpdateProfile";
import ProtectedRoute from "./ProtectedRoute";
import Service from "../pages/Service/Service";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import BestEstate from "../pages/BestEstate/BestEstate";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: ()=>fetch('/estate.json'),
            },
            {
                path: '/login',
                element:<Login></Login>
            },
            {
                path: '/register',
                element:<Register></Register>
            },
            {
                path: '/estate/:id', 
                element: <EstateDetails></EstateDetails>,
                loader: ()=>fetch('/estate.json')
            },
            {
                path: '/updateProfile',
                element: <ProtectedRoute><UpdateProfile></UpdateProfile></ProtectedRoute>
            },
            {
                path: '/bestEstate',
                element: <ProtectedRoute><BestEstate></BestEstate></ProtectedRoute>
            },
            {
                path: '/service',
                element: <Service></Service>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            }
        ]
            
    }
])

export default router;