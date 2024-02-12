import React from 'react'

export default function Card({ title = "name", value = "0", msg }) {
    return (
        <div className="w-[18.188rem] min-h-[11rem] bg-[#FFF6EF] p-4 rounded-xl flex flex-col justify-between shadow-md">
            <h2 className="text-lg font-base font-manrope font-bold">{title}</h2>
            <p className="font-semibold text-6xl font-manrope">{value}</p>
            <p className="text-xs text-gray font-bold font-manrope">{msg ? '25% this month' : ''}</p>
        </div>
    )
}
