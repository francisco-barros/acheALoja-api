import { UserRepository } from '../../repositories'
import { UserParams } from '../../types'
import { badRequest } from '../../errors'
import { hash } from 'bcrypt'
import { User } from '../../entities/User'

export class CreateUserService {
  constructor (private readonly userRepository: UserRepository) {}

  async execute ({
    name,
    email,
    password,
    cpf,
    phone = '',
    cellphone = '',
    admin = false,
    active = true
  }: UserParams): Promise<User | Error> {
    if ((await this.userRepository.findOne({ email })) != null) {
      return badRequest('User already exists')
    }

    const user = this.userRepository.create({
      name,
      email,
      password: await hash(password, 8),
      cpf,
      phone,
      cellphone,
      admin,
      active
    })

    await this.userRepository.save(user)

    return user
  }
}
