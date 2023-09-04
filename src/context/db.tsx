import React, { useContext } from 'react'
import { type Database } from 'firebase/database'

const DbContext = React.createContext<Database | null>(null)

interface IDProvider {
  db: Database
  children: React.ReactNode
}

export const DbProvider = ({ db, children }: IDProvider) => {
  return (
    <DbContext.Provider
      value={db}
    >
      {children}
    </DbContext.Provider>
  )
}

export const useDb = () => {
  const db = useContext(DbContext)
  if (!db) {
    throw new Error('Parametr db must be set in DbProvider.')
  }
  return db
}


