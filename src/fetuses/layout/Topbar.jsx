import React from 'react'
import { Search } from '../../asset/icon'

export default function Topbar() {
    return (
        <div className="flex justify-between items-center h-[3.5rem] ">
            <p className="font-semibold text-2xl">Home</p>
            <div className="pr-8">
                <div className="flex items-center bg-[#FFF6EF] rounded-md h-10 overflow-hidden px-4">
                    <input type="text" placeholder="Search" className="border-none outline-none text-gray" />
                    <Search />
                </div>
            </div>
        </div>
    )
}
