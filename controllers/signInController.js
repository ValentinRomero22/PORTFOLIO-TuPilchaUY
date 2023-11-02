import { registerUserService } from "../services/userService.js"
import { errorLogger } from "../utils/winstonLogger.js"

export const postSignIn = async (req, res) => {
    try {
        const newUser = {
            username: req.body.username,
            password: req.body.password,
            email: req.body.email,
            deliveryAddress: req.body.deliveryAddress,
            phone: req.body.phone,
            image: req.body.image,
            age: req.body.age
        }

        const result = await registerUserService(newUser)

        if (result.error) {
            if (result.error.details) {
                errorLogger.error(`signInController.js | postSignIn(): ${result.error.details[0].message}`)
                return res.status(400).json({
                    statusCode: 400,
                    message: result.error.details[0].message
                })
            } else {
                errorLogger.error(`signInController.js | postSignIn(): ${result.error}`)
                return res.status(400).json({
                    statusCode: 400,
                    message: 'Se produjo un error inesperado'
                })
            }
        } else {
            const { userAdded, token } = result

            res.setHeader('auth-token', token)

            return res.status(201).json({
                statusCode: 201,
                message: 'Usuario registrado con éxito',
                userAdded
            })
        }
    } catch (error) {
        errorLogger.error(`signInController.js | postSignIn(): ${error}`)
        return res.status(400).json({
            statusCode: 400,
            message: 'Se produjo un error inesperado'
        })
    }
}