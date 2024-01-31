import React from 'react';
import { ArrowBottom, Clock, User, World } from '../../asset/icon';
import Button from '../../components/button/Button';

export default function Consultations() {
    return (
        <div className="py-11 flex space-x-6">
            <div className="w-full">
                <div className="flex justify-between">
                    <h2 className="text-2xl font-medium">January 2023</h2>
                    <div className="flex space-x-4">
                        <button className="bg-primary bg-opacity-30 text-primary w-20 text-xs font-medium rounded-lg py-2">Add Slot</button>
                        <div className="flex items-center space-x-28">
                            <ArrowBottom className="rotate-90" />
                            <ArrowBottom className="-rotate-90" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="font-In">
                <div className="px-5 py-9 bg-primary bg-opacity-15 space-y-4">
                    <div className="space-x-1 flex items-center text-base font-medium leading-4">
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
                    <Button text="Join Call" />
                </div>
            </div>
        </div>
    )
}
