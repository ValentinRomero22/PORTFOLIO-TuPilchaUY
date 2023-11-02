import {
    registerUserDao,
    loginUserDao,
    getUserByIdDao,
    changePasswordDao,
    changeEmailDao,
    addToFavoritesDao,
    removeToFavoritesDao,
    addDeliveryAddressDao,
    removeToDeliveryAddressesDao,
    addPhoneDao,
    updateUserImageDao
} from "../daos/userDao.js"

import { registerSchema } from "../validators/registerValidator.js"
import { logInSchema } from "../validators/loginValidator.js"
import {
    userIdSchema,
    userPasswordSchema,
    userEmailSchema,
    userFavoriteSchema,
    userDeliveryAddress,
    userPhoneSchema,
    userImageSchema
} from "../validators/userValidator.js"

import jwt from "jsonwebtoken"
import { TOKEN_SECRET } from "../config/appConfig.js"

import bcrypt from 'bcrypt'

import { errorLogger } from "../utils/winstonLogger.js"

export const registerUserService = async (newUser) => {
    const result = {}

    try {
        const { error } = registerSchema.validate(newUser)

        if (error) {
            errorLogger.error(`userService.js | registerUserService(): ${error}`)
            result.error = error
            return result
        }

        const salt = await bcrypt.genSalt(10)
        const encryptedPassword = await bcrypt.hash(newUser.password, salt)

        newUser.password = encryptedPassword

        const userAdded = await registerUserDao(newUser)

        const token = jwt.sign({
            name: userAdded.name,
            id: userAdded._id
        }, TOKEN_SECRET)

        result.userAdded = userAdded
        result.token = token
        return result
    } catch (error) {
        errorLogger.error(`userService.js | registerUserService(): ${error}`)
        result.error = error
        return result
    }
}

export const loginUserService = async (credentials) => {
    const result = {}

    try {
        const { error } = logInSchema.validate(credentials)

        if (error) {
            errorLogger.error(`userService.js | loginUserService(): ${error}`)
            result.error = error
            return result
        }

        const userFound = await loginUserDao(credentials.username)

        if (userFound) {
            const validPassword = await bcrypt.compare(credentials.password, userFound.password)

            if (validPassword) {
                const token = jwt.sign({
                    name: userFound.username,
                    id: userFound._id
                }, TOKEN_SECRET)

                result.userFound = userFound
                result.token = token
                return result
            } else {
                errorLogger.error('userService.js | loginUserService(): Contraseña incorrecta')
                result.error = 'Contraseña incorrecta'
                return result
            }
        } else {
            errorLogger.error('userService.js | loginUserService(): Usuario incorrecto')
            result.error = 'Usuario incorrecto'
            return result
        }
    } catch (error) {
        errorLogger.error(`userService.js | loginUserService(): ${error}`)
        result.error = error
        return result
    }
}

export const getUserByIdService = async (userId) => {
    const result = {}

    try {
        const { error } = userIdSchema.validate(userId)

        if (error) {
            errorLogger.error(`userService.js | getUserByIdService(): ${error}`)
            result.error = error
            return result
        }

        const userFound = getUserByIdDao(userId)

        if (userFound) {
            result.userFound = userFound
            return result
        } else {
            errorLogger.error('userService.js | getUserByIdService(): Usuario no encontrado')
            result.error = 'Usuario no encontrado'
            return result
        }
    } catch (error) {
        errorLogger.error(`userService.js | getUserByIdService(): ${error}`)
        result.error = error
        return result
    }
}

export const changePasswordService = async (userId, currentPassword, newPassword) => {
    const result = {}

    try {
        const { error } = userPasswordSchema.validate({ userId, currentPassword, newPassword })

        if (error) {
            errorLogger.error(`userService.js | changePasswordService(): ${error}`)
            result.error = error
            return result
        }

        const userFound = await getUserByIdDao(userId)

        if (!userFound) {
            errorLogger.error('userService.js | changePasswordService(): El usuario indicado no es válido')
            result.error = 'El usuario indicado no es válido'
            return result
        }

        const validPassword = await bcrypt.compare(currentPassword, userFound.password)

        if (validPassword) {
            const salt = await bcrypt.genSalt(10)
            const encryptedPassword = await bcrypt.hash(newPassword, salt)

            const status = await changePasswordDao(userId, encryptedPassword)
            result.status = status
            return result
        } else {
            errorLogger.error('userService.js | changePasswordService(): La contraseña actual no es correcta')
            result.error = 'La contraseña actual no es correcta'
            return result
        }
    } catch (error) {
        errorLogger.error(`userService.js | changePasswordService(): ${error}`)
        result.error = error
        return result
    }
}

export const changeEmailService = async (userId, currentEmail, newEmail) => {
    const result = {}

    try {
        const { error } = userEmailSchema.validate(userId, currentEmail, newEmail)

        if (error) {
            errorLogger.error(`userService.js | changeEmailService(): ${error}`)
            result.error = error
            return result
        }

        const userFound = await getUserByIdDao(userId)

        if (!userFound) {
            errorLogger.error('userService.js | changeEmailService(): El usuario indicado no es válido')
            result.error = 'El usuario indicado no es válido'
            return result
        }

        if (userFound.email == currentEmail) {
            const status = await changeEmailDao(userId, newEmail)
            result.status = status
            return result
        } else {
            errorLogger.error('userService.js | changeEmailService(): El email actual no es correcto')
            result.error = 'El email actual no es correcto'
            return result
        }
    } catch (error) {
        errorLogger.error(`userService.js | changeEmailService(): ${error}`)
        result.error = error
        return result
    }
}

export const addToFavoritesService = async (userId, newFavorite) => {
    const result = {}

    try {
        const { error } = userFavoriteSchema(userId, newFavorite)

        if (error) {
            errorLogger.error(`userService.js | addToFavoritesService(): ${error}`)
            result.error = error
            return result
        }

        const userFound = await getUserByIdDao(userId)

        if (!userFound) {
            errorLogger.error('userService.js | addToFavoritesService(): El usuario indicado no es válido')
            result.error = 'El usuario indicado no es válido'
            return result
        }

        const status = await addToFavoritesDao(userId, newFavorite)
        result.status = status
        return result
    } catch (error) {
        errorLogger.error(`userService.js | addToFavoritesService(): ${error}`)
        result.error = error
        return result
    }
}

export const removeToFavoriteService = async (userId, favoriteToRemove) => {
    const result = {}

    try {
        const { error } = userFavoriteSchema(userId, favoriteToRemove)

        if (error) {
            errorLogger.error(`userService.js | removeToFavoriteService(): ${error}`)
            result.error = error
            return result
        }

        const userFound = await getUserByIdDao(userId)

        if (!userFound) {
            errorLogger.error('userService.js | removeToFavoriteService(): El usuario indicado no es válido')
            result.error = error
            return result
        }

        const status = await removeToFavoritesDao(userId, favoriteToRemove)
        result.status = status
        return result
    } catch (error) {
        errorLogger.error(`userService.js | removeToFavoriteService(): ${error}`)
        result.error = error
        return result
    }
}

export const addDeliveryAddressService = async (userId, newDeliveryAddress) => {
    const result = {}

    try {

    } catch (error) {
        errorLogger.error(`userService.js | addDeliveryAddressService(): ${error}`)
        result.error = error
        return result
    }
}

export const removeToDeliveryAddressesService = async (userId, deliveryAddressToRemove) => {
    const result = {}

    try {
        const { error } = delivery
    } catch (error) {
        errorLogger.error(`userService.js | removeToDeliveryAddressesService(): ${error}`)
        result.error = error
        return result
    }
}

export const addPhoneService = async (userId, newPhone) => {
    const result = {}

    try {

    } catch (error) {
        errorLogger.error(`userService.js | addPhoneService(): ${error}`)
        result.error = error
        return result
    }
}

export const removePhoneService = async (userId, phoneToRemove) => {
    const result = {}

    try {

    } catch (error) {
        errorLogger.error(`userService.js | removePhoneService(): ${error}`)
        result.error = error
        return result
    }
}

export const updateUserImageService = async (userId, newImage) => {
    const result = {}

    try {
        const { error } = userImageSchema.validate({ userId, newImage })

        if (error) {
            errorLogger.error(`userService.js | updateUserImageService(): ${error}`)
            result.error = error
            return result
        }

        const status = updateUserImageDao(userId, newImage)

        result.status = status
        return result
    } catch (error) {
        errorLogger.error(`userService.js | updateUserImageService(): ${error}`)
        result.error = error
        return result
    }
}