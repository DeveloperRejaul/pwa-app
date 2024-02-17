import React, { useState } from 'react';
import CusDropdown from '../../components/dropdown/CusDropdown';
import fakeData from '../../db/AllRequest.json';
import BuyerCard from './BuyerCard';

const FilterList = ["Plot Details", "Advice History", "Schedule", "Weekly Images"]
export default function Buyer() {
    const [actMenu, setActMenu] = useState('Plot Details');
    return (
        <div>
            <div className="border border-primary border-opacity-20 rounded-2xl py-10 px-14">
                <div className="flex flex-col xl:flex-row items-center xl:items-start space-y-10 xl:space-y-0 space-x-20">
                    <div>
                        <div className='flex items-center justify-center'>
                            <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                                alt="img" className="min-w-[16rem] h-64 rounded-full object-center" />
                        </div>
                        <div className="pt-10 space-y-3 flex flex-col items-center font-medium">
                            <p className="text-2xl ">Advisor Lorem Name</p>
                            <p className="text-gray text-[1.34rem]">9876543210</p>
                        </div>
                        <div className="pt-10 space-y-3 flex flex-col items-center font-medium text-[1.25rem]">
                            <p className="">Address</p>
                            <p className="text-gray text-center">Lorem Ipsum dolor sat, Lorem Ipsum dolor sat, 098765</p>
                        </div>
                    </div>
                    <div className="space-y-4">

                        <div className="flex items-center">
                            <p className="font-medium text-2xl pr-10 py-3">Birth Date :</p>
                            <p className="text-gray font-medium text-2xl">17 Jul, 1969</p>
                        </div>
                        <div className="flex items-center">
                            <p className="font-medium text-2xl pr-10 py-3">Active Plot :</p>
                            <p className="text-gray font-medium text-2xl">Farm DSS Plot, Farm DSS</p>
                        </div>
                        <div className="flex items-center">
                            <p className="font-medium text-2xl pr-10 py-3">KB Subscription :</p>
                            <p className="text-gray font-medium text-2xl">Yes</p>
                        </div>
                        <div className="inline-block">
                            <p className="font-medium text-2xl pr-10 py-3 inline-block">Active Webinar :</p>
                            <p className="text-gray font-medium text-2xl inline-block">(May 2020) Precision
                                Pomegranate Farming Training,  (May 2020) Precision Pomegranate Farming Training, (August 2020) Precision Pomegranate Farming Training, (September 2020) Precision Pomegranate Farming Training, (October 2020) Precision Pomegranate Farming Training, (December 2020) Precision Pomegranate Farming Training, (February 2021) Precision Pomegranate Farming Training, (March 2021) Precision Pomegranate Farming Training, (April 2021) Precision Pomegranate Farming Training, (May 2021) Precision Pomegranate Farming Training, ( जून २०२१ ) फायदेशीर डाळिंब शेती प्रशिक्षण , (July 2021) Precision Pomegranate Farming Training, (July 2021) Precision Pomegranate Farming Training, (August 2021) Precision Pomegranate Farming Training, (January 2021) Precision Pomegranate Farming Training, (July 2020) Precision Pomegranate Farming Training, (October 2021) Precision Pomegranate Farming Training, (November 2021) Precision Pomegranate Farming Training, (December 2021) Precision Pomegranate Farming T</p>
                        </div>
                        <div className="flex items-center">
                            <p className="font-medium text-2xl pr-10 py-3">Advisory Plan :</p>
                            <p className="text-gray font-medium text-2xl">Lorem Ipsum </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-headline pt-11">
                <h2 className="text-[1.48rem] font-medium pb-6">Plot</h2>
                <div className="w-72">
                    <CusDropdown DefaultVal="Advisory Request" />
                </div>
                <div className="pt-6 text-paragraph pb-[1.13rem]">
                    {FilterList.map((m, i) => (
                        <h2 key={i} className={`text-[1.313rem] font-medium inline-block  mr-[6.25rem] cursor-pointer ${actMenu === m ? 'underline text-primary text-2xl underline-offset-4' : ''}`} onClick={() => setActMenu(m)}>{m}</h2>
                    ))}
                </div>
                <div className="pt-[3.25rem] space-y-7">
                    <h2 className="text-[1.48rem] font-medium">Week 1</h2>
                    <div className="">
                        {fakeData.map((d, i) => (
                            <div key={i} className="inline-block mr-[1.63rem]">
                                <BuyerCard data={d} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
