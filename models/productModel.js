import mongoose from 'mongoose'

import categorySchema from './categoryModel'
import sizeSchema from './sizeModel'

export const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    code: { type: String, required: true },
    category: [categorySchema],
    image: [{ type: String }],
    price: { type: Number, required: true },
    stockBySize: [{ sizeSchema, quantity: { type: Number} }],
    enabled: { typeBoolean, required: true }
})