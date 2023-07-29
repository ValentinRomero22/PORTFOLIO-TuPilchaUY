import mongoose from 'mongoose'

export const orderModel = new mongoose.Schema({
    timestamp: { type: String, required: true },
    number: { type: Number, required: true, unique: true, min: 1 },
    userId: { type: mongoose.Schema.ObjectId, required: true },
    status: { type: String, required: true, maxLength: 9 },
    cart: { type: mongoose.Schema.ObjectId, required: true },
    deliveryAddress: { type: String, required: true, maxLength: 50 },
    paymentMethod: { type: String, required: true, maxLength: 8 }
})