import React from 'react';

const BlogProfile = ({ data }) => {
    const { image, name, designation, about } = data;
    return (
        <div className=' px-5'>
            <div className="flex items-center gap-5 py-7">
                <div className="h-14 w-14 rounded-full border border-primary overflow-hidden">
                    <img className='w-full h-full' src={image} alt="profile" />
                </div>
                <div className="font-manrope">
                    <p className="text-headline font-semibold text-lg">{name}</p>
                    <p className="text-gray text-xs">{designation}</p>
                </div>
            </div>
            <p className="text-gray text-sm">{about}</p>
        </div>
    );
};

export default BlogProfile;