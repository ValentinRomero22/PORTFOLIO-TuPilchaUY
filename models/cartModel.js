import mongoose from 'mongoose'

import itemSchema from './itemModel.js'

export const cartSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.ObjectId, required: true },
    items: [ itemSchema ],
    total: { type: Number, required: true }
})