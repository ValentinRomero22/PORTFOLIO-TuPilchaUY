import { Router } from 'express'

// importar controlador...

import { isAuthenticated } from '../middlewares/isAuthenticated.js'

const orderRouter = Router()

// orderRouter métodos

export { orderRouter }