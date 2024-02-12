import React, { useState } from 'react'
import CheckBox from '../../components/checkBox/CheckBox'
import fakeData from '../../db/AllRequest.json';
import TblRow from '../../components/table/TblRow';
import { ArrowRight, Check } from '../../asset/icon';
import { useNavigate } from 'react-router-dom';

const TblHeader = ["Request Id", "User Name", "Date Created", "Request Type", "Status"];

export default function TblAssigned() {
    const navigate = useNavigate();
    const [fetchData, setFetchData] = useState(fakeData);
    const [selectData, setSelectData] = useState([]);

    return (
        <table className="font-poppins w-full overflow-auto">
            <thead className="text-base font-normal text-gray capitalize">
                <tr className="text-left bg-[#F8F8F8]  rounded-xl">
                    <th>
                        <div className="flex justify-center h-full py-[1.813rem] px-3  border-l-[0.438rem]  border-transparent">
                            <CheckBox />
                        </div>
                    </th>
                    {TblHeader.map((h, i) => (
                        <th key={i} className={`whitespace-nowrap px-3 text-base font-normal text-[#A3A3A3] capitalize ${i === 4 ? 'w-48' : ''}`}>{h}</th>
                    ))}
                    <th className="w-20"></th>
                </tr>
            </thead>
            <tbody>
                {fetchData.map((d, i) => (
                    <tr key={i} className={`text-[#27364E] border border-gray border-opacity-15  text-base font-medium leading-6 ${selectData.includes(d.id) ? 'shadow-lg' : ''}`}>
                        <TblRow checkBox id={d.id} selectList={selectData} setSelectList={setSelectData} />
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
                            <ArrowRight onClick={() => navigate('/chat')} className="cursor-pointer" />
                        </TblRow>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}
