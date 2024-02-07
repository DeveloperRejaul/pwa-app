import React, { useState } from 'react'
import Button from '../../components/button/Button'
import Password from './Password/Password';
import Otp from './Password/Otp';
import Forget from './Password/Forget'

export default function ProfileDsk() {
    const [show, setShow] = useState({ pass: false, otp: false, forget: false });
    return (
        <div className="py-20">
            <div className="flex flex-col xl:flex-row items-center xl:items-start space-y-10 xl:space-y-0 space-x-20">
                <div className="">
                    <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                        alt="img" className="min-w-[16rem] h-64 rounded-full object-center" />
                    <div className="pt-10 space-y-3 flex flex-col items-center">
                        <p className="text-2xl font-medium ">Advisor Lorem Name</p>
                        <Button className="h-16" text="Edit Data" />
                        {show.pass && (
                            <Password setState={setShow} />
                        )}
                        {show.otp && (
                            <Otp setState={setShow} />
                        )}
                        {show.forget && (
                            <Forget setState={setShow} />
                        )}
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
                    <Button className="h-16 w-72" text="Change Password" onClick={() => setShow((prev) => ({ pass: true, forget: false, otp: false }))} />
                </div>
            </div>
        </div>
    )
}
