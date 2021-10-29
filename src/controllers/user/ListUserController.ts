import { Request, Response } from 'express'
import { getCustomRepository } from 'typeorm'

import { UserRepository } from '../..//repositories'
import { CountUsersService, ListUserService } from '../../services'
import { Pagination } from '../../utils/Pagination'
import { HttpStatusCode } from '../../types'

export class ListUserController {
  async handle (request: Request, response: Response): Promise<Response> {
    const limit = 20
    const { page = 1 } = request.query
    const { currentUrl } = request

    const userRepository = getCustomRepository(UserRepository)
    const listUserService = new ListUserService(userRepository)
    const countUserService = new CountUsersService(userRepository)

    const [users, count] = await Promise.all([
      listUserService.execute(Number(page), limit),
      countUserService.execute()
    ])

    response.header('X-Total-Count', count.toString())

    const pagesTotal = Math.ceil(count / limit)
    if (pagesTotal > 1) {
      response.links(
        Pagination.generate(Number(page), pagesTotal, currentUrl)
      )
    }

    return response.status(HttpStatusCode.OK).json(users)
  }
}
