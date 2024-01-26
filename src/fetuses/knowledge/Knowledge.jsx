import React from 'react';
import { ArrowForward } from '../../asset/icon';
import Input from '../../components/input/Input';
const url = "https://freepngimg.com/thumb/apple/9-apple-png-image.png"
const data = new Array(100).fill(0).map(() => ({ uri: url, name: "Brinjal", details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do" }))
import { useNavigate } from "react-router-dom";
import { NAV_PATH } from '../../constant/nav';

function Knowledge() {
  const navigate = useNavigate();

  return (
    <div className='mx-2'>
      <div className='space-y-4'>
        <Input />
        {data.map((d, i) => (
          <div key={i} className='p-1 px-2 border-2 border-paragraph/25 rounded-md flex justify-between items-center space-x-6'>
            <div className='h-[50px] w-[70px] rounded-md bg-[#FFECD6] overflow-hidden'>
              <img src={d.uri} alt="logo" className='h-full w-full' />
            </div>
            <div>
              <p className='text-headline font-semibold'>{d.name}</p>
              <p className='text-paragraph'>{d.details}</p>
            </div>
            <ArrowForward onClick={() => navigate(NAV_PATH.CARROT, { state: { name: d.name, img: d.uri } })} className='fill-primary text-6xl cursor-pointer' />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Knowledge