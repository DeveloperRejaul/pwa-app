import React from 'react'
import { Filter, Search } from '../../asset/icon'

function Input() {
    return (
        <div className='flex justify-between items-center'>
            <div className='border border-border rounded-xl px-4 py-3 flex w-[85%]'>
                <Search />
                <input className='focus:outline-none px-2 w-full' placeholder='Search' />
            </div>
            <div className='h-12 w-12 rounded-full justify-center items-center flex bg-gray/10'><Filter /></div>
        </div>
    )
}

export default Input