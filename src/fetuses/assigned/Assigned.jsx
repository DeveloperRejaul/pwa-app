import React from 'react'
import Card from '../../components/card/Card'
import db from '../../db/assigned.json'
import Dropdown from '../../components/dropdown/Dropdown'
import AssignDsk from './AssignDsk'
function Assigned() {
  return (
    <>
      <AssignDsk />
      <div className='xl:hidden flex flex-col items-center space-y-4'>
        <Dropdown />
        {db.data.map((d, i) => <Card selectItem="Ongoing" key={i} />)}
      </div>
    </>
  )
}

export default Assigned