import { User } from '@/entities/User'
import { UserRepository } from '@/repositories'
import { getCustomRepository } from 'typeorm'

const userRepository = getCustomRepository(UserRepository)
export const getUser = async (id: string): Promise<User | undefined> => {
  const user = await userRepository.findOne({ id })

  return user
}
