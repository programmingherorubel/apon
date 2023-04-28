import { createBrowserRouter } from "react-router-dom";
import Main from "../components/Main";
import Error from "../Error";
import Home from "../Home";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        errorElement:<Error></Error>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            }
        ]
    }
])

export default router