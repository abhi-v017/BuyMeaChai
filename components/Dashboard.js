"use client"
import React, { useEffect, useState} from 'react'
import { useSession, signIn, signOut } from 'next-auth/react'
import { useRouter } from 'next/navigation'



const Dashboard = () => {
    const {data: session} = useSession()
    const router = useRouter()
    const [form, setform] = useState({})

    useEffect(() => {
        if (!session) {
            router.push('/login')
        }
    }, [router, session])

    const handlechange = (e) => {
        setform({ ...form, [e.target.name]: e.target.value })
    }
    return (
        <div className='container mx-auto py-5'>
            <h2 className='font-bold text-2xl text-center'>welcome to the dashboard</h2>
            <form className='max-w-2xl mx-auto'>
                <div className='my-2'>
                    <label htmlFor='name' className='font-bold block text-sm mb-2'>Name</label>
                    <input value={form.name? form.name : ""} onChange={handlechange} name='name' id='name' type="text" className='block border-2 border-purple-900 w-full p-2 rounded-lg bg-gray-900' />
                </div>
                <div className='my-2'>
                    <label htmlFor='email' className='font-bold block text-sm mb-2'>Email</label>
                    <input value={form.email? form.email : ""} onChange={handlechange} name='email' id='email' type="email" className='block border-2 border-purple-900 w-full p-2 rounded-lg bg-gray-900' />
                </div>
                <div className='my-2'>
                    <label htmlFor='username' className='font-bold block text-sm mb-2'>Username</label>
                    <input value={form.username? form.username : ""} onChange={handlechange} name='username' id='username' type="text" className='block border-2 border-purple-900 w-full p-2 rounded-lg bg-gray-900' />
                </div>
                <div className='my-2'>
                    <label htmlFor='profile' className='font-bold block text-sm mb-2'>Profile picture</label>
                    <input value={form.profile? form.profile : ""} onChange={handlechange} name='profile' id='profile' type="text" className='block border-2 border-purple-900 w-full p-2 rounded-lg bg-gray-900' />
                </div>
                <div className='my-2'>
                    <label htmlFor='cover' className='font-bold block text-sm mb-2'>Cover picture</label>
                    <input value={form.cover? form.cover : ""} onChange={handlechange} name='cover' id='cover' type="text" className='block border-2 border-purple-900 w-full p-2 rounded-lg bg-gray-900' />
                </div>
                <div className='my-2'>
                    <label htmlFor='razorpayid' className='font-bold block text-sm mb-2'>Rapzorpay id</label>
                    <input value={form.razorpayid? form.razorpayid : ""} onChange={handlechange} name='razorpayid' id='razorpayid' type="text" className='block border-2 border-purple-900 w-full p-2 rounded-lg bg-gray-900' />
                </div>
                <div className='my-2'>
                    <label htmlFor='razorpaysecret' className='font-bold block text-sm mb-2'>Rapzorpay secret</label>
                    <input value={form.razorpaysecret? form.razorpaysecret : ""} onChange={handlechange} name='razorpaysecret' id='razorpaysecret' type="text" className='block border-2 border-purple-900 w-full p-2 rounded-lg bg-gray-900' />
                </div>
                <div className='my-6'>
                    <button type='submit' className="relative  w-full inline-flex items-center justify-center p-0.5 mb-1 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-1 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800" >
                        <span className="relative w-full px-5 py-2 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                            Save
                        </span>
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Dashboard
