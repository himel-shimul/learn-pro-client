import { createBrowserRouter } from "react-router-dom";
import Main from "../../../layout/Main";
import Category from "../../Category/Category";
import CourseDetails from "../../CourseDetails/CourseDetails";
import Login from "../../Login/Login";
import Register from "../../Register/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children:[
            {
                path: '/category/:id',
                loader: ({params}) => fetch(`http://localhost:5000/category/${params.id}`),
                element: <Category></Category>
            },
            {
                path: '/courses/:id',
                element: <PrivateRoute><CourseDetails></CourseDetails></PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/courses/${params.id}`)
            },
            {
                path: '/login',
                element: <Login></Login>,
            },
            {
                path: '/register',
                element: <Register></Register>,
            },
        ]
    }
])