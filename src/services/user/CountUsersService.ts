import { UserRepository } from '../../repositories'

export class CountUsersService {
  constructor (private readonly userRepository: UserRepository) {}

  async execute (): Promise<number> {
    return await this.userRepository.count()
  }
}
