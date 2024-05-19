"use client"
import React, {useState} from 'react'
import Script from 'next/script'
import { initiate } from '@/actions/useractions'
import { useSession } from 'next-auth/react'

const PaymentPage = ({ username }) => {

    const [paymentform, setpaymentform] = useState({})
    const handlechange = (e) => {
        setpaymentform({ ...paymentform, [e.target.name]: e.target.value })
    }
    const pay = async (amount) => {
        let a = await initiate(amount, username, paymentform)
        let orderId = a.id
        var options = {
            "key": process.env.KEY_ID, // Enter the Key ID generated from the Dashboard
            "amount": "50000", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
            "currency": "INR",
            "name": "Buy me a chai", //your business name
            "description": "Test Transaction",
            "image": "https://example.com/your_logo",
            "order_id": orderId, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
            "callback_url": `${process.env.URL}/api/razorpay`,
            "prefill": { //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
                "name": "Gaurav Kumar", //your customer's name
                "email": "gaurav.kumar@example.com",
                "contact": "9000090000" //Provide the customer's phone number for better conversion rates 
            },
            "notes": {
                "address": "Razorpay Corporate Office"
            },
            "theme": {
                "color": "#3399cc"
            }
        }
        var rzp1 = new Razorpay(options);
        rzp1.open();
    }
    return (
        <>
            <Script src="https://checkout.razorpay.com/v1/checkout.js"></Script>



            <div className='cover w-full relative'>
                <img className='object-cover w-full h-[200]' src='https://c10.patreonusercontent.com/4/patreon-media/p/campaign/4842667/452146dcfeb04f38853368f554aadde1/eyJ3Ijo5NjAsIndlIjoxfQ%3D%3D/16.gif?token-time=1717459200&token-hash=fHNiZ33l1XVgIiIyrcBLCZboOBZXYUMJKoF1BnJuH0M%3D' alt='' />
                <div>
                    <img width={150} height={150} className='absolute -bottom-20 border-4 border-purple-800 rounded-full right-[45%]' src='https://c10.patreonusercontent.com/4/patreon-media/p/campaign/4842667/aa52624d1cef47ba91c357da4a7859cf/eyJoIjoxMDgwLCJ3IjoxMDgwfQ%3D%3D/4.gif?token-time=1716854400&token-hash=RmQD6X8Y6NYGZ_ey6tgz4Mq6d2r_6yq5TsDAlGmQB3Q%3D' alt='' />
                </div>
            </div>
            <div className='info gap-2 my-24  text-white flex justify-center flex-col items-center'>
                <div className='font-bold text-lg'>
                    @{username}
                </div>
                <div className='text-slate-400'>Creating Animated art for VTT's</div>
                <div className='text-slate-400'>11,064 members.84 posts.$18,250/release</div>
                <div className='payment flex gap-3 w-[95%] mt-11' >
                    <div className='supporters w-1/2 text-white rounded-lg bg-gray-900'>
                        <h2 className='font-bold text-2xl mx-2 my-5'>Supporters</h2>
                        <ul className='mx-5'>
                            <li className='my-2 flex items-center gap-2'>
                                <img width={33} src='men.gif' alt='userprofile' />
                                <span>abhishek donated <span className='font-bold'>$500 </span>with a massage " I support you bro. lots of ❤️  "</span>
                            </li>
                            <li className='my-2 flex items-center gap-2'>
                                <img width={33} src='men.gif' alt='userprofile' />
                                <span>abhishek donated <span className='font-bold'>$500 </span>with a massage " I support you bro. lots of ❤️  "</span>
                            </li>
                            <li className='my-2 flex items-center gap-2'>
                                <img width={33} src='men.gif' alt='userprofile' />
                                <span>abhishek donated <span className='font-bold'>$500 </span>with a massage " I support you bro. lots of ❤️  "</span>
                            </li>
                            <li className='my-2 flex items-center gap-2'>
                                <img width={33} src='men.gif' alt='userprofile' />
                                <span>abhishek donated <span className='font-bold'>$500 </span>with a massage " I support you bro. lots of ❤️  "</span>
                            </li>
                        </ul>
                    </div>
                    <div className='makepayment w-1/2 text-white rounded-lg bg-gray-900'>
                        <h2 className='font-bold text-2xl m-5 '>make a payment</h2>
                        <div className='flex gap-2 mx-2 flex-col'>
                            <input onChange={handlechange} value={paymentform.name} type='text' name='name' className='border-2 border-purple-900 w-full p-3 rounded-lg bg-gray-900' placeholder='Enter Name' />
                            <input onChange={handlechange} value={paymentform.massage} type='text' name='massage' className='border-2 border-purple-900 w-full p-3 rounded-lg bg-gray-900' placeholder='Enter massage' />
                            <input onChange={handlechange} value={paymentform.amount} type='text' name='amount' className='border-2 border-purple-900 w-full p-3 rounded-lg bg-gray-900' placeholder='Enter amount' />
                            <button className="relative inline-flex items-center font-bold justify-center w-full p-0.5 mb-1 me-2 overflow-hidden text-lg text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-1 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800" >
                                <span className="relative px-5 py-2 w-full transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                    Pay
                                </span>
                            </button>
                        </div>
                        <div className='flex gap-2 mt-5 m-2'>
                            <button className=' rounded-lg p-3 bg-gray-900 border-2 border-purple-950 hover:bg-purple-600 font-bold' onClick={() => { pay(1000) }}>Pay ₹10</button>
                            <button className=' rounded-lg p-3 bg-gray-900 border-2 border-purple-950 hover:bg-purple-600 font-bold' onClick={() => { pay(2000) }}>Pay ₹20</button>
                            <button className=' rounded-lg p-3 bg-gray-900 border-2 border-purple-950 hover:bg-purple-600 font-bold' onClick={() => { pay(5000) }}>Pay ₹50</button>
                            <button className=' rounded-lg p-3 bg-gray-900 border-2 border-purple-950 hover:bg-purple-600 font-bold' onClick={() => { pay(10000) }}>Pay ₹100</button>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default PaymentPage
