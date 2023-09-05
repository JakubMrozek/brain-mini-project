import { ZodError } from 'zod'

export const getFormError = (err: unknown, defaultMessage: string) => {
  if (err instanceof ZodError) {
    return err.issues.map(issue => issue.message).join('\n')
  }
  return defaultMessage
}
