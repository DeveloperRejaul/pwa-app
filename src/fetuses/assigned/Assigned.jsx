import React from 'react'
import Card from '../../components/card/Card'
import db from '../../db/assigned.json'
function Assigned() {
  return (
    <div className='flex flex-col items-center space-y-4'>
     {db.data.map((d,i)=> <Card key={i}/>)}
    </div>
  )
}

export default Assigned