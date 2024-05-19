"use server"
import Razorpay from "razorpay"
import Payment from "@/models/Payment"
import User from "@/models/User"
import connectDB from "@/db/connectDb"

export const initiate = async (amount, to_username, paymentform) => {
    await connectDB()
    var instance = new Razorpay({ key_id: process.env.key_id, key_secret: process.env.key_secret })

    instance.orders.create({
        amount: 50000,
        currency: "INR",
        receipt: "receipt#1",
        notes: {
            key1: "value3",
            key2: "value2"
        }
       
        
    })
    let options ={
        amount: Number.parseInt(amount),
        currency: "INR"
    }
    let x = instance.orders.create(options)
    await Payment.create({oid: x.id, amount: amount, to_user: to_username, name:paymentform.name, massage: paymentform.massage})
    return x
}