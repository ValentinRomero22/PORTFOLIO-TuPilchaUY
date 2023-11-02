import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'El nombre de usuario es requerido'],
        maxLength: [50, 'El nombre de usuario no debe exceder los 50 caracteres'],
        minLength: [6, 'El nombre de usuario no debe tener menos de 6 caracteres'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'La contraseña es requerida'],
        minLength: [6, 'La contraseña no debe tener menos de 6 caracteres'],
    },
    email: {
        type: String,
        required: [true, 'El email es requerido'],
        maxLength: [50, 'EL email no debe exceder los 50 caracteres'],
        minLength: [8, 'El email no debe tener menos de 8 caracteres'],
        unique: true
    },
    deliveryAddresses: [{
        type: String,
        required: [true, 'La dirección de entrega es requerida'],
        maxlength: [50, 'La dirección de entrega no debe exceder los 50 caracteres'],
        minLength: [5, 'La dirección de entrega no debe tener menos de 5 caracteres'],
    }],
    phone: [{
        type: String,
        required: [true, 'El teléfono es requerido'],
        maxLength: [9, 'El teléfono no debe exceder los 9 caracteres'],
        minLength: [8, 'El teléfono no debe tener menos de 8 caracteres']
    }],
    image: {
        type: String,
        required: [true, 'La imagen de usuario es requerida']
    },
    favorites: [{
        type: mongoose.Schema.ObjectId,
    }],
}, {
    versionKey: false
})

export default mongoose.model('User', userSchema)