import { loginUserService } from "../services/userService.js"
import { errorLogger } from "../utils/winstonLogger.js"

export const postLogin = async (req, res) => {
    try {
        const credentials = {
            username: req.body.username,
            password: req.body.password
        }

        const result = await loginUserService(credentials)

        if(result.userFound){
            res.setHeader('auth-token', result.token)

            return res.status(201).json({
                statusCode: 200,
                message: 'Usuario logueado',
                userFound: result.userFound
            })
        } else {
            return res.status(401).json({
                status: 401,
                message: credentials.error
            })
        }
    } catch (error) {
        errorLogger.error(`logionOutController.js | postLogin(): ${error}`)
        return res.status(500).json({
            statusCode: 500,
            message: 'Se produjo un error inesperado'
        })
    }
}