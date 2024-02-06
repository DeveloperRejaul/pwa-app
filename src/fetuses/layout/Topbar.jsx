import React, { useEffect, useState } from 'react'
import { Search } from '../../asset/icon'
import { useLocation } from 'react-router-dom'

export default function Topbar({ menu }) {
    const location = useLocation();
    const { pathname } = location;
    const [title, setTitle] = useState();

    useEffect(() => {
        const fd = menu.find((m) => m?.path === pathname);
        if (fd) setTitle(fd?.name);
    }, [location.pathname]);

    return (
        <div className="flex justify-between items-center h-[3.5rem] pt-9">
            <div className="space-y-2">
                <p className="font-semibold text-2xl">{title || 'Unkknown'}</p>
                <p className="text-base font-normal text-gray">Farm DSS Advisor Panel</p>
            </div>
            <div className="pr-8">
                <div className="flex items-center bg-primary/10 rounded-md h-10 overflow-hidden px-4">
                    <input type="text" placeholder="Search" className="border-none outline-none text-gray bg-transparent" />
                    <Search />
                </div>
            </div>
        </div>
    )
}
