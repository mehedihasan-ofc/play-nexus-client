import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Main from "../layouts/Main";
import Login from "../pages/Auth/Login/Login";
import Register from "../pages/Auth/Register/Register";
import Home from "../pages/Home/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import ToyDetails from "../pages/ToyDetails/ToyDetails";
import AddToy from "../pages/AddToy/AddToy";
import AllToys from "../pages/AllToys/AllToys";
import MyToys from "../pages/MyToys/MyToys";
import PrivateRoutes from "./PrivateRoutes";
import UpdateToy from "../pages/UpdateToy/UpdateToy";
import Blogs from "../pages/Blogs/Blogs";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/all-toys',
                element: <AllToys></AllToys>
            },
            {
                path: '/my-toys',
                element: <PrivateRoutes><MyToys></MyToys></PrivateRoutes>
            },
            {
                path: '/add-toy',
                element: <PrivateRoutes><AddToy></AddToy></PrivateRoutes>
            },
            {
                path: '/toy/:id',
                element: <PrivateRoutes><ToyDetails></ToyDetails></PrivateRoutes>,
                loader: ({ params }) => fetch(`https://play-nexus-server.vercel.app/toy/${params.id}`)
            },
            {
                path: '/update/:id',
                element: <UpdateToy></UpdateToy>,
                loader: ({ params }) => fetch(`https://play-nexus-server.vercel.app/toy/${params.id}`)
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    },
]);

export default router;