import React from 'react';

export default function BuyerCard({ data }) {
    console.log(data);
    return (
        <div className='max-w-[21.5rem] shrink-0 shadow-sm'>
            <div className="rounded-lg overflow-hidden border-b border-l border border-gray border-opacity-20  p-5">
                <div className="max-w-[18.88rem] max-h-[16.7rem] overflow-hidden rounded-md ">
                    <img className='h-full w-full object-cover' src={data.img} alt="" />
                </div>
                <p className="text-[1.92rem] font-medium">{data.username}</p>
                <div className="flex items-center justify-between text-[1.7rem] text-paragraph">
                    <p>Jun 1</p>
                    <p >11.30 am</p>
                </div>
            </div>
        </div>
    )
}
