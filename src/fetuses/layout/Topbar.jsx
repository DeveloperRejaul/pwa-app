import React, { useEffect, useState } from 'react'
import { Menu, Search } from '../../asset/icon'
import { useLocation } from 'react-router-dom'

export default function Topbar({ menu, setShowNav = () => { } }) {
    const location = useLocation();
    const { pathname } = location;
    const [title, setTitle] = useState();

    useEffect(() => {
        const fd = menu.find((m) => m?.path === pathname);
        if (fd) setTitle(fd?.name);
        else {
            if (location?.state?.name) setTitle(location?.state?.name)
            else setTitle(pathname.replace('/', ''));
        }
    }, [location.pathname]);

    return (
        <div className="text-[#27364E] bg-white flex justify-between items-center pt-9">
            <div className="space-y-3">
                <p className="font-semibold text-[2rem] capitalize">{title || 'Unknown'}</p>
                <p className="text-base font-normal">Farm DSS Advisor Panel</p>
            </div>
            <Menu className="inline-block md:hidden" onClick={() => setShowNav((prev) => !prev)} />
            <div className="pr-8 hidden xl:inline-block">
                <div className="flex items-center bg-primary/10 rounded-md h-14 overflow-hidden xl:px-4">
                    <input type="text" placeholder="Search" className="border-none outline-none text-gray bg-transparent w-auto" />
                    <Search />
                </div>
            </div>
        </div>
    )
}
