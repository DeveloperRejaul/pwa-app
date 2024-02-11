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
import AllRequest from "../fetuses/allRequest/AllRequest";
import AdvisorUser from "../fetuses/advisorUser/AdvisorUser";
import Consultations from "../fetuses/consultations/index";
import AdvisoryUserDetails from "../fetuses/advisorUser/components/AdvisoryUserDetails";
import Setting from "../fetuses/setting/Setting";

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
                path: NAV_PATH.ALLREQ,
                element: <AllRequest />
            },
            {
                path: NAV_PATH.ASSIGNED,
                element: <Assigned />
            },
            {
                path: NAV_PATH.ADVISORY,
                element: <AdvisorUser />
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
                path: NAV_PATH.CONSULTATIONS,
                element: <Consultations />,
            },
            {
                path: NAV_PATH.PROFILE_DETAILS,
                element: <AdvisoryUserDetails />
            },
            {
                path: NAV_PATH.PROFILE,
                element: <Profile />
            },
            {
                path: NAV_PATH.CHAT,
                element: <Chat />
            },
            {
                path: NAV_PATH.KNOWLEDGE_DETAILS,
                element: <KnowledgeDetails />
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
                path: NAV_PATH.SETTING,
                element: <Setting />
            },
        ]
    },
])