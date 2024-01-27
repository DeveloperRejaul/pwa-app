import React, { useState } from 'react'
import CheckBox from './components/CheckBox';
import TblRow from './components/TblRow';

export default function MasterTbl({ tblHeader = [], tblBody = [] }) {
    // const data = [
    //     { id: 1, requestId: '#REQ-001231255', username: { icon: '', name: 'Samuel' }, date: 'hu 1/7/2023 5:24 AM', type: 'Ticket', assigned: { icon: '', name: 'Samuel' } }
    // ]
    // const {name,id,requestId,username}=data;
    return (
        <table className="bg-[#FCFCFC] font-poppins w-full overflow-auto">
            <thead className="text-base font-normal text-[#A3A3A3] capitalize">
                <tr className="text-left">
                    <th className="py-[1.813rem]">
                        <div className="flex justify-center h-full py-[1.813rem] px-3  border-l-[0.438rem]  border-transparent">
                            <CheckBox />
                        </div>
                    </th>
                    <th className="whitespace-nowrap px-3">Request Id</th>
                    <th className="whitespace-nowrap px-3">User Name</th>
                    <th className="whitespace-nowrap px-3">Date Created</th>
                    <th className="whitespace-nowrap px-3">Request Type</th>
                    <th>Assign</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {[1, 2, 3, 4].map((i) => (
                    <tr key={i} className="text-[#27364E] text-base font-medium leading-6">
                        {[{}]}
                        <TblRow checkBox />
                        <TblRow>#cewf324324</TblRow>
                        <TblRow>Hasan</TblRow>
                        <TblRow>12/12/1996</TblRow>
                        <TblRow>Action</TblRow>
                        <TblRow>hasan assign</TblRow>
                        <TblRow>....</TblRow>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}
