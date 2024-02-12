import React from 'react'
import Chart from './Chart'

export default function ChartWrap() {
    return (
        <div className="border border-gray border-opacity-50 overflow-hidden rounded-2xl w-full h-[40rem]">
            <div className="flex justify-center flex-col items-center space-y-7 pt-12">
                <p className="text-[1.358rem]">Overview Stats</p>
                <h2 className="text-[1.81rem] font-semibold">19 Total Request</h2>
                <div className="space-x-12 font-medium">
                    <button className="text-gray">Day</button>
                    <button className="text-gray">Week</button>
                    <button className="font-bold">Month</button>
                    <button className="text-gray">Year</button>
                </div>
            </div>
            <div className="block w-full h-full">
                <Chart />
            </div>
        </div>

    )
}
