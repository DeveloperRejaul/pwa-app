import React from 'react'

export default function ProfileDsk() {
    return (
        <div className="hidden md:block py-20">
            <div className="flex space-x-20">
                <div>
                    <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                        alt="img" className="w-64 h-64 rounded-full object-center" />
                </div>
                <div>
                    <table>
                        <tbody>
                            <tr className="">
                                <td className="font-medium text-2xl pr-10 pb-6">Address:</td>
                                <td className="text-gray font-medium text-2xl">Lorem Ipsum dolor sat, Lorem Ipsum dolor sat, 098765</td>
                            </tr>
                            <tr>
                                <td className="font-medium text-2xl pr-10 pb-6">Birth Date:</td>
                                <td className="text-gray font-medium text-2xl">17 Jul, 1969</td>
                            </tr>
                            <tr>
                                <td className="font-medium text-2xl pr-10 pb-6">Mobile Number :</td>
                                <td className="text-gray font-medium text-2xl">9876543210</td>
                            </tr>
                            <tr>
                                <td className="font-medium text-2xl pr-10 pb-6">Gender :</td>
                                <td className="text-gray font-medium text-2xl">Male</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
