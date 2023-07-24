import { dotenv } from 'dotenv'
import { path } from 'path'

dotenv.config({
    path: path.resolve(process.cwd(), process.env.NODE_ENV + '.env')
})

const PORT = process.env.PORT || 8080
const MONGO_CONNECTION = process.env.MONGO_CONNECTION
const SECRET_SESSION = process.env.SECRET_SESSION
const SESSION_MAX_AGE = process.env.SESSION_MAX_AGE

export { PORT, MONGO_CONNECTION, SECRET_SESSION, SESSION_MAX_AGE }