import React, { useState } from 'react'
import CheckBox from '../../components/checkBox/CheckBox'
import TblRow from '../../components/table/TblRow'
import fakeData from '../../db/AllRequest.json';
import { ArrowBottom, ArrowRight } from '../../asset/icon';
import ModalAssign from './ModalAssign';
import ReactPaginate from 'react-paginate';
import Pagination from '../../components/Pagination/Pagination';

const TblHeader = ["Request Id", "User Name", "Date Created", "Request Type", "Assigned"];

export default function TblAllReq() {
    const [showAssign, setShowAssign] = useState(null);
    const [fetchData, setFetchData] = useState(fakeData);
    const [selectData, setSelectData] = useState([]);

    const setShowModal = (id) => {
        setShowAssign((prev) => prev === id ? null : id);
    }

    return (
        // <div className="overflow-auto">
        <table className="bg-[#FCFCFC] font-poppins w-full">
            <thead className="">
                <tr className="text-left bg-[#F8F8F8]">
                    <th>
                        <div className="flex justify-center h-full py-[1.813rem] px-3  border-l-[0.438rem]  border-transparent">
                            <CheckBox />
                        </div>
                    </th>
                    {TblHeader.map((h, i) => (
                        <th key={i} className={`whitespace-nowrap px-3 text-base font-normal text-[#A3A3A3] capitalize ${i === 4 ? 'w-48 ' : ''}`}>{h}</th>
                    ))}
                    <th className="w-20"></th>
                </tr>
            </thead>
            <tbody>
                {fetchData.map((d, i) => (
                    <tr key={i} className={`text-[#27364E] border border-gray border-opacity-15 text-base font-medium leading-6 ${selectData.includes(d.id) ? 'shadow-lg' : ''}`}>
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
                            <div className="relative">
                                <button type="button" className="h-[3.25rem] w-36 text-secondary bg-primary rounded-xl" onClick={() => setShowModal(d.id)}>Assign To Me</button>
                                {/* Modal */}
                                {showAssign === d?.id ? <ModalAssign /> : ''}

                            </div>
                        </TblRow>
                        <TblRow>
                            <ArrowRight onClick={() => { }} className="cursor-pointer w-10" />
                        </TblRow>
                    </tr>
                ))}
            </tbody>
        </table>
        // </div>
    )
}
