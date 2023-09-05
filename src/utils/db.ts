
import type { IExpense } from '~/types/app'
import { type Database, ref, set, push, remove } from 'firebase/database'
import { env } from '~/env.mjs'

export const DB_CONFIG = {
  apiKey: env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  databaseURL: env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
  projectId: env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
}

export const COLLECTION = 'expenses'

export const insertExpense = (db: Database) => async (data: Omit<IExpense, 'id'>) => {
  try {
    await push(ref(db, COLLECTION), {
      channel: data.channel,
      value: data.value,
      date: data.date.getTime()
    })
  } catch (err) {
    // log to sentry or other error log ...
    // eslint-disable-next-line no-console
    console.error(err)
    throw err
  }
}

export const updateExpense = (db: Database) => async (data: IExpense) => {
  try {
    await set(ref(db, `${COLLECTION}/${data.id}`), {
      channel: data.channel,
      value: data.value,
      date: data.date.getTime()
    })
  } catch (err) {
    // log to sentry or other error log ...
    // eslint-disable-next-line no-console
    console.error(err)
    throw err
  }
}

export const deleteExpense = (db: Database) => async (id: string) => {
  try {
    await remove(ref(db, `${COLLECTION}/${id}`))
  } catch (err) {
    // log to sentry or other error log ...
    // eslint-disable-next-line no-console
    console.error(err)
    throw err
  }
}

export const cleanDataBeforeSave = (data: Omit<IExpense, 'id'>) => {
  const date = new Date(data.date)
  date.setHours(23, 0, 0, 0)
  return { ...data, date }
}

export type IInsertExpense = ReturnType<typeof insertExpense>
export type IUpdateExpense = ReturnType<typeof updateExpense>
export type IDeleteExpense = ReturnType<typeof deleteExpense>
