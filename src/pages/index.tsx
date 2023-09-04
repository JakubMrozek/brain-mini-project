import { useState } from 'react'
import Head from 'next/head'
import { Stack } from '@chakra-ui/react'
import Header from '~/components/header'
import Calendar from '~/components/calendar'
import ExpenseRows from '~/components/exponse-rows'
import ButtonAdd from '~/components/button-add'
import Chart from '~/components/chart'
import { useDb } from '~/context/db'
import { getMonday } from '~/utils/date'
import { insertExpense as insertDbExpense, updateExpense as updateDbExpense, deleteExpense as deleteDbExpense } from '~/utils/db'
import { useExpense } from '~/hooks/use-expense'

export default function IndexPage () {
  const db = useDb()
  const [monday, setMonday] = useState<Date>(getMonday(new Date()))
  const { isLoading, expenses } = useExpense(db, monday)

  const insertExpense = insertDbExpense(db)
  const updateExpense = updateDbExpense(db)
  const deleteExpense = deleteDbExpense(db)

  return (
    <>
      <Head>
        <title>Expenses</title>
      </Head>
      <Stack
        spacing={8}
        p={5}
      >
        <Header />
        <Stack
          spacing={5}
        >
          <Calendar
            monday={monday}
            setMonday={setMonday}
          />
          <Chart
            monday={monday}
            expenses={expenses}
          />
          <Stack
            direction='row'
            justify='flex-end'
            alignItems='center'
          >
            <ButtonAdd
              insertExpense={insertExpense}
            />
          </Stack>
          <ExpenseRows
            isLoading={isLoading}
            rows={expenses}
            updateExpense={updateExpense}
            deleteExpense={deleteExpense}
          />
        </Stack>
      </Stack>
    </>
  )
}
