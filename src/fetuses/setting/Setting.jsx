import React from 'react';

export default function Setting() {
    return (
        <div className="pt-11">
            <div>
                <div className="font-medium space-x-5">
                    <button className="underline underline-offset-8 decoration-4 text-2xl">Notification</button>
                    <button className="opacity-50 text-xl">Password</button>
                </div>
                <div className="py-5 space-y-6">
                    <div>
                        <h2 className="font-semibold text-lg leading-6 pb-2">EMail Notification</h2>
                        <p className="text-sm font-normal leading-6">When you’re busy or not online, Substance can send you email notifications for any new direct messages or mentions of your name.</p>

                    </div>
                    <div>
                        <p className="font-semibold text-lg leading-6 pb-2">Send me email notfication</p>
                        <div className="space-y-3 flex flex-col">
                            <span className="flex items-center space-x-3">
                                <input className="accent-primary border-none  w-6 h-6" type="radio" />
                                <label>Send me email notification</label>
                            </span>
                            <span className="flex items-center space-x-3">
                                <input className="accent-primary border-none  w-6 h-6" type="radio" />
                                <label>Once an hour at most</label>
                            </span>
                            <span className="flex items-center space-x-3">
                                <input className="accent-primary border-none w-6 h-6" type="radio" checked />
                                <label>Never</label>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
