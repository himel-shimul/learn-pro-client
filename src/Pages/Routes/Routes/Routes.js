import { createBrowserRouter } from "react-router-dom";
import Main from "../../../layout/Main";
import Blog from "../../Blog/Blog";
import Category from "../../Category/Category";
import CourseDetails from "../../CourseDetails/CourseDetails";
import Home from "../../Home/Home";
import Login from "../../Login/Login";
import Profile from "../../Profile/Profile";
import Register from "../../Register/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Home></Home>,
        children: [
            {
                path: '/',
                element: <Main></Main>,
                children:[
                    {
                        path: '/category/:id',
                        loader: ({params}) => fetch(`https://learn-pro-server.vercel.app/category/${params.id}`),
                        element: <Category></Category>
                    },
                    {
                        path: '/courses/:id',
                        element: <CourseDetails></CourseDetails>,
                        loader: ({params}) => fetch(`https://learn-pro-server.vercel.app/courses/${params.id}`)
                    },

                ]
            },
            {
                path: '/blog',
                element: <Blog></Blog>,
            },
            {
                path: '/login',
                element: <Login></Login>,
            },
            {
                path: '/register',
                element: <Register></Register>,
            },
            {
                path: '/profile',
                element: <Profile></Profile>,
            },
        ]
    },
    
   
])