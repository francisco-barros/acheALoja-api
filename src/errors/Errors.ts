export const badRequest = (message: string): Error => {
  return new Error(message)
}
