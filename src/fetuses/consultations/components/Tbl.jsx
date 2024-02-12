import React, { useState } from 'react'
import fakeData from '../../../db/AllRequest.json'
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Check } from '../../../asset/icon';
import CheckBox from '../../../components/checkBox/CheckBox';
import TblRow from '../../../components/table/TblRow';
import ModalAssign from '../../allRequest/ModalAssign';
const TblHeader = ["User Id", "User Name", "Consultation Date", "Mobile Number", "Assign Advisor"];

export default function Tbl() {
    const navigate = useNavigate();
    const [fetchData, setFetchData] = useState(fakeData);
    const [selectData, setSelectData] = useState([]);
    const [showAssign, setShowAssign] = useState(null);

    const setShowModal = (id) => {
        setShowAssign((prev) => prev === id ? null : id);
    }

    return (
        <table className="font-poppins w-full overflow-auto">
            <thead className="text-base font-normal text-gray capitalize">
                <tr className="text-left bg-gray/5">
                    <th className="py-[1rem] ">
                        <div className="flex justify-center h-full py-[1rem] px-3  border-l-[0.438rem]  border-transparent">
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
                        <TblRow>9876543210</TblRow>
                        <TblRow>
                            <div className="relative">
                                <button type="button" className="h-[3.25rem] w-36 text-secondary bg-primary rounded-xl" onClick={() => setShowModal(d.id)}>Assign Advisor</button>
                                {/* Modal */}
                                {showAssign === d.id ? <ModalAssign /> : ''}

                            </div>
                        </TblRow>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}
