import React from 'react';
import camera from '../../asset/icon/camera.svg';
import clip from '../../asset/icon/paper-clip.svg';
import plane from '../../asset/icon/paper-plane.svg';
const Sender = () => {
    return (
        <form className='flex items-center gap-3 w-full'>
            <div className="flex items-center w-full gap-3 border border-border py-4 px-3 rounded-xl">
                <img src={camera} alt="" />
                <input className='w-full outline-none' type="text" placeholder='Type Message' />
                <img src={clip} alt="" />
            </div>
            <button type="submit">
                <img src={plane} alt="" />
            </button>
        </form>
    );
};

export default Sender;