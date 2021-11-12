import { Request, Response } from 'express'
import { getCustomRepository } from 'typeorm'

import { CategoryRepository } from '../../repositories'
import { CreateCategoryService } from '../../services'
import { HttpStatusCode } from '../../types'

export class CreateCategoryController {
  async handle (request: Request, response: Response): Promise<Response> {
    const {
      name
    } = request.body

    const userId = request.user_id
    const categoryRepository = getCustomRepository(CategoryRepository)
    const createCategoryService = new CreateCategoryService(categoryRepository)

    try {
      const category = await createCategoryService.execute({
        name,
        userId
      })

      return response.status(HttpStatusCode.created).json(category)
    } catch (error) {
      return response.status(HttpStatusCode.serverError).json({ error: 'An error occured please try again later' })
    }
  }
}
