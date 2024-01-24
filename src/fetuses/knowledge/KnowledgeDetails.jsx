import React from 'react';
import bgImage from '../../asset/Images/Background_Header.jpg';
import arrow from '../../asset/icon/Arrow-2.svg';
import star from '../../asset/icon/star.svg';
import mic from '../../asset/icon/mic.svg';
import playlist from '../../asset/icon/collection-play.svg';
import docs from '../../asset/icon/file-earmark-text.svg'
const KnowledgeDetails = () => {
    return (
        <div className='relative'>
            <div className="h-[30vh] w-full relative">
                <img className='h-full w-full' src={bgImage} alt="" />
                <div className="absolute top-10 px-4">
                    <img src={arrow} alt="" />
                </div>
            </div>
            <div className="p-5">
                <div className="flex justify-between items-center">
                    <p className="font-manrope font-semibold text-xl text-headline">Lorem Ipsum Dolor</p>
                    <div className="flex items-center gap-2">
                        <img src={star} alt="" />
                        <p className="text-xl font-bold text-[#838383]">4.5</p>
                    </div>
                </div>
                <div className="flex gap-2 items-center my-2">
                    <div className="rounded-full bg-gray h-1 w-1"></div>
                    <p className="font-manrope text-gray text-xs">10 min read</p>
                </div>
                <div className="flex justify-between">
                    <button className='px-7 pt-7 pb-2 rounded-3xl border border-border space-y-3' type="button">
                        <img className='m-auto' src={mic} alt="" />
                        <p className="text-gray font-manropetext-xs">1 Audio</p>
                    </button>
                    <button className='px-7 pt-7 pb-2 rounded-3xl border border-border space-y-3' type="button">
                        <img className='m-auto' src={playlist} alt="" />
                        <p className="text-gray font-manropetext-xs">1 Video</p>
                    </button>
                    <button className='px-7 pt-7 pb-2 rounded-3xl border border-border space-y-3' type="button">
                        <img className='m-auto' src={docs} alt="" />
                        <p className="text-gray font-manropetext-xs">1 Docs</p>
                    </button>
                </div>

            </div>
        </div>
    );
};

export default KnowledgeDetails;