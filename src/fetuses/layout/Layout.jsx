import React, { useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { ArrowBottom, AssignedIcon, GroupUser, HomeIcon, KnowledgeIcon, Logo, Logout, MessageIcon, NewAssignedIcon, ProfileIcon } from '../../asset/icon'
import Topbar from './Topbar'
import { NAV_PATH } from '../../constant/nav';
import { useAppContext } from '../../hooks/useAppContext';

const UsrMenu = [
    { name: "Home", path: NAV_PATH.HOME, icon: HomeIcon },
    { name: "All Request", path: NAV_PATH.ALLREQ, icon: MessageIcon },
    { name: "Assigned Requests", path: NAV_PATH.ASSIGNED, icon: AssignedIcon },
    { name: "Consultations", path: NAV_PATH.CONSULTATIONS, icon: NewAssignedIcon },
    { name: "Knowledge base", path: NAV_PATH.KNOWLEDGE, icon: KnowledgeIcon },
    { name: "Profile", path: NAV_PATH.PROFILE, icon: ProfileIcon },
]
const AdminMenu = [
    { name: "Home", path: NAV_PATH.HOME, icon: HomeIcon },
    { name: "All Request", path: NAV_PATH.ALLREQ, icon: MessageIcon },
    { name: "Assigned Requests", path: NAV_PATH.ASSIGNED, icon: AssignedIcon },
    { name: "Consultations", path: NAV_PATH.CONSULTATIONS, icon: NewAssignedIcon },
    { name: "Knowledge base", path: NAV_PATH.KNOWLEDGE, icon: KnowledgeIcon },
    { name: "Advisor User", path: NAV_PATH.ADVISORY, icon: GroupUser },
    { name: "Setting", path: NAV_PATH.SETTING, icon: ProfileIcon },
]
const ExtMenu = [
    { name: "Home", path: NAV_PATH.HOME, icon: HomeIcon },
    { name: "Knowledge Bank", path: NAV_PATH.KNOWLEDGE_BANK, icon: MessageIcon },
    { name: "Sub Advisor", path: NAV_PATH.ASSIGNED, icon: AssignedIcon },
    { name: "Farmer", path: NAV_PATH.CONSULTATIONS, icon: NewAssignedIcon },
    { name: "Buyer", path: NAV_PATH.BUYER, icon: KnowledgeIcon },
    { name: "Service Provider", path: NAV_PATH.ADVISORY, icon: GroupUser },
    { name: "Expert Advisory", path: NAV_PATH.EXPORT_ADVISORY, icon: ProfileIcon },
]
const usrRole = {
    "admin": AdminMenu,
    "user": UsrMenu,
    "other": ExtMenu
}

export default function Layout() {
    const { user, setUser } = useAppContext();
    const [showNav, setShowNav] = useState(false);
    // For Testing and change role based rander menu list
    const onChangeRole = () => setUser((prev) => ({ ...prev, role: prev.role === 'admin' ? 'user' : 'admin' }));

    return (
        <div className="md:grid grid-cols-12 h-screen font-poppins">
            <div className={`col-span-3 pl-5 py-[1.38rem] h-screen overflow-y-auto 
            bg-secondary md:bg-transparent transition-all duration-500
            ${user?.role === 'admin' ? `absolute md:relative shadow-2xl md:shadow-none z-50 ${showNav ? 'translate-x-0' : '-translate-x-96 md:translate-x-0 '}` : ''}
            `}>
                <div className={`h-full flex flex-col justify-between py-[1.98rem] bg-primary bg-opacity-10 px-7 overflow-y-auto rounded-lg`}>
                    <div className="space-y-16">
                        <div className="flex items-center justify-between relative ">
                            <div className="flex items-center before:space-x-2" onClick={() => setUser((u) => ({ ...u, role: 'other' }))}>
                                <Logo className="w-16 h-11" />
                                <p className="text-primary text-2xl w-20 truncate xl:w-auto font-semibold">Logoipsum</p>
                            </div>
                            <div className="md:hidden absolute right-0  z-50 bg-secondary h-6 w-6 shadow-2xl rounded-full flex items-center justify-center border border-primary"
                                onClick={() => setShowNav(!showNav)}>
                                <ArrowBottom className="rotate-90" />
                            </div>
                        </div>
                        <div className="space-y-2">
                            {usrRole[user?.role || 'user'].map((data, i) => (
                                <NavLink key={i} className="flex font-medium text-base"
                                    to={data.path}>
                                    {({ isActive }) => (
                                        <div className={`${isActive ? 'w-full bg-primary text-white' : ''} flex transition-all py-4 duration-200 rounded-xl px-4`}>
                                            <div className="flex items-center space-x-4">
                                                <data.icon className={`${isActive ? 'fill-white' : 'fill-[#B9BBBD]'} w-7 h-7`} />
                                                <p className=" whitespace-nowrap tracking-wide w-20 xl:w-auto truncate">{data.name}</p>
                                            </div>
                                        </div>
                                    )}

                                </NavLink>
                            ))}

                        </div>
                    </div>
                    <button className="flex font-medium text-base"
                        onClick={onChangeRole}>
                        <div className="flex transition-all py-4 duration-200 rounded-xl px-4">
                            <div className="flex items-center space-x-4">
                                <Logout className="w-7 h-7 fill-gray opacity-60" />
                                <p className="whitespace-nowrap">Logout</p>
                            </div>
                        </div>
                    </button>
                </div>
            </div>
            <div className="col-span-9 h-screen  w-full overflow-auto">
                <div className="h-[17vh] top-0 sticky w-full px-5 xl:px-9 z-10">
                    <Topbar menu={user?.role === 'admin' ? AdminMenu : UsrMenu} setShowNav={setShowNav} />
                </div>
                <div className="p-5 xl:px-9 pt-[3.25rem] overflow-auto no-scrollbar font-poppins h-[83vh]">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}
