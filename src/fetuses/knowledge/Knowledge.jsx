import React from 'react';
import { ArrowForward } from '../../asset/icon';
const url = "https://freepngimg.com/thumb/apple/9-apple-png-image.png"
const data = new Array(100).fill(0).map((_,i)=>i)

function Knowledge() {
  return (
    <div className='mx-2'>
      <div className='space-y-4'>
      {data.map((_,i)=> (
      <div key={i} className='p-1 px-2 border-2 border-paragraph/25 rounded-md flex justify-between items-center space-x-6'>
        <div className='h-[50px] w-[70px] rounded-md bg-[#FFECD6] overflow-hidden'>
          <img src={url} alt="logo" />
        </div>
        <div>
          <p className='text-headline font-semibold'>Brinjal</p>
          <p className='text-paragraph'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
        </div>
        <ArrowForward className='fill-primary text-6xl'/>
      </div>
      ) )}
      </div>
    </div>
  )
}

export default Knowledge