import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { AssignedIcon, GroupUser, HomeIcon, KnowledgeIcon, Logo, Logout, MessageIcon, NewAssignedIcon, ProfileIcon } from '../../asset/icon'
import Topbar from './Topbar'
import { NAV_PATH } from '../../constant/nav';

const Menu = [
    { name: "Home", path: NAV_PATH.HOME, icon: HomeIcon },
    { name: "All Request", path: NAV_PATH.ALLREQ, icon: MessageIcon },
    { name: "Assigned Requests", path: NAV_PATH.ASSIGNED, icon: AssignedIcon },
    { name: "Consultations", path: "/consultations", icon: NewAssignedIcon },
    { name: "Knowledge base", path: NAV_PATH.KNOWLEDGE, icon: KnowledgeIcon },
    { name: "Advisor User", path: NAV_PATH.ADVISORY, icon: GroupUser },
    { name: "Profile", path: NAV_PATH.PROFILE, icon: ProfileIcon },
    { name: "Setting", path: NAV_PATH.SETTING, icon: ProfileIcon },
]
export default function Layout() {

    return (
        <div className="flex p-4 h-screen font-poppins">
            <div className="py-[1.98rem] bg-gray/10 h-[95vh] w-[22.375rem] px-7 overflow-y-auto rounded-lg flex flex-col justify-between">
                <div className="space-y-16">
                    <div className="flex items-center justify-between ">
                        <div className="flex items-center before:space-x-2">
                            <Logo className="w-16 h-11" />
                            <p className="text-primary text-2xl font-semibold">Logoipsum</p>
                        </div>
                    </div>
                    <div className="space-y-2">
                        {Menu.map((data, i) => (
                            <NavLink key={i} className="flex font-medium text-base"
                                to={data.path}>
                                {({ isActive }) => (
                                    <div className={`${isActive ? 'w-full bg-primary text-white' : ''} flex transition-all py-4 duration-200 rounded-xl px-4`}>
                                        <div className="flex items-center space-x-4">
                                            <data.icon className={`${isActive ? 'fill-white' : 'fill-[#B9BBBD]'} w-7 h-7`} />
                                            <p className="whitespace-nowrap">{data.name}</p>
                                        </div>
                                    </div>
                                )}

                            </NavLink>
                        ))}

                    </div>
                </div>
                <NavLink className="flex font-medium text-base"
                    to="/">
                    <div className="flex transition-all py-4 duration-200 rounded-xl px-4">
                        <div className="flex items-center space-x-4">
                            <Logout className="w-7 h-7 fill-gray opacity-60" />
                            <p className="whitespace-nowrap">Logout</p>
                        </div>
                    </div>
                </NavLink>
            </div>

            <div className="w-full px-14 h-[95vh] ">
                <Topbar menu={Menu} />
                <div className="pb-5 h-[91.5vh] overflow-auto no-scrollbar">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}
