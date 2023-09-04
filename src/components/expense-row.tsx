import type { IExpense } from '~/types/app'
import type { IUpdateExpense, IDeleteExpense } from '~/utils/db'
import { Stack, Text, Icon, Box } from '@chakra-ui/react'
import { FormattedDate, FormattedNumber } from 'react-intl'
import { FaGoogle, FaFacebook } from 'react-icons/fa'
import ButtonEdit from './button-edit'
import ButtonDelete from './button-delete'

interface IExpenseRow extends IExpense {
  updateExpense: IUpdateExpense
  deleteExpense: IDeleteExpense
}

export default function ExpenseRow ({ id, channel, value, date, updateExpense, deleteExpense }: IExpenseRow) {
  return (
    <Stack
      bg='gray.100'
      borderRadius={10}
      p={4}
    >
      <Box>
        <Icon
          as={channel === 'fb' ? FaFacebook : FaGoogle}
          color='gray.500'
          boxSize={6}
        />
      </Box>
      <Text>
        <FormattedDate
          value={date}
          year='numeric'
          month='long'
          day='numeric'
        />
      </Text>
      <Text
        fontSize='3xl'
      >
        <FormattedNumber
          value={value}
          style='currency'
          currency='USD'
        />
      </Text>
      <Stack
        direction='row'
        mt={3}
        justify='flex-end'
      >
        <Box>
          <ButtonEdit
            id={id}
            channel={channel}
            value={value}
            date={date}
            updateExpense={updateExpense}
          />
        </Box>
        <Box>
          <ButtonDelete
            id={id}
            deleteExpense={deleteExpense}
          />
        </Box>
      </Stack>
    </Stack>
  )
}
