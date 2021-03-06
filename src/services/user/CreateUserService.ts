import { UserRepository } from '../../repositories'
import { UserParams } from '../../types'
import { badRequest, serverError } from '../../errors'
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

    let hashedPassword = ''

    try {
      hashedPassword = await hash(password, 8)
    } catch (error) {
      return serverError('An error occured, please try again later')
    }

    const user = this.userRepository.create({
      name,
      email,
      password: hashedPassword,
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
