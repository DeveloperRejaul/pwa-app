import React, { useEffect } from 'react';
import fakeData from '../../db/AllRequest.json';
import Button from '../../components/button/Button';

export default function ModalAssign() {

    return (
        <div className="absolute border border-opacity-30 border-primary rounded-3xl bg-white z-10 right-0 space-y-8">
            <div className="px-11 pt-11">
                <input type="text" placeholder="Search here" className="rounded-2xl h-16 outline-none bg-secondary bg-opacity-40 px-7 text-gray" />
            </div>
            <div className="space-y-2 h-[24rem] overflow-auto px-11">
                {fakeData.map((d, i) => (
                    <div key={i} className="flex justify-between items-center h-16 rounded-2xl">
                        <div className="flex items-center space-x-3">
                            <img src={d.img} alt="img" className="w-7 h-7 rounded-full" />
                            <p>{d.username}</p>
                        </div>
                        <Button text="Assign user" />
                    </div>
                ))}
            </div>
        </div>
    )
}
