import React from 'react';
import { BothArrow } from '../../asset/icon';
import fetchData from '../../db/AllRequest.json';
import Button from '../../components/button/Button';
import Pagination from '../../components/Pagination/Pagination';

const header = ["ID", "Former Name", "Raised On", "Ticket", "Plot Name", "Crop Name", "Problem Area Name", "First Irrigation Date", "Action"];
export default function TblExportAdvisory() {
    return (
        <>
            <div className="overflow-auto no-scrollbar">
                <table className="[&>tbody>*:nth-child(even)]:bg-light bg-white font-poppins w-full text-[#939393] rounded-md overflow-hidden">
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
                            <tr key={i} className={`text-base font-medium leading-6 `}>
                                <td className="border border-primary border-opacity-10">
                                    <div className="px-[1.97rem] py-[1.97rem]">
                                        #001
                                    </div>
                                </td>

                                <td className="border border-primary border-opacity-10">
                                    <div className="px-[1.97rem] py-[1.97rem] text-headline">
                                        {d.username}
                                    </div>
                                </td>
                                <td className="border border-primary border-opacity-10">
                                    <div className="px-[1.97rem] py-[1.97rem]">
                                        17 Jul, 2024
                                    </div>
                                </td>
                                <td className="border border-primary border-opacity-10">
                                    <div className="px-[1.97rem] py-[1.97rem]">
                                        L1O2R3E4M5667
                                    </div>
                                </td>
                                <td className="border border-primary border-opacity-10">
                                    <div className="px-[1.97rem] py-[1.97rem]">
                                        Lorem Plot
                                    </div>
                                </td>
                                <td className="border border-primary border-opacity-10">
                                    <div className="px-[1.97rem] py-[1.97rem]">
                                        Pomegranate
                                    </div>
                                </td>
                                <td className="border border-primary border-opacity-10">
                                    <div className="px-[1.97rem] py-[1.97rem]">
                                        Leaf
                                    </div>
                                </td>
                                <td className="border border-primary border-opacity-10">
                                    <div className="px-[1.97rem] py-[1.97rem] ">
                                        17 Jul, 2024
                                    </div>
                                </td>
                                <td className="border border-primary border-opacity-10">
                                    <div className="mx-[1.97rem] flex items-center">
                                        <Button text="Profile " className="h-[3rem]" />
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="py-10 ">
                <Pagination />
            </div>
        </>
    )
}
