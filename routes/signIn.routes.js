import { Router } from 'express'

// importar controlador...

import { isAuthenticated } from '../middlewares/isAuthenticated'

const signInRouter = Router()

// signin métodos

export { signInRouter }