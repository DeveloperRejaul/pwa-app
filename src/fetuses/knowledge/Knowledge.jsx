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
    <Container>
      {
        data.map((d, i) => (
          <div key={i} className='py-3 px-[0.94rem] border-2 border-paragraph/15 rounded-[1.19rem] flex justify-between items-center space-x-6'>
            <div className='space-x-3 flex font-manrope items-center'>
              <div className='h-[6rem] max-w-[6rem] rounded-[0.594rem] bg-[#FFECD6] overflow-hidden'>
                <img src={d.uri} alt="logo" className='h-full w-full' />
              </div>
              <div>
                <p className='text-headline text-[1.59rem] tracking-[-0.016em] font-medium'>{d.name}</p>
                <p className='text-paragraph font-[1.19rem] tracking-[-0.024em]'>{d.details}</p>
              </div>
            </div>
            <ArrowForward onClick={() => navigate(NAV_PATH.CARROT, { state: { name: d.name, img: d.uri } })} className='fill-primary text-6xl cursor-pointer' />
          </div>
        ))
      }
    </Container>

  )
}

export default Knowledge



function Container({ children }) {
  return (
    <div className=' h-screen overflow-hidden'>
      <div className='space-y-4 h-screen overflow-hidden'>
        {/* <Input /> */}
        <div className='h-[90vh] overflow-y-scroll space-y-6 pb-40 no-scrollbar' >
          {children}
        </div>
      </div>
    </div>
  )
}