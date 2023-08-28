import express from 'express'
import { createServer } from 'http'

import { mongoConnect } from './utils/mongoConnect.js'
import { PORT } from './config/appConfig.js'
import { infoLogger, errorLogger } from './utils/winstonLogger.js'

import cors from 'cors'

import {
    productRouter,
    cartRouter,
    orderRouter,
    loginOutRouter,
    signInRouter,
    userRouter,
    categoryRouter,
    sizeRouter
} from './routes/main.routes.js'

const app = express()
app.use(express.json())
app.use(cors())
const httpServer = createServer(app)

app.use((req, res, next) => {
    infoLogger.info(`URL: ${req.originalUrl} - METHOD: ${req.method}`)
    next()
})

mongoConnect()

app.use('/', productRouter)
app.use('/', cartRouter)
app.use('/', orderRouter)
app.use('/', loginOutRouter)
app.use('/', signInRouter)
app.use('/', userRouter)
app.use('/', categoryRouter)
app.use('/', sizeRouter)

httpServer.listen(PORT, () => infoLogger.info(`Servidor corriendo en el puerto ${PORT}`))
httpServer.on('error', () => errorLogger.error('Error en el servidor'))