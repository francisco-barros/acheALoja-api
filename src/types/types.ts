export interface UserParams {
  name: string
  email: string
  password: string
  cpf: string
  phone?: string
  cellphone?: string
  admin: boolean
  active: boolean
}

export interface PageLinks {
  first?: string
  prev?: string
  next?: string
  last?: string
}

export enum HttpStatusCode {
  OK = 200,
  created = 201,
  noContent = 204,
  badRequest = 400,
  unauthorized = 401,
  forbidden = 403,
  notFound = 404,
  serverError = 500,
}
