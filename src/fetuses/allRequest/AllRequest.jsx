import React from 'react'
import TblAllReq from './TblAllReq'
import { ArrowBottom } from '../../asset/icon'

export default function AllRequest() {
    return (
        <div className="pb-20">
            <div className="flex justify-between items-center pb-[1.88rem]">
                <div className="space-y-2">
                    <h2 className="text-2xl font-medium leading-9">All Request</h2>
                    <p className="text-sm font-normal text-gray">Mum fuga consequuntur ut et.</p>
                </div>
                <div className="hidden xl:flex items-center space-x-3 bg-primary/10 cursor-pointer rounded-xl p-4">
                    <p>Recent</p>
                    <ArrowBottom />
                </div>
            </div>
            <div className="h-full rounded-3xl overflow-auto no-scrollbar">
                <TblAllReq />
            </div>
        </div>
    )
}
