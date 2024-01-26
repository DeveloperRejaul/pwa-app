import React from 'react'

function Button({ text, onClick }) {
  return <button onClick={onClick} className='bg-primary px-5 py-1 rounded-md text-white'>{text} </button>
}

export default Button