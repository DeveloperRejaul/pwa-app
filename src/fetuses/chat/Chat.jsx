import React from 'react';
import Bubble from './Bubble';
import Sender from './Sender';

const Chat = () => {
    return (
        <div className='px-5 h-screen relative w-screen'>
            <div className="space-y-7 overflow-y-auto h-[80vh]">
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
            <div className="bottom-0 w-fit">
                <Sender />
            </div>
        </div>
    );
};

export default Chat;