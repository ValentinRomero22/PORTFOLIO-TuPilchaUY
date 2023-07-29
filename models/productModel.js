import mongoose from 'mongoose'

import categorySchema from './categoryModel.js'
import sizeSchema from './sizeModel.js'

export const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    code: { type: String, required: true },
    category: [ categorySchema ],
    type: { type: String, required: true },
    image: [{ type: String }],
    price: { type: Number, required: true },
    stockBySize: [{ sizeSchema, quantity: { type: Number} }],
    enabled: { typeBoolean, required: true }
})