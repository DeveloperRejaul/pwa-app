import React from 'react';
import { ArrowBottom } from '../../asset/icon';

export default function CusDropdown() {
    return (
        <div className='flex justify-between items-center w-[330px] border border-border px-3 py-4 rounded-md'>
            <span className='font-poppins text-headline'>Ongoing</span>
            <ArrowBottom className='cursor-pointer' />
        </div>
    )
}
