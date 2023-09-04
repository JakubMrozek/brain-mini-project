
import type { IExpense } from '~/types/app'
import { useEffect, useState } from 'react'
import { type Database, type DataSnapshot, orderByChild, ref, query, startAt, endAt, onValue } from 'firebase/database'
import { getDateFrom, getDateTo } from '~/utils/date'
import { COLLECTION } from '~/utils/db'

const getDbExpenses = (snapshot: DataSnapshot) => {
  const data = snapshot.val() as Record<string, IExpense> | null
  if (!data) {
    return []
  }
  const expenses: IExpense[] = Object.keys(data).map((key) => ({
    id: key,
    channel: data[key]!.channel,
    value: data[key]!.value,
    date: new Date(data[key]!.date)
  }))
  return expenses
}

export function useExpense (db: Database, monday: Date) {
  const [isLoading, setIsLoading] = useState(true)
  const [expenses, setExpenses] = useState<IExpense[]>([])

  useEffect(() => {
    setIsLoading(true)
    const dbQuery = query(
      ref(db, COLLECTION),
      orderByChild('date'),
      startAt(getDateFrom(monday)),
      endAt(getDateTo(monday))
    )

    return onValue(dbQuery, (snapshot) => {
      const expenses = getDbExpenses(snapshot)
      setExpenses(expenses)
      setIsLoading(false)
    })
  }, [monday, db])

  return {
    isLoading,
    expenses
  }
}
