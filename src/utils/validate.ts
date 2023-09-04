import { z } from 'zod'

const schema = z.object({
  channel: z.enum(['fb', 'g']),
  value: z.number({
    required_error: 'Expense value is required.',
  }).gt(0, {
    message: 'Expense must be greater than 0.'
  }),
  date: z.date({
    required_error: 'Date is required.',
    invalid_type_error: 'Date must be a valid date.'
  })
})

export const validateForm = (channel: string, value?: number, date?: Date) => schema.parse({ channel, value, date })
