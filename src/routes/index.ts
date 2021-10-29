import { Router } from 'express'
import { userRoutes } from './users'
import { authRoutes } from './authentication'

const routes = Router()

routes.use('/session', authRoutes)
routes.use('/users', userRoutes)

export { routes }
