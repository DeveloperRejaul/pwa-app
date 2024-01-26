import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../card/ProductCard';

const RelatedProducts = ({ data = [] }) => {
    const [products] = useState(data);

    return (
        <div className='px-5'>
            <div className="font-manrope flex items-end justify-between mb-3">
                <p className="text-lg text-headline font-semibold ">View Related Products</p>
                <Link className='text-primary text-sm font-semibold' >View All</Link>
            </div>
            <div className="flex w-screen overflow-x-scroll gap-3 pr-8 no-scrollbar">
                {
                    products.map((product, index) => {
                        return <ProductCard product={product} key={index} />
                    })
                }
            </div>
        </div>
    );
};

export default RelatedProducts;