import { Router } from 'express'

// importar controlador...

import { isAuthenticated } from '../middlewares/isAuthenticated'

const userRouter = Router()

// userRouter métodos

export { userRouter }