import React from 'react'
import Card from './card/Card'
import ChatList from './chat_open/ChatList'
import ChartWrap from './charts/ChartWrap';
import Calender from '../../components/calender/Calender';
import fetchData from '../../db/AllRequest.json';

export default function HomeWrap() {
    return (
        <div className="px-10 xl:px-0 py-20 w-full">
            <div className="grid grid-cols-6 gap-8">
                <div className="col-span-6 xl:col-span-4 space-y-8">
                    <div className="flex space-x-7">
                        <Card title="Total Request" value={19} />
                        <Card title="Closed Request" value={2} msg="25% This month" />
                        <Card title="Avg. time per request" value={2} msg="-10% this month" />
                    </div>
                    <div>
                        <ChartWrap />
                    </div>
                </div>
                <div className="col-span-6 pt-10 xl:pt-0 xl:col-span-2 space-y-20">
                    <ChatList />
                    <Calender apiData={fetchData} />
                </div>
            </div>
        </div>
    )
}
