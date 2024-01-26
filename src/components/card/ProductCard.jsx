import React from 'react';
import arrow from '../../asset/icon/Arrow-right.svg';
const ProductCard = ({ product }) => {
    const { image, title, price, category } = product
    return (
        <div className='w-[13.5rem] shrink-0 shadow-sm '>
            <div className="rounded-2xl overflow-hidden border-b border-l border-r border-gray">
                <div className="w-full h-[8.44rem] overflow-hidden rounded-b-2xl">
                    <img className='h-full w-full' src={image} alt="" />
                </div>
                <div className="text-headline flex gap-3 px-2">
                    <p className="text-base font-semibold">{title}</p>
                    <p className="font-bold text-lg"><span className="text-xs">₹</span>{price}</p>
                </div>
                <div className="flex items-center justify-between px-2 pb-3">
                    <p className="text-gray text-xs font-manrope">{category}</p>
                    <button onClick={() => { console.log(product) }} type="button">
                        <img src={arrow} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;