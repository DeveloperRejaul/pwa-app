import { createBrowserRouter } from "react-router-dom";
import Main from "../fetuses/main/Main";
import React from "react";
import Home from "../fetuses/home/Home";
import Assigned from "../fetuses/assigned/Assigned";
import NewAssigned from "../fetuses/newAssigned/NewAssigned";
import Knowledge from "../fetuses/knowledge/Knowledge";
import Profile from "../fetuses/profile/Profile";
import Chat from "../fetuses/chat/Chat";
import { NAV_PATH } from "../constant/nav";
import KnowledgeDetails from "../fetuses/knowledge/KnowledgeDetails";
import FarmerProfile from "../fetuses/farmerProfile/FarmerProfile";
import SunItem from "../fetuses/knowledge/subitem";

export const router = createBrowserRouter([
    {
        path: NAV_PATH.HOME,
        element: <Main />,
        children: [
            {
                path: NAV_PATH.HOME,
                element: <Home />
            },
            {
                path: NAV_PATH.ASSIGNED,
                element: <Assigned />
            },
            {
                path: NAV_PATH.NEW_ASSIGNED,
                element: <NewAssigned />
            },
            {
                path: NAV_PATH.KNOWLEDGE,

                element: <Knowledge />
            },
            {
                path: NAV_PATH.PROFILE,
                element: <Profile />
            },
            {
                element: <Knowledge />,
            },
            {
                path: NAV_PATH.PROFILE,
                element: <Profile />
            },
        ]
    },
    {
        path: NAV_PATH.CARROT,
        element: <SunItem />
    },

    {
        path: NAV_PATH.FARMER_PROFILE,
        element: <FarmerProfile />
    },
    {
        path: NAV_PATH.KNOWLEDGE_DETAILS,
        element: <KnowledgeDetails />
    },
    {
        path: NAV_PATH.CHAT,
        element: <Chat />
    },
])