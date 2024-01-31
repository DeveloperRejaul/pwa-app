import React from 'react'
import TblAllReq from './TblAllReq'
import { ArrowBottom } from '../../asset/icon'

export default function AllRequest() {
    return (
        <div className="py-20 mx-10 xl:mx-0">
            <div className="flex justify-between items-center pb-4">
                <div className="space-y-2">
                    <h2 className="text-2xl font-medium leading-9">All Request</h2>
                    <p className="text-sm font-normal text-gray">Mum fuga consequuntur ut et.</p>
                </div>
                <div className="flex items-center space-x-3 bg-primary/10 cursor-pointer rounded-xl p-4">
                    <p>Recent</p>
                    <ArrowBottom />
                </div>
            </div>
            <div className="overflow-auto">
                <TblAllReq />
            </div>
        </div>
    )
}
