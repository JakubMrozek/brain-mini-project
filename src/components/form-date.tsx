import { FormControl, FormLabel, Input } from '@chakra-ui/react'
import { getLocaleDate } from '~/utils/date'

interface IFormDate {
  date?: Date
  setDate: (date?: Date) => void
}

export default function FormDate ({ date, setDate }: IFormDate) {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDate(e.target.value ? new Date(e.target.value) : undefined)
  }

  return (
    <FormControl>
      <FormLabel>
        Date
      </FormLabel>
      <Input
        name='expense_date'
        type='date'
        isRequired
        defaultValue={date ? getLocaleDate(date) : undefined}
        onChange={onChange}
      />
    </FormControl>
  )
}
