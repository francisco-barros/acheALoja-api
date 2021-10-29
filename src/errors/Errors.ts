export const badRequest = (message: string): Error => {
  return new Error(message)
}

export const unauthorized = (message: string): Error => {
  return new Error(message)
}

export const serverError = (message: string): Error => {
  return new Error(message)
}
