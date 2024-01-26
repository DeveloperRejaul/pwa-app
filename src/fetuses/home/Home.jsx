import React from 'react'
import Card from '../../components/card/Card'
import db from '../../db/homeCard.json'


function Home() {
  return (
    <div className='flex flex-col items-center'>
       {db.data.map((d,i)=> (
        <div key={i}>
            <p className='font-bold text-xl text-gray-800 mt-5 mb-2'>{d.title}</p>
            <div className='space-y-3'> {d.items.map((item, i)=>  <Card key={i}  />  )}</div>
        </div>
       ))}
    </div>
  )
}

export default Home