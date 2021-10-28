import { UserRepository } from '../../repositories'
import { User } from '../../entities/User'

export class ListUserService {
  constructor (private readonly userRepository: UserRepository) {}

  async execute (
    page: number,
    limit: number
  ): Promise<User[] | boolean> {
    const users = await this.userRepository.find({
      take: limit,
      skip: (page - 1) * limit
    })
    return users
  }
}
