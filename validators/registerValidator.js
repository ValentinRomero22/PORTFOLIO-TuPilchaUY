import Joi from '@hapi/joi'

export const registerSchema = Joi.object({
    username: Joi.string()
        .required()
        .trim()
        .empty()
        .min(6)
        .max(50)
        .messages({
            "any.required": "Debe ingresar un nombre de usuario",
            "string.base": "El nombre de usuario debe ser un texto",
            "string.empty": "Debe ingresar un nombre de usuario",
            "string.min": "El nombre de usuario no debe tener menos de 6 caracteres",
            "string.max": "El nombre de usuario no debe exceder los 50 caracteres"
        }),
    password: Joi.string()
        .required()
        .trim()
        .empty()
        .min(6)
        .messages({
            "any.required": "Debe ingresar una contraseña",
            "string.base": "La contraseña debe ser un texto",
            "string.empty": "Debe ingresar una contraseña",
            "string.min": "La contraseña no debe tener menos de 6 caracteres"
        }),
    email: Joi.string()
        .required()
        .trim()
        .empty()
        .min(8)
        .max(50)
        .messages({
            "any.required": "Debe ingresar un email",
            "string.base": "El email debe ser un texto",
            "string.empty": "Debe ingresar un email",
            "string.min": "El email no debe tener menos de 8 caracteres",
            "string.max": "El email no debe exceder los 50 caracteres"
        }),
    deliveryAddress: Joi.array().items(
        Joi.string()
            .required()
            .trim()
            .empty()
            .min(5)
            .max(50)
            .messages({
                "any.required": "Debe ingresar una dirección de entrega",
                "string.base": "La dirección de entrega debe ser un texto",
                "string.empty": "Debe ingresar una dirección de entrega",
                "string.min": "La dirección de entrega no debe tener menos de 5 caracteres",
                "string.max": "La dirección de entrega no debe exceder los 50 caracteres"
            })
    ),
    phone: Joi.array().items(
        Joi.string()
            .required()
            .trim()
            .min(8)
            .max(9)
            .messages({
                "any.required": "Debe ingresar un teléfono",
                "string.empty": "Debe ingresar un teléfono",
                "string.min": "El teléfono no debe tener menos de 5 caracteres",
                "string.max": "El teléfono no debe exceder los 50 caracteres"
            })
    ),
    image: Joi.string()
        .required()
        .trim()
        .empty()
        .messages({
            "*": "Debe ingresar una imagen de usuario",
        })
})