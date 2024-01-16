import { createBrowserRouter } from "react-router-dom";
import Main from "../fetuses/main/screen/Main";

export const router = createBrowserRouter([
    {
        path:"/",
        element:<Main/>
    }
])