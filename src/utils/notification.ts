import type { UseToastOptions } from '@chakra-ui/react'

const getOptions = (title: string, description: string, status: 'success' | 'error'): UseToastOptions => ({
  title,
  description,
  status,
  duration: 5000,
  isClosable: true
})

export const getToastOk = (title: string, desc: string): UseToastOptions => getOptions(title, desc, 'success')

export const getToastError = (title: string, desc: string): UseToastOptions => getOptions(title, desc, 'error')
