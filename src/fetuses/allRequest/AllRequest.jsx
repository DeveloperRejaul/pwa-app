import React from 'react'
import TblAllReq from './TblAllReq'
import { ArrowBottom } from '../../asset/icon'

export default function AllRequest() {
    return (
        <div className="py-20">
            <div className="flex justify-between items-center pb-4">
                <div className="space-y-2">
                    <h2 className="text-2xl font-medium leading-9">All Request</h2>
                    <p className="text-sm font-normal text-gray">um fuga consequuntur ut et.</p>
                </div>
                <div className="flex items-center space-x-3">
                    <p>Recent</p>
                    <ArrowBottom />
                </div>
            </div>
            <TblAllReq />
        </div>
    )
}
