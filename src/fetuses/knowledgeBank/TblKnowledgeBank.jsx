import React from 'react';
import fetchData from '../../db/AllRequest.json';
import { Delete, Edit } from '../../asset/icon';

const header = ["ID", "Image", "Brand Name", "Company Name", "Dosoge"];
export default function TblKnowledgeBank() {
    return (
        <div>
            <table className="bg-[#FCFCFC] font-poppins w-full text-[#939393] rounded-md overflow-hidden">
                <thead className="border border-opacity-20 border-primary">
                    <tr className="text-left bg-[#F8F8F8] shadow-lg">
                        {header.map((h, i) => (
                            <th key={i} className={`whitespace-nowrap text-[0.986rem] py-7 px-[1.97rem] text-base font-normal capitalize`}>{h}</th>
                        ))}
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {fetchData.map((d, i) => (
                        <tr key={i} className={`border border-gray border-opacity-15 text-base font-medium leading-6`}>
                            <td>
                                <div className="px-[1.97rem] pt-[1.97rem] h-32">
                                    #001
                                </div>
                            </td>
                            <td>
                                <div className="w-[4.63rem] h-[4.69rem] rounded-[0.44rem] overflow-hidden">
                                    <img src={d.img} alt='img' className="w-full h-full object-cover" />
                                </div>
                            </td>
                            <td className="">
                                <div className="px-[1.97rem] pt-[1.97rem] h-32">
                                    {d.username}
                                </div>
                            </td>
                            <td className="">
                                <div className="px-[1.97rem] pt-[1.97rem] h-32">
                                    FMC
                                </div>
                            </td>
                            <td className="">
                                <div className="px-[1.97rem] pt-[1.97rem] h-32">
                                    0.3 ml per Litre
                                </div>
                            </td>
                            <td>
                                <div className="flex items-center space-x-6">
                                    <Edit />
                                    <Delete />
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
