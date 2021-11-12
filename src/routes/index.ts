import { Router } from 'express'
import { userRoutes } from './users'
import { companyRoutes } from './companies'
import { categoryRoutes } from './categories'
import { authRoutes } from './authentication'

const routes = Router()

routes.use('/session', authRoutes)
routes.use('/users', userRoutes)
routes.use('/companies', companyRoutes)
routes.use('/categories', categoryRoutes)

export { routes }
