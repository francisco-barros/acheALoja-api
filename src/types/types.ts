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

export enum HttpStatusCode {
  OK = 200,
  noContent = 204,
  badRequest = 400,
  unauthorized = 401,
  forbidden = 403,
  notFound = 404,
  serverError = 500,
}
