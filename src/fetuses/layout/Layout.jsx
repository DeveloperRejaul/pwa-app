import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { HomeIcon, Logo } from '../../asset/icon'
import Topbar from './Topbar'

const Menu = [
    { name: "Home", path: "/" },
    { name: "All Requesy", path: "/allrequest" },
    { name: "Assigned Requests", path: "/assigned" },
    { name: "Consultations", path: "/consultations" },
    { name: "Knowledge base", path: "/knowledge" },
    { name: "Profile", path: "/profile" },
]
export default function Layout() {
    return (
        <div className="flex p-4 h-screen">
            <div className="py-[1.98rem] bg-secondary h-[95vh] w-[22.375rem] space-y-16 px-7 overflow-y-auto rounded-lg">
                <div className="flex items-center justify-between">
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
                                        <HomeIcon className={`${isActive ? 'fill-white' : 'fill-[#B9BBBD]'} w-7 h-7`} />
                                        <p className="whitespace-nowrap">{data.name}</p>
                                    </div>
                                </div>
                            )}

                        </NavLink>
                    ))}
                </div>
            </div>
            <div className="w-full px-14 h-[95vh] ">
                <Topbar />
                <div className="pb-5 h-[91.5vh] overflow-auto no-scrollbar">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}
