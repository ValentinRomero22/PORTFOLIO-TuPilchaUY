import mongoose from 'mongoose'

export const itemSchema = new mongoose.Schema({
    product: { type: mongoose.Schema.ObjectId, required: true },
    quantity: { type: Number, required: true }
})