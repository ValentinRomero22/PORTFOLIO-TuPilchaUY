import jwt from 'jsonwebtoken'
import { TOKEN_SECRET } from '../config/appConfig.js'

export const verifyToken = (req, res, next) => {
    const token = req.header('auth-token')

    if(!token) {
        return res.status(401).json({
            message: 'Acceso denegado'
        })
    }

    try {
        const verified = jwt.verify(token, TOKEN_SECRET)
        req.user = verified
        next()
    } catch (error) {
        return res.status(400).json({
            message: 'El token no es válido'
        })
    }
}