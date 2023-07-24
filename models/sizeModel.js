import mongoose from 'mongoose'

export const sizeSchema = new mongoose.Schema({
    name: { type: String, required: true }
})