import { Router } from 'express'

// importar controlador...

import { isAuthenticated } from '../middlewares/isAuthenticated.js'

const productRouter = Router()

// productRouter métodos

export { productRouter }