import React from 'react';
import camera from '../../asset/icon/camera.svg';
import clip from '../../asset/icon/paper-clip.svg';
import plane from '../../asset/icon/paper-plane.svg';
const Sender = ({ submit }) => {
    const submitHandler = (e) => {
        e.preventDefault();
        console.log("here", e)
        const form = document.getElementById('chatForm');
        const data = new FormData()
        const date = new Date();
        const image = e.target[0].value;
        const text = e.target[1].value;
        const file = e.target[3].value;
        if (text != '') data.append("text", text);
        if (file != '') data.append("file", file);
        if (image != '') data.append("image", image);
        data.append('time', date.toLocaleString());
        data.append("user", "self")


        form.reset();
        submit(data);

    };
    return (
        <form id='chatForm' onSubmit={submitHandler} className='flex items-center gap-3 w-full'>
            <div className="flex items-center w-full gap-3 border border-border py-4 px-3 rounded-xl">

                <label htmlFor="image">
                    <img src={camera} alt="" />
                </label>
                <input className='hidden' id='image' type="file" accept='image/*' />
                <input className='w-full outline-none' type="text" placeholder='Type Message' />
                <label htmlFor="file">
                    <img className='' src={clip} alt="" />
                </label>
                <input className='hidden' id='file' type="file" />
            </div>
            <button type="submit">
                <img src={plane} alt="" />
            </button>
        </form>
    );
};

export default Sender;