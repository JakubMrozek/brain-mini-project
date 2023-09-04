import { FormControl, FormHelperText, FormLabel, Input } from '@chakra-ui/react'

interface IFormValue {
  initialRef?: React.MutableRefObject<null>
  value?: number
  setValue: (value?: number) => void
}

export default function FormValue ({ value, initialRef, setValue }: IFormValue) {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value)
    setValue(value > 0 ? value : undefined)
  }

  return (
    <FormControl>
      <FormLabel>
        Value (USD)
      </FormLabel>
      <Input
        name='expense_value'
        ref={initialRef}
        type='number'
        min={0}
        step='0.01'
        onChange={onChange}
        defaultValue={value}
        isRequired
      />
      <FormHelperText>
        Please enter a value greater than 0.
      </FormHelperText>
    </FormControl>
  )
}
