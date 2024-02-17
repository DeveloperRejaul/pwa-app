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
            <div className="pt-6 text-paragraph pb-[1.13rem]">
                {FilterList.map((m, i) => (
                    <h2 key={i} className={`text-[1.313rem] font-medium inline-block  mr-[6.25rem] cursor-pointer ${actMenu === m ? 'underline text-primary text-2xl underline-offset-4' : ''}`} onClick={() => setActMenu(m)}>{m}</h2>
                ))}
            </div>
            <div className="flex items-center space-x-4 pb-[1.15rem]">
                <div className="w-32">
                    <CusDropdown DefaultVal='10' />
                </div>
                <p>Entries</p>
            </div>
            <TblExportAdvisory />
        </div>
    )
}
