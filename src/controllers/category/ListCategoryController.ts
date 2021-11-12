import { Request, Response } from 'express'
import { getCustomRepository } from 'typeorm'

import { CategoryRepository } from '../..//repositories'
import { CountCategoryService, ListCategoryService } from '../../services'
import { Pagination } from '../../utils/Pagination'
import { HttpStatusCode } from '../../types'

export class ListCategoryController {
  async handle (request: Request, response: Response): Promise<Response> {
    const limit = 20
    const { page = 1 } = request.query
    const { currentUrl } = request

    const categoryRepository = getCustomRepository(CategoryRepository)
    const listCategoryService = new ListCategoryService(categoryRepository)
    const countCategoryService = new CountCategoryService(categoryRepository)

    const [categories, count] = await Promise.all([
      listCategoryService.execute(Number(page), limit),
      countCategoryService.execute()
    ])

    response.header('X-Total-Count', count.toString())

    const pagesTotal = Math.ceil(count / limit)
    if (pagesTotal > 1) {
      response.links(
        Pagination.generate(Number(page), pagesTotal, currentUrl)
      )
    }

    return response.status(HttpStatusCode.OK).json(categories)
  }
}
