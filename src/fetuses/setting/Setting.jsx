import React from 'react';

export default function Setting() {
    return (
        <div className="pb-11">
            <div>
                <div className="font-medium space-x-5">
                    <button className="underline underline-offset-8 decoration-2 text-2xl">Notification</button>
                    <button className="opacity-50 text-[1.19rem]">Password</button>
                </div>
                <div className="pt-8 pb-6 space-y-6">
                    <div>
                        <h2 className="font-semibold text-lg leading-6 pb-2">
                            Email Notification
                        </h2>
                        <p className="text-sm font-normal leading-6">
                            When you’re busy or not online, Substance can send you email notifications for any new direct messages or mentions of your name.
                        </p>
                    </div>
                    <div>
                        <p className="font-semibold text-lg leading-6 pb-2">
                            Send me email notfication</p>
                        <div className="space-y-3 flex flex-col">
                            <span className="flex items-center space-x-3">
                                <input className="checked:accent-[#b2b2]  w-6 h-6 cursor-pointer" type="radio" name="emailNotify" />
                                <label>Send me email notification</label>
                            </span>
                            <span className="flex items-center space-x-3">
                                <input className="checked:accent-[#b2b2]  w-6 h-6 cursor-pointer" type="radio" name="emailNotify" />
                                <label>Once an hour at most</label>
                            </span>
                            <span className="flex items-center space-x-3">
                                <input className=" checked:accent-[#b2b2] w-6 h-6 cursor-pointer" type="radio" defaultChecked name="emailNotify" />
                                <label>Never</label>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
