import React from 'react';
import Button from '../../../components/button/Button';
import TblAdvisoryProfile from './TblAdvisoryProfile';

export default function AdvisoryUserDetails() {
    return (
        <div className="py-20">
            <div className="flex
             flex-col 
            xl:flex-row
             space-x-20">
                <div className="flex justify-center flex-col items-center xl:block">
                    <div className=" w-64 h-64 rounded-full flex items-center justify-center bg-gray bg-opacity-30 overflow-hidden">
                        <img src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg"
                            alt="img" className="object-cover w-full h-full" />
                    </div>
                    <div className="pt-4 flex flex-col items-center">
                        <p className="text-2xl font-medium ">Advisor Lorem Name</p>
                    </div>
                </div>
                <div className="space-y-4">
                    <table>
                        <tbody>
                            <tr className="">
                                <td className="font-medium text-2xl pr-10 py-3">Address:</td>
                                <td className="text-gray font-medium text-2xl">Lorem Ipsum dolor sat, Lorem Ipsum dolor sat, 098765</td>
                            </tr>
                            <tr>
                                <td className="font-medium text-2xl pr-10 py-3">Birth Date:</td>
                                <td className="text-gray font-medium text-2xl">17 Jul, 1969</td>
                            </tr>
                            <tr>
                                <td className="font-medium text-2xl pr-10 py-3">Mobile Number :</td>
                                <td className="text-gray font-medium text-2xl">9876543210</td>
                            </tr>
                            <tr>
                                <td className="font-medium text-2xl pr-10 py-3">Gender :</td>
                                <td className="text-gray font-medium text-2xl">Male</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="pt-16  mx-10 xl:mx-0 overflow-auto">
                <TblAdvisoryProfile />
            </div>
        </div>
    )
}
