import { express } from 'express'
import { createServer } from 'http'

import { mongoConnect } from './utils/mongoConnect'
import { PORT } from './config/appConfig'
import { infoLogger, errorLogger } from './utils/winstonLogger'

import {
    productRouter,
    cartRouter,
    orderRouter,
    loginOutRouter,
    signInRouter,
    userRouter,
    categoryRouter,
    sizeRouter
} from './routes/main.routes'

const app = express()
const httpServer = createServer(app)

app.use((req, res, next) => {
    infoLogger.info(`URL: ${req.originalUrl} - METHOD: ${req.method}`)
    next()
})

// configuración de jwt que debería de alguna forma enlazarse con la conexión de mongo...

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