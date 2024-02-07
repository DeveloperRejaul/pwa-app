import React, { useState } from 'react';
import { ArrowBottom } from '../../../asset/icon';
import Button from '../../../components/button/Button';

function CustomDopDown({ placeholder = '' }) {
    const [open, setOpen] = useState(false);
    const [selectData, setSelectData] = useState(null);

    const onSelect = (data) => {
        setSelectData(data);
        setOpen(false);
    }
    return (
        <div className="relative">
            <div className="min-w-[5rem] flex bg-primary bg-opacity-15 rounded-xl overflow-hidden items-center px-2 cursor-pointer" onClick={() => setOpen(!open)}>
                <input placeholder={placeholder} defaultValue={selectData} className="w-full h-10  outline-none text-center bg-transparent" />
                <ArrowBottom />
            </div>
            {open ? (
                <div className="flex flex-col absolute bg-light w-full border border-t-0 border-primary border-opacity-30 rounded-md py-2 space-y-2">
                    <a href="#" className="px-2" onClick={() => onSelect('Link 1')}>Link 1</a>
                    <a href="#" className="px-2" onClick={() => onSelect('Link 2')}>Link 2</a>
                    <a href="#" className="px-2" onClick={() => onSelect('Link 3')}>Link 3</a>
                </div>
            ) : ''}
        </div>
    )
}
export default function AddSlot() {
    return (
        <div className="w-80 shadow-xl border border-primary border-opacity-30 rounded-xl bg-light p-5 space-y-5 pb-10">
            <div className="space-y-2">
                <p>Add Slot</p>
                <div className="flex items-center gap-3">
                    <CustomDopDown placeholder="M/M" />
                    <CustomDopDown placeholder="D/D" />
                    <CustomDopDown placeholder="Y/Y" />
                </div>
            </div>
            <div className="space-y-2">
                <p>Time</p>
                <div className="flex items-center gap-3">
                    <input type="number" placeholder="00:00" className="bg-primary bg-opacity-15 text-center min-w-[5rem] rounded-xl p-2 outline-none" />
                    <input type="number" placeholder="00:00" className="bg-primary bg-opacity-15 text-center min-w-[5rem] rounded-xl p-2 outline-none" />
                    <CustomDopDown placeholder="PM" />
                </div>
            </div>
            <div className="text-center">
                <Button text="Open time slot for user" className="h-10 w-full" />
            </div>
        </div>
    )
}
