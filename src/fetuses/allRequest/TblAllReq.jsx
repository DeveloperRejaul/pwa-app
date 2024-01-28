import React, { useState } from 'react'
import CheckBox from '../../components/checkBox/CheckBox'
import TblRow from '../../components/table/TblRow'
import fakeData from '../../db/AllRequest.json';
import Button from '../../components/button/Button';
import { ArrowRight } from '../../asset/icon';

const TblHeader = ["Request Id", "User Name", "Date Created", "Request Type", "Assigned"];

export default function TblAllReq() {
    const [fetchData, setFetchData] = useState(fakeData)
    return (
        <table className="bg-[#FCFCFC] font-poppins w-full overflow-auto">
            <thead className="text-base font-normal text-[#A3A3A3] capitalize">
                <tr className="text-left">
                    <th className="py-[1.813rem]">
                        <div className="flex justify-center h-full py-[1.813rem] px-3  border-l-[0.438rem]  border-transparent">
                            <CheckBox />
                        </div>
                    </th>
                    {TblHeader.map((h, i) => (
                        <th key={i} className="whitespace-nowrap px-3">{h}</th>
                    ))}
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {fetchData.map((d, i) => (
                    <tr key={i} className="text-[#27364E] text-base font-medium leading-6">
                        <TblRow checkBox />
                        <TblRow>#{d.requestId}</TblRow>
                        <TblRow>
                            <div className="flex items-center space-x-2">
                                <img className="w-11 h-11 rounded-2xl object-contain bg-gray" src={d.img} alt="img" />
                                <p>{d.username}</p>
                            </div>
                        </TblRow>
                        <TblRow>{new Date(d.created).toLocaleDateString()}</TblRow>
                        <TblRow>{d.requestType}</TblRow>
                        <TblRow>
                            <button type="button" className="h-[3.25rem] w-36 text-secondary bg-primary rounded-xl">Assign To Me</button>
                        </TblRow>
                        <TblRow>
                            <ArrowRight onClick={() => { }} />
                        </TblRow>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}
