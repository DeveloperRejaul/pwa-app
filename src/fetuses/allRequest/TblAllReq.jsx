import React, { useEffect, useRef, useState } from 'react'
import CheckBox from '../../components/checkBox/CheckBox'
import TblRow from '../../components/table/TblRow'
import fakeData from '../../db/AllRequest.json';
import { ArrowBottom, ArrowRight } from '../../asset/icon';
import ModalAssign from './ModalAssign';
import ReactPaginate from 'react-paginate';

const TblHeader = ["Request Id", "User Name", "Date Created", "Request Type", "Assigned"];

export default function TblAllReq() {
    const [showAssign, setShowAssign] = useState(null);
    const [fetchData, setFetchData] = useState(fakeData);
    const [selectData, setSelectData] = useState([]);

    const setShowModal = (id) => {
        setShowAssign((prev) => prev === id ? null : id);
    }

    return (
        <>
            <table className="bg-[#FCFCFC] font-poppins w-full">
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
                        <tr key={i} className={`text-[#27364E] text-base font-medium leading-6 ${selectData.includes(d.id) ? 'shadow-lg' : ''}`}>
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
                                    {showAssign === d.id ? <ModalAssign /> : ''}

                                </div>
                            </TblRow>
                            <TblRow>
                                <ArrowRight onClick={() => { }} />
                            </TblRow>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="mt-10 ">
                <ReactPaginate
                    breakLabel="..."
                    previousLabel={
                        <div className="border rounded-l-md border-r-0 w-16 border-primary opacity-50 flex items-center justify-center">
                            <ArrowBottom className="rotate-90 h-[3.9rem] w-9" />
                        </div>
                    }
                    nextLabel={
                        <div className="border rounded-r-md border-l-0 w-16 border-primary opacity-50 flex items-center justify-center">
                            <ArrowBottom className="-rotate-90 h-[3.9rem] w-9" />
                        </div>
                    }
                    // nextClassName="w-10 h-10"
                    onPageChange={() => { }}
                    pageRangeDisplayed={5}
                    pageCount={10}
                    renderOnZeroPageCount={null}
                    containerClassName="flex items-center h-16 justify-end w-full overflow-auto"
                    breakLinkClassName="p-[1.2rem] border border-l-0 border-r-0 border-primary border-opacity-40"
                    activeClassName="bg-primary text-secondary"
                    pageClassName="border border-primary border-opacity-40 h-full w-14 flex items-center justify-center text-xl font-normal text-headline"
                />
            </div>
        </>
    )
}
