"use client"
import React from 'react'
import { useSession, signIn, signOut } from 'next-auth/react'
import Link from 'next/link'

const navbar = () => {
    const { data: session } = useSession()
    // if (session) {
    //   return (
    //     <>
    //       Signed in as {session.user.email} <br />
    //       <button onClick={() => signOut()}>Sign out</button>
    //     </>
    //   )
    // }  
  return (
    <div>
      <div className='bg-zinc-900 flex justify-between items-center text-white px-4 h-12'>
        <div className='font-bold flex justify-center items-center gap-2'>
          <img src='/mug.svg' alt='' />
          <span>BUYMEACHAI</span>

        </div>
        <div>
          {/* <ul className='flex gap-4'>
            <li className='hover:bg-gradient-to-br from-purple-600 to-blue-500 rounded-xl p-2  cursor-pointer'>Home</li>
            <li className='hover:bg-gradient-to-br from-purple-600 to-blue-500 rounded-xl p-2 cursor-pointer'>About</li>
            <li className='hover:bg-gradient-to-br from-purple-600 to-blue-500 rounded-xl p-2 cursor-pointer'>Project</li>
            <li className='hover:bg-gradient-to-br from-purple-600 to-blue-500 rounded-xl p-2 cursor-pointer'>Contact</li>
            <li className='hover:bg-gradient-to-br from-purple-600 to-blue-500 rounded-xl p-2 cursor-pointer'>Sign in</li>
          </ul> */}
          {session && <Link href={"/profile"}>
            <button className="relative inline-flex items-center justify-center p-0.5 mb-1 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
              <span className="relative px-5 py-2 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                profile
              </span>
            </button>
          </Link>}
          {session && <button className="relative inline-flex items-center justify-center p-0.5 mb-1 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800" onClick={()=>{signOut()}}>
              <span className="relative px-5 py-2 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                logout
              </span>
            </button>}
            {!session &&
          <Link href={"/login"}>
            <button className="relative inline-flex items-center justify-center p-0.5 mb-1 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800" >
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
