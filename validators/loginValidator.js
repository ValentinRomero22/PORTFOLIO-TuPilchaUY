import Joi from '@hapi/joi'

export const logInSchema = Joi.object({
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
        })
})