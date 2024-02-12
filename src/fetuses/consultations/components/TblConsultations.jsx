import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import CheckBox from '../../../components/checkBox/CheckBox';
import TblRow from '../../../components/table/TblRow';
import { ArrowRight, Check } from '../../../asset/icon';
import fakeData from '../../../db/AllRequest.json';
import ModalAssign from '../../allRequest/ModalAssign';
import Pagination from '../../../components/Pagination/Pagination';

const TblHeader = ["Request Id", "User Name", "Consultation Date", "Mobile Number", "Assign Advisor"];

export default function TblConsultations() {
    const navigate = useNavigate();
    const [fetchData, setFetchData] = useState(fakeData);
    const [showAssign, setShowAssign] = useState(null);
    const [selectData, setSelectData] = useState([]);


    const setShowModal = (id) => {
        setShowAssign((prev) => prev === id ? null : id);
    }

    return (
        <>
            <table className="font-poppins w-full overflow-auto">
                <thead className="text-base font-normal text-gray capitalize">
                    <tr className="text-left">
                        <th className="py-[1.813rem]">
                            <div className="flex justify-center h-full py-[1.813rem] px-3  border-l-[0.438rem]  border-transparent">
                                <CheckBox />
                            </div>
                        </th>
                        {TblHeader.map((h, i) => (
                            <th key={i} className="whitespace-nowrap px-3">{h}</th>
                        ))}
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
                            <TblRow>{d?.mobile}</TblRow>
                            <TblRow>
                                <div className="relative">
                                    <button type="button" className="h-[3.25rem] w-36 text-secondary bg-primary rounded-xl" onClick={() => setShowModal(d.id)}>Assign Avisor</button>
                                    {/* Modal */}
                                    {showAssign === d.id ? <ModalAssign /> : ''}

                                </div>
                            </TblRow>

                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="mt-10">
                <Pagination pageRangeDisplayed={5} totalCount={10} />
            </div>
        </>
    )
}
