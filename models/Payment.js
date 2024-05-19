import mongoose from "mongoose";
const { Schema, model } = mongoose;
const PaymentSchema = new Schema({
    name: { type: String, default: true },
    to_user: { type: String, default: true },
    oid: { type: String, default: true },
    massage: { type: String, default: true },
    amount: { type: Number, default: true },
    createdAt: { type: Date, default: Date.now() },
    updatedAt: { type: Date, default: Date.now() },
    done: { type: Boolean, default: false },
    });
    export default mongoose.models.Payment || model("Payment", PaymentSchema);