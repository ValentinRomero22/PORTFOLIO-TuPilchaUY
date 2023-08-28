import { registerUser, loginUser } from "../daos/userDao.js"

import jwt from "jsonwebtoken"
import { TOKEN_SECRET } from "../config/appConfig.js"

import bcrypt from 'bcrypt'

export const registerUserService = async (newUser) => {
    try {
        const salt = await bcrypt.genSalt(10)
        const encryptedPassword = await bcrypt.hash(newUser.password, salt)

        newUser.password = encryptedPassword

        const userAdded = await registerUser(newUser)

        const token = jwt.sign({
            name: userAdded.name,
            id: userAdded._id
        }, TOKEN_SECRET)

        const result = { userAdded, token }
        return result
    } catch (error) {
        throw error
    }
}

export const loginUserService = async (credentials) => {
    try {
        const userFound = await loginUser(credentials.username)

        if(userFound) {
            const validPassword = await bcrypt.compare(credentials.password, userFound.password)

            if (validPassword) {
                const token = jwt.sign({
                    name: userFound.username,
                    id: userFound._id
                }, TOKEN_SECRET)
                
                return {
                    userFound, token
                }
            } else {
                return {
                    error: 'Contraseña incorrecta'
                }
            }
        } else {
            return {
                error: 'Usuario incorrecto'
            }
        }
    } catch (error) {
        throw error
    }
}