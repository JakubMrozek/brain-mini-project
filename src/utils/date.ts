export const getMonday = (d: Date) => {
  const day = d.getDay()
  const diff = d.getDate() - day + (day === 0 ? -6 : 1)
  const monday = new Date(d.setDate(diff))
  return monday
}

export const getSunday = (monday: Date) => {
  const sunday = new Date(monday)
  sunday.setDate(sunday.getDate() + 6)
  return sunday
}

export const getNextMonday = (monday: Date) => {
  const nextMonday = new Date(monday)
  nextMonday.setDate(nextMonday.getDate() + 7)
  return nextMonday
}

export const getPreviousMonday = (monday: Date) => {
  const previousMonday = new Date(monday)
  previousMonday.setDate(previousMonday.getDate() - 7)
  return previousMonday
}

export const getDateFrom = (monday: Date) => {
  const date = new Date(monday)
  date.setHours(0, 0, 0, 0)
  return date.getTime()
}

export const getDateTo = (monday: Date) => {
  const sunday = getSunday(monday)
  sunday.setHours(23, 59, 59, 999)
  return new Date(sunday).getTime()
}

export const getLocaleDate = (date: Date) => {
  const d = new Date(date)
  const month = d.getMonth() + 1
  const day = d.getDate()
  const value =  `${d.getFullYear()}-${month < 10 ? '0' + month : month}-${day < 10 ? '0' + day : day}`
  return value
}
