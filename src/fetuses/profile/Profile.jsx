import React from 'react'
const uri = "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"

function Profile() {
  return (
    <div className='mx-3 space-y-2'>
      <div className='flex flex-row items-center space-x-3 px-2 border py-2 border-border rounded-lg'>
        <div className='h-12 w-12 rounded-full overflow-hidden'>
          <img src={uri} alt="profile" />
        </div>
        <p className='text-headline font-bold text-lg'>Karna</p>
      </div>
      <div className=' border border-border rounded-lg p-2 pb-6 pt-4 space-y-4'>
        <div>
          <p className='text-headline font-bold text-lg'>Address</p>
          <p className='text-paragraph text-lg '>Lorem Ipsum dolor sat, Lorem Ipsum dolor sat, 098765</p>
        </div>
        <div>
          <p className='text-headline font-bold text-lg'>Birth Date</p>
          <p className='text-paragraph text-lg '>17 Jul, 1969</p>
        </div>
        <div>
          <p className='text-headline font-bold text-lg'>Mobile Number</p>
          <p className='text-paragraph text-lg '>9876543210</p>
        </div>
        <div>
          <p className='text-headline font-bold text-lg'>Gender</p>
          <p className='text-paragraph text-lg '>Male</p>
        </div>
      </div>
    </div>
  )
}

export default Profile