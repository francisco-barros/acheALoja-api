import { Router } from 'express'

import { AuthenticateUserController } from '../controllers/user'

const authRoutes = Router()

const authenticateUserController = new AuthenticateUserController()

authRoutes.post('/', authenticateUserController.handle)

export { authRoutes }
