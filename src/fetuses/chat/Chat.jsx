import React, { useEffect, useRef, useState } from 'react';
import Bubble from './Bubble';
import Sender from './Sender';
import Header from './Header';
import profile from '../../asset/Images/profile_picture.jpg';

const chat = [
    { text: "Lorem ipsum dolor sit amet, con sec tetur adipiscing elit. ", time: '1/26/2024, 2:09:56 PM', user: "self" },
    { text: "Lorem ipsum dolor sit amet ", time: '1/26/2024, 2:09:56 PM', user: "user" },
    { text: "Lorem ipsum dolor sit amet, con sec tetur adipiscing elit. ", time: '1/26/2024, 2:09:56 PM', user: "self" },
    { text: "Lorem ipsum dolor sit amet, con sec tetur adipiscing elit. ", time: '1/26/2024, 2:09:56 PM', user: "self" },
    { text: "Lorem ipsum dolor sit amet ", time: '1/26/2024, 2:09:56 PM', user: "user" },
    { text: "Lorem ipsum dolor sit amet, con sec tetur adipiscing elit. ", time: '1/26/2024, 2:09:56 PM', user: "self" },
    { text: "Lorem ipsum dolor sit amet ", time: '1/26/2024, 2:09:56 PM', user: "user" },
    { text: "Lorem ipsum dolor sit amet, con sec tetur adipiscing elit. ", time: '1/26/2024, 2:09:56 PM', user: "self" },
]
const Chat = () => {

    const [chats, setChats] = useState(chat);
    const bottomRef = useRef();
    const submitHandler = (data) => {
        console.log(data.get("text"));
        return setChats([...chats, { text: data.get("text"), time: data.get("time"), user: data.get('user') },]);
    };
    useEffect(() => {
        bottomRef.current.scrollIntoView({
            behavior: 'smooth',
            block: 'end'
        })
    }, [chats]);
    return (
        <div className='px-5 h-screen relative w-screen'>
            <Header data={{ name: ' Plot Name - Advisory', status: 'Online', image: profile }} />
            <div className="space-y-7 overflow-y-auto w-full px-2 h-[83vh] no-scrollbar mb-5">
                <div className='bg-[#C8996333] w-[5.44rem] mx-auto rounded-full p-[6px] text-center text-headline text-[8px]'>
                    <p className="">21 Mar 2023</p>
                </div>
                {
                    chats.reverse().map((item, index) => <Bubble key={index} data={item} />)
                }
                <div ref={bottomRef} className=""></div>
            </div>
            <div className="bottom-0 ">
                <Sender submit={submitHandler} />
            </div>
        </div>
    );
};

export default Chat;