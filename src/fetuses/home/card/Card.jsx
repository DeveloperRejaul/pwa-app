import React from 'react'

export default function Card({ title = "name", value = "0", msg }) {
    return (
        <div className="w-[18.188rem] min-h-[13.688rem] bg-[#FFF6EF] p-6 space-y-3 rounded-xl flex flex-col justify-between shadow-md">
            <h2 className="text-xl font-base">{title}</h2>
            <p className="font-semibold text-6xl">{value}</p>
            <p className="text-xs opacity-30">{msg ? '25% this month' : ''}</p>
        </div>
    )
}
