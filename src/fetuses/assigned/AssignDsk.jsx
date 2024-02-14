import React from 'react'
import { ArrowBottom } from '../../asset/icon'
import TblAssigned from './TblAssigned'

export default function AssignDsk() {
    return (
        <div className="hidden md:block pb-20">
            <div className="flex justify-between items-center pb-12">
                <div className="space-x-14 font-medium ">
                    <button className="text-2xl underline underline-offset-8">All Assigned</button>
                    <button className=" text-[1.19rem] opacity-50">Active</button>
                    <button className="text-[1.19rem] opacity-50">Closed</button>
                </div>
                <div className="flex items-center space-x-3 bg-primary/10 cursor-pointer rounded-xl p-4">
                    <p>Recent</p>
                    <ArrowBottom />
                </div>
            </div>
            <div className="overflow-auto rounded-3xl">
                <TblAssigned />
            </div>
        </div>
    )
}
