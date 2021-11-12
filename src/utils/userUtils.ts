import { User } from '@/entities/User'
import { UserRepository } from '@/repositories'

const userRepository = new UserRepository()
export const getUser = async (id: string): Promise<User | undefined> => {
  const user = await userRepository.findOne({ id })

  return user
}
