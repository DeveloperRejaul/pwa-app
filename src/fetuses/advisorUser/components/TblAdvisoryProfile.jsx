import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import fakeData from '../../../db/AllRequest.json';
import CheckBox from '../../../components/checkBox/CheckBox';
import TblRow from '../../../components/table/TblRow';
import { ArrowRight, Check } from '../../../asset/icon';

const TblHeader = ["Request Id", "User Name", "Date Created", "Request Type", "Status", "Advisor Assigned"];
const Filter = [
    { id: 1, name: "All Assigned" },
    { id: 2, name: "Active" },
    { id: 3, name: "Rejected" },
    { id: 4, name: "Closed" },
]

export default function TblAdvisoryProfile() {
    const navigate = useNavigate();
    const [fetchData, setFetchData] = useState(fakeData)
    const [fltActive, setFltActive] = useState('All Assigned');

    return (
        <div>
            <div>
                <div className="space-x-14">
                    {Filter.map((d) => (
                        <button key={d.id} type="button" className={`${fltActive === d.name ? 'underline' : 'opacity-40'} text-2xl font-medium underline-offset-8`}
                            onClick={() => setFltActive(d.name)}>{d.name}</button>
                    ))}

                </div>
            </div>
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
                                <button type="button" className="h-[2.5rem] w-32 bg-[#00A389] text-[#00A389] font-medium bg-opacity-20 flex items-center justify-center space-x-2  rounded-xl">
                                    <Check />
                                    <p>{d.status ? 'Active' : 'Deactive'}</p>
                                </button>
                            </TblRow>
                            <TblRow>
                                <div className="flex items-center space-x-2">
                                    <img className="w-11 h-11 rounded-2xl object-contain bg-gray" src={d.img} alt="img" />
                                    <p>{d.username}</p>
                                </div>
                            </TblRow>
                            <TblRow>
                                <ArrowRight onClick={() => navigate('/chat')} className="cursor-pointer" />
                            </TblRow>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}