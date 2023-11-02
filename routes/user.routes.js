import { Router } from 'express'

import { updateImageUser } from '../controllers/userController.js'

import { verifyToken } from '../middlewares/verifyToken.js'

export const userRouter = Router()

userRouter.put('/user/updateImage/:userId', updateImageUser)