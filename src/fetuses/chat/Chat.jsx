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
        console.log(data.has("file"));
        if (data.has("text")) {
            return setChats([...chats, { text: data.get("text"), time: data.get("time"), user: data.get('user') },]);
        } else if (data.has("image")) {
            const reader = new FileReader();

            reader.onload = (e) => {
                const imageSrc = e.target.result;

                setChats([
                    ...chats,
                    { image: imageSrc, time: data.get("time"), user: data.get('user') },
                ]);
            };

            reader.readAsDataURL(data.get("image"));
        } else if (data.has('file')) {
            const reader = new FileReader();
            const file = data.get('file');
            reader.onload = (e) => {
                const fileSrc = e.target.result;

                setChats([
                    ...chats,
                    { file: { url: fileSrc, name: file.name }, time: data.get("time"), user: data.get('user') },
                ]);
            };
            console.log(file)
            reader.readAsDataURL(file);
        }
    };
    useEffect(() => {
        bottomRef.current.scrollIntoView({
            behavior: 'smooth',
            block: 'end'
        })
    }, [chats]);
    return (
        <div className='px-5 h-screen relative w-full flex flex-col justify-between'>
            <Header data={{ name: ' Plot Name - Advisory', status: 'Online', image: profile }} />
            <div className="space-y-7 overflow-y-auto w-full px-2 h-full   no-scrollbar">
                <div className='bg-[#C8996333] w-[5.44rem] mx-auto rounded-full p-[6px] text-center text-headline text-[8px]'>
                    <p className="">21 Mar 2023</p>
                </div>
                {
                    chats.reverse().map((item, index) => <Bubble key={index} data={item} />)
                }
                <div ref={bottomRef} className=""></div>
            </div>
            <div className="bg-white pb-5">
                <Sender submit={submitHandler} />
            </div>
        </div>
    );
};

export default Chat;