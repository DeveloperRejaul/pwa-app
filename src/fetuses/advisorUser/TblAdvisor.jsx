import React from 'react'
import CheckBox from '../../components/checkBox/CheckBox';
import fetchData from '../../db/AllRequest.json';
import TblRow from '../../components/table/TblRow';
import Switch from '../../components/ToggleSwitch/Switch';
import { ArrowRight } from '../../asset/icon';
import { useNavigate } from 'react-router-dom';
import { NAV_PATH } from '../../constant/nav';

const TblHeader = ["User Id", "Advisor Name", "Date Joined", "Mobile Number", "Status"]
export default function TblAdvisor() {
    const navigate = useNavigate();
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
                        <TblRow>{d.mobile}</TblRow>
                        <TblRow>
                            <Switch checked={d?.status || false} />
                        </TblRow>
                        <TblRow>
                            <ArrowRight onClick={() => navigate('/profile-details')} className="cursor-pointer" />
                        </TblRow>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}
