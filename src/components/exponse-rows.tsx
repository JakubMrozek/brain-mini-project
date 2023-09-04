import type { IExpense } from '~/types/app'
import type { IUpdateExpense, IDeleteExpense } from '~/utils/db'
import { Alert, AlertIcon, Box, SimpleGrid, Spinner } from '@chakra-ui/react'
import ExpenseRow from './expense-row'

interface IExpenseRows {
  isLoading: boolean
  rows: IExpense[]
  updateExpense: IUpdateExpense
  deleteExpense: IDeleteExpense
}

export default function ExpenseRows ({ isLoading, rows, updateExpense, deleteExpense }: IExpenseRows) {
  if (isLoading) {
    return (
      <Box
        textAlign='center'
      >
        <Spinner />
      </Box>
    )
  }

  if (!isLoading && rows.length === 0) {
    return (
      <Box>
        <Alert
          colorScheme='gray'
          p={5}
          borderRadius={10}
        >
          <AlertIcon />
          There are no expenses logged for this week.
        </Alert>
      </Box>
    )
  }

  return (
    <SimpleGrid
      columns={{ base: 1, sm: 2, md: 3 }}
      spacing={5}
    >
      {(rows || []).map((row) => (
        <ExpenseRow
          key={row.id}
          {...row}
          updateExpense={updateExpense}
          deleteExpense={deleteExpense}
        />
      ))}
    </SimpleGrid>
  )
}
