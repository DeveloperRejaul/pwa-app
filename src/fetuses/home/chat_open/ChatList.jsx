import React from 'react'

export default function ChatList() {
    return (
        <div className="space-y-12">
            <div className="flex justify-between items-center">
                <p className="text-xl leading-8">Chat Opened</p>
                <button className="text-base opacity-30" type="button">See all</button>
            </div>
            <div className="space-y-12">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                    <div key={i} className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                            <img src="https://cdn1.iconfinder.com/data/icons/website-internet/48/website_-_male_user-512.png" alt=""
                                className="w-12 h-12 rounded-full overflow-hidden object-contain border bg-gray border-gray" />
                            <p className="font-medium">Lorem</p>
                        </div>
                        <p>{new Date().toLocaleDateString()}</p>
                        <button className="bg-primary text-secondary rounded-lg h-8 w-[5.8rem]" type="button">Open Chat</button>
                    </div>
                ))}
            </div>
        </div>
    )
}
