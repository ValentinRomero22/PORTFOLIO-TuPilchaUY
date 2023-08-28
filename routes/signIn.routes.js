import { Router } from 'express'

import { postSignIn } from '../controllers/signInController.js'

export const signInRouter = Router()

signInRouter.post('/signIn', postSignIn)