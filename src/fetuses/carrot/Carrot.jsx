import React from 'react';
import { ArrowForward } from '../../asset/icon';
import Input from '../../components/input/Input';
const uri = "https://images.pexels.com/photos/96715/pexels-photo-96715.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
const data = new Array(100).fill(0).map((_, i) => i)
import { useNavigate, useLocation } from "react-router-dom"
import { NAV_PATH } from '../../constant/nav';
function Carrot() {
    const location = useLocation()
    const navigate = useNavigate();
    return (
        <Container>
            <div className='mx-2 overflow-y-scroll h-[80vh] '>
                <div className='space-y-4 px-2'>
                    {data.map((_, i) => (
                        <div key={i} className='p-1 px-2 border-2 border-paragraph/25 rounded-md flex justify-between items-center space-x-6'>
                            <div className='h-[50px] w-[70px] rounded-md overflow-hidden'>
                                <img src={uri} alt="logo" className='w-full h-full' />
                            </div>

                            <div>
                                <div className='flex items-center space-x-3'>
                                    <p className='text-headline font-semibold'>Nutrition Management</p>
                                    <div className='h-5 w-5'>
                                        <img src={location.state.img} alt="" className='w-full h-full' />
                                    </div>
                                </div>
                                <p className='text-paragraph'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
                            </div>
                            <ArrowForward className='fill-primary text-6xl cursor-pointer' onClick={() => navigate(NAV_PATH.KNOWLEDGE_DETAILS)} />
                        </div>
                    ))}
                </div>
            </div>
        </Container>
    )
}

export default Carrot


function Container({ children }) {
    const navigate = useNavigate();
    const location = useLocation();

    return <div className='overflow-hidden space-y-4'>
        <div className='flex items-center justify-between px-4'>
            <ArrowForward onClick={() => navigate("..", { relative: "path" })} className='rotate-180 text-5xl cursor-pointer' />
            <h1 className="font-bold text-2xl font-manrope bg-white text-headline text-center h-10">{location.state.name}</h1>
            <div />
        </div>
        <div className='px-4'><Input /></div>
        {children}
    </div>
}