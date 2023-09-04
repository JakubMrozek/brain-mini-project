import type { UseToastOptions } from '@chakra-ui/react'
import { ZodError } from 'zod'

export const getFormError = (err: unknown, defaultMessage: string) => {
  if (err instanceof ZodError) {
    return err.issues.map(issue => issue.message).join('\n')
  }
  return defaultMessage
}

export const getToastError = (description: string): UseToastOptions => ({
  description,
  title: 'Error',
  status: 'error',
  duration: 5000,
  isClosable: true
})
