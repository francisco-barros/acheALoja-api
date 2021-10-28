import { Router } from 'express'

import { CreateUserController, ListUserController } from '../controllers/user'
import userValidation from '../validations/userValidation'
import pageValidation from '../validations/pageValidation'

const userRoutes = Router()

const createUserController = new CreateUserController()
const listUserController = new ListUserController()

userRoutes.get('/', pageValidation, listUserController.handle)

userRoutes.post('/', userValidation, createUserController.handle)

export { userRoutes }