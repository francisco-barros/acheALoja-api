import { Router } from 'express'

import { CreateUserController, ListUserController } from '../controllers/user'

import pageValidation from '../validations/pageValidation'

const userRoutes = Router()

const createUserController = new CreateUserController()
const listUserController = new ListUserController()

userRoutes.get('/', pageValidation, listUserController.handle)

userRoutes.post('/', createUserController.handle)

export { userRoutes }
