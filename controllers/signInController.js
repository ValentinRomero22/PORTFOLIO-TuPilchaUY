import { registerUserService } from "../services/userService.js"
import { errorLogger } from "../utils/winstonLogger.js"

export const postSignIn = async (req, res) => {
    try {
        const newUser = {
            username: req.body.username,
            password: req.body.password
        }

        const result = await registerUserService(newUser)

        if(result){ 
            const { userAdded, token } = result            
            
            res.setHeader('auth-token', token)

            return res.status(201).json({
                statusCode: 201,
                message: 'Usuario registrado con éxito',
                userAdded
            })
        } else {
            return res.status(400).json({
                statusCode: 400,
                message: 'Se sprodujo un error inesperado'
            })
        }
    } catch (error) {
        errorLogger.error(`signInController.js | postSignIn(): ${error}`)
        return res.status(500).json({
            statusCode: 500,
            message: 'Se produjo un error inesperado'
        })
    }
}