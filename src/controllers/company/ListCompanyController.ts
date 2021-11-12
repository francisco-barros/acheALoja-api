import { Request, Response } from 'express'
import { getCustomRepository } from 'typeorm'

import { CompanyRepository } from '../..//repositories'
import { CountCompanyService, ListCompanyService } from '../../services'
import { Pagination } from '../../utils/Pagination'
import { HttpStatusCode } from '../../types'

export class ListCompanyController {
  async handle (request: Request, response: Response): Promise<Response> {
    const limit = 20
    const { page = 1 } = request.query
    const { currentUrl } = request

    const companyRepository = getCustomRepository(CompanyRepository)
    const listCompanyService = new ListCompanyService(companyRepository)
    const countCompanyService = new CountCompanyService(companyRepository)

    const [companies, count] = await Promise.all([
      listCompanyService.execute(Number(page), limit),
      countCompanyService.execute()
    ])

    response.header('X-Total-Count', count.toString())

    const pagesTotal = Math.ceil(count / limit)
    if (pagesTotal > 1) {
      response.links(
        Pagination.generate(Number(page), pagesTotal, currentUrl)
      )
    }

    return response.status(HttpStatusCode.OK).json(companies)
  }
}
