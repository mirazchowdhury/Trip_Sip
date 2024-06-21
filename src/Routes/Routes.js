import { createBrowserRouter } from "react-router-dom";
import AddService from "../Components/AddService/AddService";
import AllService from "../Components/AllService/AllService";
import Contact from "../Components/Contact/Contact";
import Home from "../Components/Home/Home";
import HomePage from "../Components/HomePage/HomePage";
import Update from "../Components/Update/Update";
import Main from "../Main/Main";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <HomePage></HomePage>
            },
            {
                path: '/service',
                element: <AllService></AllService>
            },
            {
                path: '/banner',
                element: <Home></Home>
            },
            {
                path: '/contactUs',
                element: <Contact></Contact>
            },
            {
                path: 'addService',
                element: <AddService></AddService>
            },
            {
                path: 'update/:id',
                element: <Update></Update>,
                loader: ({ params }) => fetch(`https://trip-sip-server.vercel.app/services/${params.id}`)
            }


        ]
    },
])
