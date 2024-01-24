import React from 'react';
import Bubble from './Bubble';
import Sender from './Sender';
import Header from './Header';
import profile from '../../asset/Images/profile_picture.jpg';

const Chat = () => {
    return (
        <div className='px-5 h-screen relative w-screen'>
            <Header data={{ name: ' Plot Name - Advisory', status: 'Online', image: profile }} />
            <div className="space-y-7 overflow-y-auto w-full px-2 h-[85vh] ">
                <div className='bg-[#C8996333] w-[5.44rem] mx-auto rounded-full p-[6px] text-center text-headline text-[8px]'>
                    <p className="">21 Mar 2023</p>
                </div>
                <Bubble data={{ text: "Lorem ipsum dolor sit amet, con sec tetur adipiscing elit. ", time: '11:30 PM', user: "self" }} />
                <Bubble data={{ text: "Lorem ipsum dolor sit amet ", time: '11:30 PM', user: "user" }} />
                <Bubble data={{ text: "Lorem ipsum dolor sit amet, con sec tetur adipiscing elit. ", time: '11:30 PM', user: "self" }} />
                <Bubble data={{ text: "Lorem ipsum dolor sit amet, con sec tetur adipiscing elit. ", time: '11:30 PM', user: "self" }} />
                <Bubble data={{ text: "Lorem ipsum dolor sit amet ", time: '11:30 PM', user: "user" }} />
                <Bubble data={{ text: "Lorem ipsum dolor sit amet, con sec tetur adipiscing elit. ", time: '11:30 PM', user: "self" }} />
                <Bubble data={{ text: "Lorem ipsum dolor sit amet, con sec tetur adipiscing elit. ", time: '11:30 PM', user: "self" }} />
                <Bubble data={{ text: "Lorem ipsum dolor sit amet ", time: '11:30 PM', user: "user" }} />
                <Bubble data={{ text: "Lorem ipsum dolor sit amet, con sec tetur adipiscing elit. ", time: '11:30 PM', user: "self" }} />
            </div>
            <div className="bottom-0 ">
                <Sender />
            </div>
        </div>
    );
};

export default Chat;