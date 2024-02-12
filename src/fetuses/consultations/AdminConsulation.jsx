import React from 'react'
import { ArrowBottom } from '../../asset/icon'
import TblAssigned from '../assigned/TblAssigned'
import Tbl from './components/Tbl'

export default function AdminConsolation() {
    return (
        <div>
            <div className="hidden md:block mx-10 xl:mx-0 py-10">
                <div className="flex justify-between items-center pb-4">
                    <div className="space-x-14">
                        <button className="font-medium text-xl underline underline-offset-8">Consultations</button>
                        <button className="font-medium text-xl opacity-50">Assigned</button>
                    </div>
                    <div className="flex items-center space-x-3 bg-primary/10 cursor-pointer rounded-xl p-4">
                        <p>Recent</p>
                        <ArrowBottom />
                    </div>
                </div>
                <Tbl />
            </div>

        </div>
    )
}
