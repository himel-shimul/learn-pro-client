import { createBrowserRouter } from "react-router-dom";
import Main from "../../../layout/Main";
import Category from "../../Category/Category";

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
        ]
    }
])