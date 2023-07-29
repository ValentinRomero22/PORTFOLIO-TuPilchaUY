import mongoose from 'mongoose'

import { MONGO_CONNECTION } from '../config/appConfig.js'
import { infoLogger, errorLogger } from './winstonLogger.js'

export const mongoConnect = () => {
    mongoose.connect(MONGO_CONNECTION, {
        useNewUrlParser: true,
        useUniFiedTopology: true,
    })
        .then(() => infoLogger.info('Conectado a Atlas'))
        .catch((error) => errorLogger.error(`Mongo connect error: ${error}`))
}