"use client"
import React, { useState } from 'react'
import { useSession, signIn, signOut } from 'next-auth/react'
import Link from 'next/link'


const navbar = () => {
  const { data: session } = useSession()
  const [showdropdown, setshowdropdown] = useState(false)

  return (
    <div>
      <div className='bg-zinc-900 flex justify-between items-center text-white px-4 h-12'>
          <Link href={"/"} className='font-bold flex justify-center items-center gap-2'>
            <img src='/mug.svg' alt='' />
            <span>BUYMEACHAI</span>
          </Link>
        <div className='relative'>
          {/* <ul className='flex gap-4'>
            <li className='hover:bg-gradient-to-br from-purple-600 to-blue-500 rounded-xl p-2  cursor-pointer'>Home</li>
            <li className='hover:bg-gradient-to-br from-purple-600 to-blue-500 rounded-xl p-2 cursor-pointer'>About</li>
            <li className='hover:bg-gradient-to-br from-purple-600 to-blue-500 rounded-xl p-2 cursor-pointer'>Project</li>
            <li className='hover:bg-gradient-to-br from-purple-600 to-blue-500 rounded-xl p-2 cursor-pointer'>Contact</li>
            <li className='hover:bg-gradient-to-br from-purple-600 to-blue-500 rounded-xl p-2 cursor-pointer'>Sign in</li>
          </ul> */}
            {session && <> <button onClick={() => { setshowdropdown(!showdropdown) }} onBlur={()=>{setTimeout(()=>{setshowdropdown(false)},200);}} id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="relative inline-flex items-center justify-center p-[2px] mb-1 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-1 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800" type="button"><span className='relative flex justify-center items-center px-5 py-2 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0'>{session.user.email}<svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
          </svg></span>
          </button>

            <div id="dropdown" className={`z-10 ${showdropdown ? "" : "hidden"} absolute left-2  bg-white divide-y divide-gray-100 rounded-lg shadow w-52 dark:bg-transparent`}>
              <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                <li>
                  <Link href={"/profile"} className="block px-4 py-2 bg-gray-900 border-2 border-purple-600 hover:bg-purple-500 rounded-lg shadow-md">Dashboard</Link>
                </li>
                <li>
                  <Link href="#" className="block px-4 py-2 bg-gray-900 border-2 border-purple-600 hover:bg-purple-500 rounded-lg shadow-md">Your Page</Link>
                </li>
                <li>
                  <Link href="#" onClick={() => { signOut() }} className="block px-4 py-2 bg-gray-900 border-2 border-purple-600 hover:bg-purple-500 rounded-lg shadow-md">Sign out</Link>
                </li>
              </ul>
            </div></>
          }

          {!session &&
            <Link href={"/login"}>
              <button className="relative inline-flex items-center justify-center p-0.5 mb-1 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-1 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800" >
                <span className="relative px-5 py-2 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  login
                </span>
              </button>
            </Link>
          }
        </div>
      </div>
    </div>
  )
}

export default navbar
