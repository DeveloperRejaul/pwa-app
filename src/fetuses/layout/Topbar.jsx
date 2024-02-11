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
        else setTitle(pathname.replace('/', ''));
    }, [location.pathname]);

    return (
        <div className="flex justify-between items-center h-[9.5rem]">
            <div className="space-y-2">
                <p className="font-semibold text-2xl">{title || 'Unknown'}</p>
                <p className="text-base font-normal text-gray">Farm DSS Advisor Panel</p>
            </div>
            <Menu className="inline-block md:hidden" onClick={() => setShowNav((prev) => !prev)} />
            <div className="pr-8 hidden md:inline-block">
                <div className="flex items-center bg-primary/10 rounded-md h-10 overflow-hidden px-4">
                    <input type="text" placeholder="Search" className="border-none outline-none text-gray bg-transparent" />
                    <Search />
                </div>
            </div>
        </div>
    )
}
