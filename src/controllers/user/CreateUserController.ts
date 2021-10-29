import { Request, Response } from 'express'
import { getCustomRepository } from 'typeorm'

import { UserRepository } from '../../repositories'
import { CreateUserService } from '../../services'
import { HttpStatusCode } from '../../types'

export class CreateUserController {
  async handle (request: Request, response: Response): Promise<Response> {
    const { name, email, password, cpf, phone, cellphone, admin, active } = request.body

    const userRepository = getCustomRepository(UserRepository)
    const createUserService = new CreateUserService(userRepository)

    try {
      const user = await createUserService.execute({
        name,
        email,
        password,
        cpf,
        phone,
        cellphone,
        admin,
        active
      })

      return response.status(HttpStatusCode.created).json(user)
    } catch (error) {
      return response.status(HttpStatusCode.serverError).json({ error: 'An error occured please try again later' })
    }
  }
}
