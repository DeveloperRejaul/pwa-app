import React from 'react';
import { useNavigate } from 'react-router-dom'
import { Arrow } from '../../asset/icon';

const Header = ({ data }) => {
    const navigate = useNavigate()
    const { status, name, image } = data;
    return (
        <div className=' px-6 py-3 bg-primary bg-opacity-30 rounded-t-xl'>
            {/* <Arrow onClick={() => navigate("..", { relative: "path" })} className='cursor-pointer' /> */}
            <div className="flex space-x-6 items-center">
                <div className="rounded-full h-10 w-10 p-[2px] overflow-hidden border border-primary ">
                    <img className='h-full w-auto rounded-full' src={image} alt="" />
                </div>
                <div className="">
                    <p className="text-lg font-manrope font-semibold text-headline">
                        {name}
                    </p>
                    {/* <p className="font-manrope text-xs text-gray">{status}</p> */}
                </div>
            </div>
        </div>
    );
};

export default Header;