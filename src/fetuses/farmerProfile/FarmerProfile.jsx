import React from 'react'
import { ArrowForward } from '../../asset/icon'
const uri = "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
import { useNavigate } from 'react-router-dom'
export default function FarmerProfile() {
    const navigate = useNavigate()
    return (
        <div className='mx-3 space-y-2 h-screen'>
            <div className='flex items-center justify-between px-4'>
                <ArrowForward onClick={() => navigate("..", { relative: "path" })} className='rotate-180 text-5xl cursor-pointer' />
                <h1 className="font-bold text-2xl font-manrope bg-white text-headline text-center h-10">Farmer’s Profile</h1>
                <div />
            </div>

            {/* user info  Items  */}
            <div className='space-y-4 overflow-y-scroll h-[90vh] px-2'>
                <div className='flex flex-row items-center space-x-3 px-2 border py-2 border-border rounded-lg'>
                    <div className='h-12 w-12 rounded-full overflow-hidden'>
                        <img src={uri} alt="profile" />
                    </div>
                    <p className='text-headline font-bold text-lg'>Karna</p>
                </div>
                <div className='border border-border rounded-lg p-2 pb-6 pt-4 space-y-4'>
                    <div>
                        <p className='text-headline font-bold text-lg'>Problem Area</p>
                        <p className='text-paragraph text-lg '>Lorem Ipsum</p>
                    </div>
                    <div>
                        <p className='text-headline font-bold text-lg'>Description</p>
                        <p className='text-paragraph text-lg '>Lorem Ipsum</p>
                    </div>
                    <div>
                        <p className='text-headline font-bold text-lg'>Plot Name</p>
                        <p className='text-paragraph text-lg '>Lorem Ipsum</p>
                    </div>
                    <div>
                        <p className='text-headline font-bold text-lg'>Plot Area</p>
                        <p className='text-paragraph text-lg '>Lorem Ipsum</p>
                    </div>
                    <div>
                        <p className='text-headline font-bold text-lg'>Crop Name</p>
                        <p className='text-paragraph text-lg '>Lorem Ipsum</p>
                    </div>
                    <div>
                        <p className='text-headline font-bold text-lg'>First irrigation Date</p>
                        <p className='text-paragraph text-lg '>Lorem Ipsum</p>
                    </div>
                    <div>
                        <p className='text-headline font-bold text-lg'>Days from First irrigation Date</p>
                        <p className='text-paragraph text-lg '>Lorem Ipsum</p>
                    </div>
                    <div>
                        <p className='text-headline font-bold text-lg'>Crop Stage</p>
                        <p className='text-paragraph text-lg '>Lorem Ipsum</p>
                    </div>
                    <div>
                        <p className='text-headline font-bold text-lg'>Crop Stage</p>
                        <p className='text-paragraph text-lg '>Lorem Ipsum</p>
                    </div>
                    <div>
                        <p className='text-headline font-bold text-lg mb-2'>Images</p>
                        <div className='flex space-x-4'>
                            <div className='h-20 w-20 rounded-md bg-paragraph/50' />
                            <div className='h-20 w-20 rounded-md bg-paragraph/50' />
                        </div>
                    </div>
                </div>

                <div className='border border-border rounded-lg p-2 pb-6 pt-4 space-y-4'>
                    <div>
                        <p className='text-headline font-bold text-lg'>Address</p>
                        <p className='text-paragraph text-lg '>Lorem Ipsum dolor sat, Lorem Ipsum dolor sat, 098765</p>
                    </div>
                    <div>
                        <p className='text-headline font-bold text-lg'>Birth Date</p>
                        <p className='text-paragraph text-lg '>17 Jul, 1969</p>
                    </div>
                    <div>
                        <p className='text-headline font-bold text-lg'>Active Plot</p>
                        <p className='text-paragraph text-lg '>Farm DSS Plot, Farm DSS</p>
                    </div>
                    <div>
                        <p className='text-headline font-bold text-lg'>KB Subscription</p>
                        <p className='text-paragraph text-lg '>Yes</p>
                    </div>
                    <div>
                        <p className='text-headline font-bold text-lg'>Ticket number</p>
                        <p className='text-paragraph text-lg '>Yes</p>
                    </div>
                    <div>
                        <p className='text-headline font-bold text-lg'>Raised On</p>
                        <p className='text-paragraph text-lg '>17 Jul, 2023 10:30:00</p>
                    </div>
                </div>
            </div>
        </div>
    )
}