import React from 'react';
import db from '../../db/newAssigned.json'
import Card from '../../components/card/Card';

function NewAssigned() {
  return (
    <div className='flex flex-col items-center space-y-4'>
     {db.data.map((d,i)=> <Card key={i}/>)}
    </div>
  )
}

export default NewAssigned