import React, { useEffect, useState } from 'react';
import { ArrowBottom } from '../../../asset/icon';
import Button from '../../../components/button/Button';

const Months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
const Years = ["2022", "2023", "2024"]
function CustomDopDown({ placeholder = '', Opts = [], getTime = { month: null, year: null, day: null }, setTime = () => { }, valueType }) {
    const [open, setOpen] = useState(false);
    const [selectData, setSelectData] = useState(null);

    const onSelect = (data) => {
        setSelectData(data);
        setOpen(false);
        setTime((prev) => ({ ...prev, [valueType]: data }));
    }

    return (
        <div className="relative">
            <div className="min-w-[5rem] flex bg-primary bg-opacity-15 rounded-xl overflow-hidden items-center px-2 cursor-pointer" onClick={() => setOpen(!open)}>
                <input placeholder={placeholder} defaultValue={selectData} className="w-full h-10  outline-none text-center bg-transparent" />
                <ArrowBottom />
            </div>
            {open ? (
                <div className="flex flex-col max-h-[12rem] overflow-y-auto absolute bg-light w-full border border-t-0 border-primary border-opacity-30 rounded-md py-2 space-y-2 z-10 text-gray">
                    {Opts.map((opt, i) => (
                        <div key={i} className="px-2 cursor-pointer hover:text-black" onClick={() => onSelect(opt)}>{opt}</div>
                    ))}
                </div>
            ) : ''}
        </div>
    )
}
export default function AddSlot() {
    const [time, setTime] = useState({ month: null, year: null, day: null });
    const [Opts, setOpts] = useState([]);

    useEffect(() => {
        if (time?.month !== null && time?.year !== null) {
            const getMonthIdx = Months.indexOf(time.month);
            const nextMonth = new Date(time?.year, getMonthIdx + 1, 1);
            const lastMonth = new Date(nextMonth - 1);
            let arr = []
            for (let i = 1; i <= lastMonth.getDate(); i++) arr.push(i);
            setOpts(arr);
        }
    }, [time]);
    return (
        <div className="w-80 shadow-xl border border-primary border-opacity-30 rounded-xl bg-light p-5 space-y-5 pb-10">
            <div className="space-y-2">
                <p>Add Slot</p>
                <div className="flex items-center gap-3">
                    <CustomDopDown placeholder="M/M" Opts={Months} getTime={time} setTime={setTime} valueType="month" />
                    <CustomDopDown placeholder="D/D" valueType="day" getTime={time} setTime={setTime} Opts={Opts} />
                    <CustomDopDown placeholder="Y/Y" Opts={Years} valueType="year" getTime={time} setTime={setTime} />
                </div>
            </div>
            <div className="space-y-2">
                <p>Time</p>
                <div className="flex items-center gap-3">
                    <input type="number" placeholder="00:00" className="bg-primary bg-opacity-15 text-center min-w-[5rem] rounded-xl p-2 outline-none" />
                    <input type="number" placeholder="00:00" className="bg-primary bg-opacity-15 text-center min-w-[5rem] rounded-xl p-2 outline-none" />
                    <CustomDopDown placeholder="PM" Opts={['AM', 'PM']} />
                </div>
            </div>
            <div className="text-center">
                <Button text="Open time slot for user" className="h-10 w-full" />
            </div>
        </div>
    )
}
