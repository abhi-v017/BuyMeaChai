import React from 'react'

const navbar = () => {
  return (
    <div>
      <div className='bg-zinc-900 flex justify-between items-center text-white px-4 h-12'>
        <div className='font-bold'>
          BUYMEACHAI
        </div>
        <div>
          <ul className='flex gap-4'>
            <li className='hover:bg-gradient-to-br from-purple-600 to-blue-500 rounded-xl p-2  cursor-pointer'>Home</li>
            <li className='hover:bg-gradient-to-br from-purple-600 to-blue-500 rounded-xl p-2 cursor-pointer'>About</li>
            <li className='hover:bg-gradient-to-br from-purple-600 to-blue-500 rounded-xl p-2 cursor-pointer'>Project</li>
            <li className='hover:bg-gradient-to-br from-purple-600 to-blue-500 rounded-xl p-2 cursor-pointer'>Contact</li>
            <li className='hover:bg-gradient-to-br from-purple-600 to-blue-500 rounded-xl p-2 cursor-pointer'>Sign in</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default navbar
