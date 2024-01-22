import React from 'react'
import Button from '../button/Button'

function Card() {
  return (
    <div className='w-[330px] h-[190px] border-2 border-paragraph/20 rounded-md p-2 flex flex-col justify-between'>
        
        {/* Header Part */}
        <div className='flex space-x-4 items-center'>
            <div className='bg-paragraph w-[44px] h-[44px] rounded-2xl' />
            <p className='font-bold text-xl text-headline'>User Name</p>
        </div>

        {/* details part */}
        <div className='flex justify-between'>
            <div>
                <p className='text-paragraph text-sm'>Date Created</p>
                <p className='font-bold text-headline text-sm'>Thu 1/7/2023</p>
            </div>
            <div>
                <p className='text-paragraph text-sm'>Time</p>
                <p className='font-bold text-headline text-sm'>6:00 pm</p>
            </div>
            <div>
                <p className='text-paragraph text-sm'>Request Id</p>
                <p className='font-bold text-headline text-sm'>#REQ-001231255</p>
            </div>
        </div>

        {/* Bottom Part */}
        <div className='flex justify-between items-center'>
            <div>
                <p className='text-paragraph text-sm '>Problem aria</p>
                <p className='text-headline font-bold text-xl'>Leaf</p>
            </div>
            <Button text={"Open"}/>
        </div>

    </div>
  )
}

export default Card