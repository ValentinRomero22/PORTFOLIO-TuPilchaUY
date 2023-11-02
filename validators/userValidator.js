import Joi from '@hapi/joi'

export const userIdSchema = Joi.object({
    userId: Joi.string()
        .required()
        .trim()
        .empty()
        .min(24)
        .max(24)
        .messages({
            "any.required": "No se encontró user Id",
            "string.base": "El user Id no es válido",
            "string.empty": "No se encontró user Id",
            "string.min": "El user Id debe contener 24 caracteres",
            "string.max": "El user Id debe contener 24 caracteres"
        })
})

export const userPasswordSchema = Joi.object({
    userId: Joi.string()
        .required()
        .trim()
        .empty()
        .min(24)
        .max(24)
        .messages({
            "any.required": "No se encontró user Id",
            "string.base": "El user Id no es válido",
            "string.empty": "No se encontró user Id",
            "string.min": "El user Id debe contener 24 caracteres",
            "string.max": "El user Id debe contener 24 caracteres"
        }),
    currentPassword: Joi.string()
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
    newPassword: Joi.string()
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

export const userEmailSchema = Joi.object({
    userId: Joi.string()
        .required()
        .trim()
        .empty()
        .min(24)
        .max(24)
        .messages({
            "any.required": "No se encontró user Id",
            "string.base": "El user Id no es válido",
            "string.empty": "No se encontró user Id",
            "string.min": "El user Id debe contener 24 caracteres",
            "string.max": "El user Id debe contener 24 caracteres"
        }),
    currentEmail: Joi.string()
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
    newEmail: Joi.string()
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
        })
})

export const userFavoriteSchema = Joi.object({
    userId: Joi.string()
        .required()
        .trim()
        .empty()
        .min(24)
        .max(24)
        .messages({
            "any.required": "No se encontró user Id",
            "string.base": "El user Id no es válido",
            "string.empty": "No se encontró user Id",
            "string.min": "El user Id debe contener 24 caracteres",
            "string.max": "El user Id debe contener 24 caracteres"
        }),
    favorite: Joi.string()
        .required()
        .trim()
        .empty()
        .min(24)
        .max(24)
        .messages({
            "any.required": "Debe ingresar un favorito",
            "string.base": "El producto favorito no es válido",
            "string.empty": "Debe ingresar un favorito",
            "string.min": "El producto favorito debe contener 24 caracteres",
            "string.max": "El producto favorito debe contener 24 caracteres"
        })
})

export const userDeliveryAddress = Joi.object({
    userId: Joi.string()
        .required()
        .trim()
        .empty()
        .min(24)
        .max(24)
        .messages({
            "any.required": "No se encontró user Id",
            "string.base": "El user Id no es válido",
            "string.empty": "No se encontró user Id",
            "string.min": "El user Id debe contener 24 caracteres",
            "string.max": "El user Id debe contener 24 caracteres"
        }),
    deliveryAddress: Joi.array().items(
        Joi.string()
            .required()
            .trim()
            .min(5)
            .max(50)
            .messages({
                "any.required": "Debe ingresar una dirección de entrega",
                "string.base": "La dirección de entrega debe ser un texto",
                "string.empty": "Debe ingresar una dirección de entrega",
                "string.min": "La dirección de entrega no debe tener menos de 5 caracteres",
                "string.max": "La dirección de entrega no debe exceder los 50 caracteres"
            })
    )
})

export const userPhoneSchema = Joi.object({
    userId: Joi.string()
        .required()
        .trim()
        .empty()
        .min(24)
        .max(24)
        .messages({
            "any.required": "No se encontró user Id",
            "string.base": "El user Id no es válido",
            "string.empty": "No se encontró user Id",
            "string.min": "El user Id debe contener 24 caracteres",
            "string.max": "El user Id debe contener 24 caracteres"
        }),
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
    )
})

export const userImageSchema = Joi.object({
    userId: Joi.string()
        .required()
        .trim()
        .empty()
        .min(24)
        .max(24)
        .messages({
            "any.required": "No se encontró user Id",
            "string.base": "El user Id no es válido",
            "string.empty": "No se encontró user Id",
            "string.min": "El user Id debe contener 24 caracteres",
            "string.max": "El user Id debe contener 24 caracteres"
        }),
    newImage: Joi.string()
        .required()
        .trim()
        .empty()
        .messages({
            "*": "Debe ingresar una imagen de usuario",
        })
})