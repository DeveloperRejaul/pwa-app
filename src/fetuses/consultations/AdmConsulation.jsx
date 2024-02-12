import React from 'react';
import { ArrowBottom } from '../../asset/icon';
import TblConsultations from './components/TblConsultations';

export default function AdmConsulation() {
    return (
        <div className="mx-10 xl:mx-0 py-20">
            <div className="flex justify-between items-center pb-4">
                <div className="space-x-14">
                    <button className="font-medium xl:text-2xl underline underline-offset-8">Consultations</button>
                    <button className="font-medium xl:text-2xl opacity-50">Assigned</button>
                </div>
                <div className="hidden xl:flex items-center space-x-3 bg-primary bg-opacity-20 rounded-2xl px-6 py-4">
                    <p>Recent</p>
                    <ArrowBottom />
                </div>
            </div>
            <div className="overflow-auto">
                <TblConsultations />
            </div>
        </div>
    )
}
