import React, { useState } from 'react';
import CusDropdown from '../../components/dropdown/CusDropdown';
import TblExportAdvisory from './TblExportAdvisory';

const FilterList = ["New", "Overdue", "OnGoing", "Reply", "Flowup", "Overdue Followup", "Closed/Expired"]
export default function ExportAdvisory() {
    const [actMenu, setActMenu] = useState('New');
    return (
        <div>
            <div className="w-72">
                <CusDropdown DefaultVal="Advisory Request" />
            </div>
            <div className="pt-6 text-paragraph pb-[1.13rem] flex overflow-x-auto no-scrollbar">
                {FilterList.map((m, i) => (
                    <h2 key={i} className={`whitespace-nowrap text-[1.313rem] font-medium mr-[6.25rem] cursor-pointer ${actMenu === m ? 'underline text-primary text-2xl underline-offset-4' : ''}`} onClick={() => setActMenu(m)}>{m}</h2>
                ))}
            </div>
            <div className="flex items-center space-x-4 pb-[1.15rem]">
                <div className="w-20">
                    <CusDropdown DefaultVal='10' Opts={[{ id: 1, name: "5" }, { id: 2, name: "10" }, { id: 3, name: "15" }, { id: 4, name: "20" }]} />
                </div>
                <p>Entries</p>
            </div>
            <TblExportAdvisory />
        </div>
    )
}
