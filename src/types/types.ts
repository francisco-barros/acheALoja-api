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

export interface CompanyParams {
  name: string
  phone?: string
  cep?: string
  address?: string
  number?: string
  complement?: string
  neighborhood?: string
  city?: string
  state?: string
  latitude?: string
  longitude?: string
  description?: string
  priority?: boolean
  facebook?: string
  instagram?: string
  active?: boolean
  cpfCnpj: string
  userId: string
}

export interface CategoryParams {
  name: string
  userId: string
}

export interface AuthenticationParams {
  email: string
  password: string
}

export interface PageLinks {
  first?: string
  prev?: string
  next?: string
  last?: string
}

export interface JwtPayload {
  sub: string
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
