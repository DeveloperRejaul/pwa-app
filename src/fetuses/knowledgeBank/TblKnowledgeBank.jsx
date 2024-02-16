import React from 'react';
import fetchData from '../../db/AllRequest.json';
import { BothArrow, Delete, Edit } from '../../asset/icon';

const header = ["ID", "Image", "Brand Name", "Company Name", "Dosoge"];
export default function TblKnowledgeBank() {
    return (
        <div className="overflow-auto no-scrollbar">
            <table className="bg-[#FCFCFC] font-poppins w-full text-[#939393] rounded-md overflow-hidden">
                <thead className="">
                    <tr className="text-left bg-[#F8F8F8] shadow-lg">
                        {header.map((h, i) => (
                            <th key={i} className={`border border-opacity-10 border-primary whitespace-nowrap text-[0.986rem] py-7 px-[1.97rem] text-base font-normal capitalize`}>
                                <div className="flex items-center space-x-1">
                                    <p>{h}</p>
                                    <BothArrow />
                                </div>
                            </th>
                        ))}
                        <th className="border border-primary border-opacity-10"></th>
                    </tr>
                </thead>
                <tbody>
                    {fetchData.map((d, i) => (
                        <tr key={i} className={`text-base font-medium leading-6`}>
                            <td className="border border-primary border-opacity-10">
                                <div className="px-[1.97rem] pt-[1.97rem] h-32">
                                    #001
                                </div>
                            </td>
                            <td>
                                <div className="mx-[1.97rem] w-[4.63rem] h-[4.69rem] rounded-[0.44rem] overflow-hidden">
                                    <img src={d.img} alt='img' className="w-full h-full object-cover" />
                                </div>
                            </td>
                            <td className="border border-primary border-opacity-10" style={{ boxShadow: '10px 0px 15px -10px #dad8d8' }}>
                                <div className="px-[1.97rem] pt-[1.97rem] h-32 text-headline">
                                    {d.username}
                                </div>
                            </td>
                            <td className="border border-primary border-opacity-10">
                                <div className="px-[1.97rem] pt-[1.97rem] h-32">
                                    FMC
                                </div>
                            </td>
                            <td className="border border-primary border-opacity-10">
                                <div className="px-[1.97rem] pt-[1.97rem] h-32">
                                    0.3 ml per Litre
                                </div>
                            </td>
                            <td className="border border-primary border-opacity-10">
                                <div className="mx-[1.97rem] flex items-center space-x-6">
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
