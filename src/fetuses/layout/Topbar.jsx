import React from 'react'
import { Search } from '../../asset/icon'

export default function Topbar() {
    return (
        <div className="flex justify-between items-center h-[3.5rem]">
            <div className="space-y-2">
                <p className="font-semibold text-2xl">Home</p>
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
