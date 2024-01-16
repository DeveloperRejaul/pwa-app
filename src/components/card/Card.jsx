import React from 'react'
import Button from '../button/Button'

function Card() {
  return (
    <div className='w-[330px] h-[190px] border-2 border-gray-300 rounded-md p-2 flex flex-col justify-between'>
        
        {/* Header Part */}
        <div className='flex space-x-4 items-center'>
            <div className='bg-gray-500 w-[44px] h-[44px] rounded-2xl' />
            <p className='font-bold text-xl text-gray-800'>User Name</p>
        </div>

        {/* details part */}
        <div className='flex justify-between'>
            <div>
                <p className='text-gray-400 text-sm'>Date Created</p>
                <p className='font-bold text-gray-700 text-sm'>Thu 1/7/2023</p>
            </div>
            <div>
                <p className='text-gray-400 text-sm'>Time</p>
                <p className='font-bold text-gray-700 text-sm'>6:00 pm</p>
            </div>
            <div>
                <p className='text-gray-400 text-sm'>Request Id</p>
                <p className='font-bold text-gray-700 text-sm'>#REQ-001231255</p>
            </div>
        </div>

        {/* Bottom Part */}
        <div className='flex justify-between items-center'>
            <div>
                <p className='text-gray-500 text-sm '>Problem aria</p>
                <p className='text-gray-900 font-bold text-xl'>Leaf</p>
            </div>
            <Button text={"Open"}/>
        </div>

    </div>
  )
}

export default Card