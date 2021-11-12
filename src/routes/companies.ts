import { Router } from 'express'

import { CreateCompanyController, ListCompanyController } from '../controllers/company'

import pageValidation from '../validations/pageValidation'

const companyRoutes = Router()

const createCompanyController = new CreateCompanyController()
const listCompanyController = new ListCompanyController()

companyRoutes.get('/', pageValidation, listCompanyController.handle)

companyRoutes.post('/', createCompanyController.handle)

export { companyRoutes }
