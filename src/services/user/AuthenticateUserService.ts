import { compare } from 'bcrypt'
import { sign } from 'jsonwebtoken'
import { UserRepository } from '../../repositories'
import { unauthorized } from '../../errors'
import { AuthenticationParams } from '../../types'

export class AuthenticateUserService {
  constructor (private readonly userRepository: UserRepository) {}

  async execute ({ email, password }: AuthenticationParams): Promise<string | Error | undefined> {
    const user = await this.userRepository.findOne({ email })

    if (user === null || user === undefined) {
      throw unauthorized('Email or password is incorrect')
    }

    const passwordMatch = await compare(password, user?.password)
    if (!passwordMatch) {
      throw unauthorized('Email or password is incorrect')
    }

    const token = sign(
      { data: user.email },
      process.env.JWT_SECRET!,
      {
        expiresIn: process.env.JWT_EXPIRATION_TIME!,
        subject: user.id
      })
    return token
  }
}
