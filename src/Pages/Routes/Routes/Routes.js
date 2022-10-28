import { createBrowserRouter } from "react-router-dom";
import Main from "../../../layout/Main";
import AllCourses from "../../AllCourses/AllCourses";
import Blog from "../../Blog/Blog";
import Category from "../../Category/Category";
import ChackOut from "../../ChackOut/ChackOut";
import CourseDetails from "../../CourseDetails/CourseDetails";
import Home from "../../Home/Home";
import Login from "../../Login/Login";
import Profile from "../../Profile/Profile";
import Register from "../../Register/Register";
import Root from "../../Root/Root";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/courses',
                element: <Main></Main>,
                children:[
                    {
                        path: '/courses',
                        loader: () => fetch('https://learn-pro-server.vercel.app/courses'),
                        element: <AllCourses></AllCourses>
                    },
                    {
                        path: 'category/:id',
                        loader: ({params}) => fetch(`https://learn-pro-server.vercel.app/category/${params.id}`),
                        element: <Category></Category>
                    },
                    {
                        path: ':id',
                        element: <CourseDetails></CourseDetails>,
                        loader: ({params}) => fetch(`https://learn-pro-server.vercel.app/courses/${params.id}`)
                    },

                ]
            },
            {
                path: 'chackout/:id',
                element: <ChackOut></ChackOut>,
                loader: ({params}) => fetch(`https://learn-pro-server.vercel.app/courses/${params.id}`)
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