import { Request, Response } from 'express'
import { getCustomRepository } from 'typeorm'

import { CompanyRepository } from '../../repositories'
import { CreateCompanyService } from '../../services'
import { HttpStatusCode } from '../../types'

export class CreateCompanyController {
  async handle (request: Request, response: Response): Promise<Response> {
    const {
      name,
      phone,
      cep,
      address,
      number,
      complement,
      neighborhood,
      city,
      state,
      latitude,
      longitude,
      description,
      priority,
      facebook,
      instagram,
      active,
      cpfCnpj
    } = request.body

    const userId = request.user_id
    const companyRepository = getCustomRepository(CompanyRepository)
    const createCompanyService = new CreateCompanyService(companyRepository)

    try {
      const company = await createCompanyService.execute({
        name,
        phone,
        cep,
        address,
        number,
        complement,
        neighborhood,
        city,
        state,
        latitude,
        longitude,
        description,
        priority,
        facebook,
        instagram,
        active,
        cpfCnpj,
        userId
      })

      return response.status(HttpStatusCode.created).json(company)
    } catch (error) {
      return response.status(HttpStatusCode.serverError).json({ error: 'An error occured please try again later' })
    }
  }
}
