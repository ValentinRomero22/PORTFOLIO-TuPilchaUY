import { updateUserImageService } from "../services/userService.js"
import { errorLogger } from "../utils/winstonLogger.js"

export const updateImageUser = async (req, res) => {
    try {
        const { userId } = req.params
        const { newImage } = req.body

        const result = await updateUserImageService(userId, newImage)

        if (result.error) {
            if (result.error.details) {
                errorLogger.error(`userController.js | updateImageUser(): ${result.error.details[0].message}`)
                return res.status(400).json({
                    statusCode: 400,
                    message: result.error.details[0].message
                })
            } else {
                errorLogger.error(`userController.js | updateImageUser(): ${result.error}`)
                return res.status(400).json({
                    statusCode: 400,
                    message: 'Se produjo un error inesperado'
                })
            }
        } else {
            return res.status(201).json({
                statusCode: 201,
                message: 'Imagen actualizada con éxito'
            })
        }
    } catch (error) {
        errorLogger.error(`userController.js | updateImageUser(): ${error}`)
        return res.status(400).json({
            statusCode: 400,
            message: 'Se produjo un error inesperado'
        })
    }
}