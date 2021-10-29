import { badRequest, unauthorized } from '../errors'
import { NextFunction, Request, Response } from 'express'
import { verify } from 'jsonwebtoken'
import { JwtPayload } from '../types'

export default async (request: Request, _: Response, next: NextFunction): Promise<void> => {
  const { authorization = '' } = request?.headers

  if (authorization === null || authorization === undefined) {
    badRequest('Token missing')
  }

  const [, token = ''] = authorization.split(' ')

  try {
    const { sub } = verify(token, process.env.JWT_SECRET ?? '') as JwtPayload
    request.user_id = sub

    return next()
  } catch (err) {
    unauthorized('Token  is not valid')
  }
}
