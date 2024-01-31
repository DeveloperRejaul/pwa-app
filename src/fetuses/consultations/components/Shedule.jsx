import React, { useEffect, useState } from 'react';

const tHead = ["SUN", "MON", "TUE", "WED", "TRU", "FRI", "SAT"]
export default function Shedule() {
    const [weekDt, setWeekDt] = useState();

    function getCurrentWeekDates() {
        let currentDate = new Date();
        let startOfWeek = new Date(currentDate);
        startOfWeek.setDate(currentDate.getDate() - currentDate.getDay());
        let endOfWeek = new Date(currentDate);
        endOfWeek.setDate(currentDate.getDate() + (6 - currentDate.getDay()));
        let weekDates = [];
        for (let date = new Date(startOfWeek); date <= endOfWeek; date.setDate(date.getDate() + 1)) {
            weekDates.push(new Date(date));
        }
        return weekDates;
    }
    useEffect(() => {
        setWeekDt(getCurrentWeekDates());
    }, []);

    return (
        <div className="">
            <table className="w-full">
                <thead className="font-medium text-base text-gray">
                    {tHead.map((d, i) => (
                        <th key={i} className="pb-2">{d}</th>
                    ))}
                </thead>
                <tbody>
                    <tr>
                        {weekDt?.map((d, i) => (
                            <td key={i}>
                                <div className={`${new Date().getDate() === new Date(d).getDate() ? 'bg-primary text-secondary rounded-full' : ''} flex items-center justify-center w-10 h-10 mx-auto font-bold text-2xl p-6`}>
                                    {new Date(d).getDate()}
                                </div>
                                <div className="bg-gray bg-opacity-20 py-2 m-2 rounded-full text-center">1:00 PM</div>
                                <div className="bg-gray bg-opacity-20 py-2 m-2 rounded-full text-center">1:00 PM</div>
                            </td>
                        ))}
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
