import React from 'react'

export default function Card({ title = "name", value = "0", msg }) {
    return (
        <div className="w-[18.188rem] min-h-[11rem] bg-[#FFF6EF] p-4 rounded-xl flex flex-col justify-between shadow-md">
            <h2 className="text-[1.358rem] font-medium">{title}</h2>
            <p className="font-semibold text-[4rem] ">{value}</p>
            <p className="text-[0.89rem] text-gray font-medium">{msg ? '25% this month' : ''}</p>
        </div>
    )
}
