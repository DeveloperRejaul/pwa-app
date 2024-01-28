import React from 'react'
import Chart from './Chart'

export default function ChartWrap() {
    return (
        <div className="border border-gray border-opacity-50 overflow-hidden">
            <div className="flex justify-center flex-col items-center space-y-7 pt-12">
                <p className="text-xl">Overview Stats</p>
                <h2 className="text-[1.7rem] font-semibold">19 Total Request</h2>
                <div className="space-x-12 font-medium opacity-50">
                    <button>Day</button>
                    <button>Week</button>
                    <button>Month</button>
                    <button>Year</button>
                </div>
            </div>
            <Chart />
        </div>

    )
}
