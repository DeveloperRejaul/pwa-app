import React from 'react';
import FakeDate from '../../../db/AllRequest.json';
import { useNavigate } from 'react-router-dom';

export default function ChatList() {
    const navigate = useNavigate();

    return (
        <div className="space-y-12">
            <div className="flex justify-between items-center">
                <p className="text-[1.358rem] font-medium leading-8">Chat Opened</p>
                <button className="text-base opacity-30" type="button">See all</button>
            </div>
            <div className="space-y-12 overflow-y-auto">
                {FakeDate.map((d, i) => (
                    <div key={i} className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                            <img src={d.img} alt=""
                                className="w-12 h-12 rounded-full overflow-hidden object-contain bg-gray " />
                            <p className="font-medium text-black font-manrope">{d.username}</p>
                        </div>
                        <p className='text-gray font-manrope font-semibold'>{new Date().toLocaleDateString()}</p>
                        <button onClick={() => navigate('/chat')} className="bg-primary text-secondary rounded-lg h-8 w-[5.8rem] text-[0.621rem]" type="button">Open Chat</button>
                    </div>
                ))}
            </div>
        </div>
    )
}
