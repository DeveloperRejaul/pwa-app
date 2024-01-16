import { createBrowserRouter } from "react-router-dom";
import Main from "../fetuses/main/Main";
import React from "react";
import Home from "../fetuses/home/Home";
import Assigned from "../fetuses/assigned/Assigned";
import NewAssigned from "../fetuses/newAssigned/NewAssigned";
import Knowledge from "../fetuses/knowledge/Knowledge";
import Profile from "../fetuses/profile/Profile";
import { NAV_PATH } from "../constant/nav";

export const router = createBrowserRouter([
    {
        path:NAV_PATH.HOME,
        element:<Main/>,
        children:[
            {
                path:NAV_PATH.HOME,
                element:<Home/>
            },
            {
                path:NAV_PATH.ASSIGNED,
                element:<Assigned/>
            },
            {
                path:NAV_PATH.NEW_ASSIGNED,
                element:<NewAssigned/>
            },
            {
                path:NAV_PATH.KNOWLEDGE,
                element:<Knowledge/>
            },
            {
                path:NAV_PATH.PROFILE,
                element:<Profile/>
            },
        ]
    }
])