import { Router } from 'express'

import { CreateCategoryController, ListCategoryController } from '../controllers/category'

import pageValidation from '../validations/pageValidation'

const categoryRoutes = Router()

const createCategoryController = new CreateCategoryController()
const listCategoryController = new ListCategoryController()

categoryRoutes.get('/', pageValidation, listCategoryController.handle)

categoryRoutes.post('/', createCategoryController.handle)

export { categoryRoutes }
