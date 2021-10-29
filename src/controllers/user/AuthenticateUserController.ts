import { Request, Response } from 'express'
import { getCustomRepository } from 'typeorm'

import { UserRepository } from '../../repositories'
import { AuthenticateUserService } from '../../services'
import { HttpStatusCode } from '../../types'

export class AuthenticateUserController {
  async handle (request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body

    const userRepository = getCustomRepository(UserRepository)
    const authenticateUserService = new AuthenticateUserService(userRepository)

    try {
      const accessToken = await authenticateUserService.execute({
        email,
        password
      })
      console.log('rota deu bom')
      return response.status(HttpStatusCode.OK).json({ access_token: accessToken })
    } catch (error) {
      console.log('rota deu ruim')
      return response.status(HttpStatusCode.unauthorized).json({ error: 'User Unauthorized' })
    }
  }
}
