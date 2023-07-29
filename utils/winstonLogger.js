import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

import { createLogger, format, transports } from 'winston'
/* import { combine, timestamp, json, printf } from format */

const { combine, timestamp, json, printf } = format

const infoLogger = createLogger({
    format: combine(
        timestamp({
            format: 'DD-MM-YYYY HH:mm:ss'
        }),
        printf(info =>
            `[${info.timestamp} ${info.level.toUpperCase()}: ${info.message}]`
        )
    ),
    transports: [
        new transports.Console({
            level: 'info'
        })
    ]
})

const warnLogger = createLogger({
    format: combine(
        json(),
        timestamp({
            format: 'DD-MM-YYYY HH:mm:ss'
        }),
        printf(info =>
            `[${info.timestamp} ${info.level.toUpperCase()}: ${info.message}]`
        )
    ),
    transports: [
        new transports.Console({
            level: 'warn'
        }),
        new transports.File({
            filename: `${__dirname}/../logs/warn.log`,
            level: 'warn'
        })
    ]
})

const errorLogger = createLogger({
    format: combine(
        json(),
        timestamp({
            format: 'DD-MM-YYYY HH:mm:ss'
        }),
        printf(info =>
            `[${info.timestamp}, ${info.level.toUpperCase()} ${info.message}]`    
        )
    ),
    transports: [
        new transports.Console({
            level: 'error'
        }),
        new transports.File({
            filename: `${__dirname}/../logs/error.log`,
            level: 'error'
        })
    ]
})

export { infoLogger, warnLogger, errorLogger }