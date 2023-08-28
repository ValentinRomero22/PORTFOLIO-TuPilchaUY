import { Router } from 'express'

import { postLogin } from '../controllers/loginOutController.js'

export const loginOutRouter = Router()

loginOutRouter.post('/login', postLogin)
