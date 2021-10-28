import { Router } from 'express'

import { CreateUserController, ListUserController } from '../controllers/user'

const userRoutes = Router()

const createUserController = new CreateUserController()
const listUserController = new ListUserController()

userRoutes.get('/', listUserController.handle)

userRoutes.post('/', createUserController.handle)

export { userRoutes }
