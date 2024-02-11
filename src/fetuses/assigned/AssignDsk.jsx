import React from 'react'
import { ArrowBottom } from '../../asset/icon'
import TblAssigned from './TblAssigned'

export default function AssignDsk() {
    return (
        <div className="hidden md:block mx-10 xl:mx-0 py-20">
            <div className="flex justify-between items-center pb-4">
                <div className="space-x-14">
                    <button className="font-medium text-2xl underline underline-offset-8">All Assigned</button>
                    <button className="font-medium text-2xl opacity-50">Active</button>
                    <button className="font-medium text-2xl opacity-50">Closed</button>
                </div>
                <div className="flex items-center space-x-3 bg-primary/10 cursor-pointer rounded-xl p-4">
                    <p>Recent</p>
                    <ArrowBottom />
                </div>
            </div>
            <TblAssigned />
        </div>
    )
}
