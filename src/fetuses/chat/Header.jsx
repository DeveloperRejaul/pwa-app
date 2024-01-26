import React from 'react';
import { useNavigate } from 'react-router-dom'
import { Arrow } from '../../asset/icon';

const Header = ({ data }) => {
    const navigate = useNavigate()
    const { status, name, image } = data;
    return (
        <div className='py-3 flex gap-6 items-center '>
            <Arrow onClick={() => navigate("..", { relative: "path" })} className='cursor-pointer' />
            <div className="flex gap-2 items-center">
                <div className="rounded-full h-10 w-10 p-[2px] overflow-hidden border border-primary ">
                    <img className='h-full w-auto rounded-full' src={image} alt="" />
                </div>
                <div className="">
                    <p className="text-lg font-manrope font-semibold text-headline">
                        {name}
                    </p>
                    <p className="font-manrope text-xs text-gray">{status}</p>
                </div>
            </div>
        </div>
    );
};

export default Header;