import React from 'react';
import TblKnowledgeBank from './TblKnowledgeBank';
import CusDropdown from '../../components/dropdown/CusDropdown';

export default function KnowlegeBank() {
    return (
        <div>
            <div className="flex justify-between">
                <div className="text-headline font-medium text-[1.48rem] space-y-4">
                    <div className="flex items-center space-x-2 mb-5 pb-4">
                        <h4>Pomegranate:</h4>
                        <p>Technical Name List</p>
                    </div>
                    <div className="flex items-center space-x-2 ">
                        <h4>Topic:</h4>
                        <p className="text-gray">Post Management</p>
                    </div>
                    <div className="flex items-center space-x-2 ">
                        <h4>SubTopic:</h4>
                        <p className="text-gray">Fruit Borer</p>
                    </div>
                    <div className="flex items-center space-x-2 ">
                        <h4>Technical Name:</h4>
                        <p className="text-gray">Chlorantraniliprole 18.5 %</p>
                    </div>
                </div>
                <div>
                    <button className="border border-primary text-primary text-[1.186rem] font-medium px-[0.88rem] py-[1.186rem] rounded-[.449rem]">Download Sample Excel</button>
                </div>
            </div>
            <div>
                <CusDropdown />
                <TblKnowledgeBank />
            </div>
        </div>
    )
}
