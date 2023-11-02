import { loginUserService } from "../services/userService.js"
import { errorLogger } from "../utils/winstonLogger.js"

export const postLogin = async (req, res) => {
    try {
        const credentials = {
            username: req.body.username,
            password: req.body.password
        }

        const result = await loginUserService(credentials)

        // REVISAR...
        // porque siempre va a tener un resultado, el primer if debe ser if (result.error)...
        if (result) {
            if (result.error) {
                errorLogger.error(`logionOutController.js | postLogin(): ${result.error}`)
                return res.status(401).json({
                    status: 401,
                    message: result.error
                })
            } else {
                const { userFound, token } = result

                res.setHeader('auth-token', token)

                return res.status(200).json({
                    statusCode: 200,
                    message: 'Usuario logueado',
                    userFound: userFound
                })
            }
        } else {
            errorLogger.error('logionOutController.js | postLogin(): Se produjo un error inesperado')
            return res.status(401).json({
                status: 401,
                message: credentials.error
            })
        }
    } catch (error) {
        errorLogger.error(`logionOutController.js | postLogin(): ${error}`)
        return res.status(400).json({
            statusCode: 400,
            message: 'Se produjo un error inesperado'
        })
    }
}