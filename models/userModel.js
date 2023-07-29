import mongoose from 'mongoose'

export const userSchema = new mongoose.Schema({
    username: { type: String, required: true, maxLength: 50, unique: true },
    password: { type: String, required: true },
    email: { type: String, required: true, maxLength: 50, unique: true },
    deliveryAddres: [{ type: String, required: true, maxlength: 50 }],
    phone: { type: String, required: true },
    image: { type: String, required: true },
    favourite: [{ type: mongoose.Schema.ObjectId, required: true }],
    role: { type: String, required: true }
})