import React from 'react';
import arrow from '../../asset/icon/Arrow-2.svg';
import star from '../../asset/icon/star.svg';
import mic from '../../asset/icon/mic.svg';
import playlist from '../../asset/icon/collection-play.svg';
import docs from '../../asset/icon/file-earmark-text.svg'
import Plyr from "plyr-react"
import "plyr-react/plyr.css"
import BlogProfile from '../../components/BlogProfile/BlogProfile';
import RelatedProducts from '../../components/RelatedProducts/RelatedProducts';
const blogProfile = {
    image: 'https://source.unsplash.com/random',
    name: 'John Smith',
    designation: 'Professor of M.Sc. Crop Engineering',
    about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco'
}
const relatedProduct = [
    {
        id: 1,
        image: 'https://source.unsplash.com/random',
        title: 'Khodal Iron Earth 100 Psi Motor',
        price: 450,
        category: 'Category'
    },
    {
        id: 2,
        image: 'https://source.unsplash.com/random',
        title: 'Khodal Iron Earth 100 Psi Motor',
        price: 450,
        category: 'Category'
    },
    {
        id: 3,
        image: 'https://source.unsplash.com/random',
        title: 'Khodal Iron Earth 100 Psi Motor',
        price: 450,
        category: 'Category'
    },
    {
        id: 2,
        image: 'https://source.unsplash.com/random',
        title: 'Khodal Iron Earth 100 Psi Motor',
        price: 450,
        category: 'Category'
    },
    {
        id: 3,
        image: 'https://source.unsplash.com/random',
        title: 'Khodal Iron Earth 100 Psi Motor',
        price: 450,
        category: 'Category'
    },
]
const KnowledgeDetails = () => {
    const plyrProps = {
        type: "vidoe",
        source: {
            src: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
            type: 'video/mp4',
            size: 720,
        },                                   //"https://www.youtube.com/watch?v=qltUIBaGMTc", // https://github.com/sampotts/plyr#the-source-setter
        options: undefined, // https://github.com/sampotts/plyr#options
        // Direct props for inner video tag (mdn.io/video)
    }
    return (
        <div className='relative'>
            <div className="h-[30vh] w-full relative">
                <img className='h-full w-full' src={'https://source.unsplash.com/random'} alt="" />
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
            <div className="px-5 pb-7">
                <p className="title text-xl font-bold font-manrope text-headline">Lorem ipsum dolor sit amet</p>
                <p className="text-gray font-manrope text-[17px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices lectus in pellentesque elit dui. Urna ultrices tellus varius scelerisque suspendisse pellentesque. Quam vitae vel, feugiat consequat a massa mi. Dolor a integer aliquet orci quam nibh id tortor morbi.</p>
                <div className="w-full h-52 rounded-xl overflow-hidden my-5">

                    <img className='w-full h-full' src="https://source.unsplash.com/random" alt="" />
                </div>
                <p className="title text-xl font-bold font-manrope text-headline">Quam vitae vel, feugiat consequat a massa mi</p>
                <p className="text-gray font-manrope text-[17px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices lectus in pellentesque elit dui. Urna ultrices tellus varius scelerisque suspendisse pellentesque. Quam vitae vel, feugiat consequat a massa mi. Dolor a integer aliquet orci quam nibh id tortor morbi.</p>
                <div className="w-full h-52 rounded-xl overflow-hidden my-5 relative">
                    <Plyr {...plyrProps} />
                    {/* <button onClick={() => { }} className='absolute top-[45%] left-[45%]' type="button">
                        play
                    </button>
                    <video src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" autoPlay={true}></video> */}
                </div>
                <p className="title text-xl font-bold font-manrope text-headline">Quam vitae vel, feugiat consequat a massa mi</p>
                <p className="text-gray font-manrope text-[17px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices lectus in pellentesque elit dui. Urna ultrices tellus varius scelerisque suspendisse pellentesque. Quam vitae vel, feugiat consequat a massa mi. Dolor a integer aliquet orci quam nibh id tortor morbi.</p>
            </div>
            <div className="bg-gray h-[1px] w-auto m-5 "></div>
            <BlogProfile data={blogProfile} />
            <RelatedProducts data={relatedProduct} />
        </div>
    );
};

export default KnowledgeDetails;