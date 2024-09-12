import React from 'react'

export default function NavBar() {
  return (
    <div>
      <nav className='bg-white'>
        <div className='flex space-x-4 p-2'>
          <div className='text-blue-500 hover:text-blue-700 cursor-pointer'>Home</div>
          <div className='text-blue-500 hover:text-blue-700 cursor-pointer'>About</div>
          <div className='text-blue-500 hover:text-blue-700 cursor-pointer'>Contact</div>
        </div>
      </nav>
    </div>
  )
}
