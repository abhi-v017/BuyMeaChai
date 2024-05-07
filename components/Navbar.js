import React from 'react'

const navbar = () => {
  return (
    <div>
      <div className='bg-gray-900 flex justify-between items-center text-white px-4 h-12'>
        <div className='font-bold'>
          BUYMEACHAI
        </div>
        <div>
          <ul className='flex gap-4'>
            <li>Home</li>
            <li>About</li>
            <li>Project</li>
            <li>Contact</li>
            <li>Sign in</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default navbar
