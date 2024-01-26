import React from 'react';
import chatCorner1 from '../../asset/icon/chatCorner1.svg';
import chatCorner2 from '../../asset/icon/chatCorner2.svg';
import { DownloadedIcon } from '../../asset/icon';
const Bubble = ({ data = {} }) => {
    if (data.user == 'self') {
        return (
            <div className="relative">
                <div className='bg-primary px-3 font-manrope text-white w-fit max-w-[60vw] rounded-[10px] pt-3'>
                    {
                        Object.hasOwn(data, 'text') && <p className=" text-sm font-medium  leading-5">{data.text || ""}</p>
                    }
                    {
                        Object.hasOwn(data, 'image') && <img className="" src={data.image} alt="" />
                    }
                    {
                        Object.hasOwn(data, 'file') && <a href={data.file.url} className="flex gap-2 items-center">{data.file.name} <DownloadedIcon className='h-5 w-5' /></a>
                    }
                    <p className="text-[10px] text-end py-1">{data.time || ""}</p>
                </div>
                <img className='absolute -bottom-[6px] -left-[6px]' src={chatCorner2} />
            </div >
        );
    } else {
        return (
            <div className="relative">
                <div className='bg-light px-3 font-manrope  ml-auto  text-headline w-fit max-w-[60vw] rounded-[10px] pt-3'>
                    <p className=" text-sm font-medium  leading-5">{data.text || ""}</p>
                    <p className="text-[10px] text-end py-1">{data.time || ""}</p>
                </div>
                <img className='absolute -bottom-[6px] -right-[6px] ' src={chatCorner1} />
            </div>
        );
    }
};

export default Bubble;