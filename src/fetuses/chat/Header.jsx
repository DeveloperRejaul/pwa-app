import React from 'react';
import arrow from '../../asset/icon/Arrow-2.svg';
const Header = ({ data }) => {
    const { status, name, image } = data;
    return (
        <div className='py-3 flex gap-6 items-center '>
            <img src={arrow} alt="back" />
            <div className="flex gap-2 items-center">
                <div className="rounded-full h-10 w-10  overflow-hidden border border-primary ">
                    <img className='h-full w-auto' src={image} alt="" />
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