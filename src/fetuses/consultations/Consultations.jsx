import React, { useState } from 'react';
import { ArrowBottom, Clock, User, World } from '../../asset/icon';
import Button from '../../components/button/Button';
import Calender from '../../components/calender/Calender';
import Shedule from './components/Shedule';
import AddSlot from './components/AddSlot';

export default function Consultations() {
    const [showModal, setShowModal] = useState(false);

    return (
        <div className="mx-10 xl:mx-0 py-11 flex space-x-6">
            <div className="w-full">
                <div className="flex justify-between">
                    <h2 className="text-2xl font-medium">January 2023</h2>
                    <div className="relative flex space-x-4">
                        <button className="bg-primary bg-opacity-30 text-primary w-20 text-xs font-medium rounded-lg py-2" onClick={() => setShowModal(!showModal)}>Add Slot</button>
                        {showModal ? (
                            <div className="absolute right-28 top-9">
                                <AddSlot />
                            </div>
                        ) : ''}
                        <div className="flex items-center space-x-2">
                            <ArrowBottom className="rotate-90 opacity-40" />
                            <p className="opacity-30">Today</p>
                            <ArrowBottom className="-rotate-90" />
                        </div>
                    </div>

                </div>
                <div className="py-12">
                    <Shedule />
                </div>
            </div>
            <div className="hidden xl:block  font-In space-y-10 ">
                <div className="px-5 py-9 bg-primary bg-opacity-15 space-y-4 rounded-2xl">
                    <div className="space-x-4 flex items-center text-base font-medium leading-4">
                        <User />
                        <p className="whitespace-nowrap">Meet with User Lorem</p>
                    </div>
                    <h1 className="text-xl font-medium whitespace-nowrap">Farm Lorem IpSum</h1>
                    <div className="font-normal text-base text-gray">
                        <div className="flex items-center space-x-4">
                            <Clock />
                            <p>1:00 PM to 2:00 PM</p>
                        </div>
                        <div className="flex items-center space-x-4">
                            <World />
                            <p>Indian Standard Time</p>
                        </div>
                        <div className="flex items-center space-x-4">
                            <World />
                            <p>Zoom</p>
                        </div>
                    </div>
                    <Button text="Join Call" className="h-11" />
                </div>
                <div>
                    <Calender />
                </div>
            </div>
        </div>
    )
}
