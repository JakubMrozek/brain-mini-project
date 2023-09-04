import type { IExpense } from '~/types/app'

const DAYS = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday'
]

/**
 * Returns day of week (0-6), 0 is Monday
 */
export const getDay = (date: Date) => (date.getDay() + 6) % 7

/**
 * Generates chart data for visualizing expenses by day and channel.
 *
 * This function takes an array of expense objects and creates a data structure
 * suitable for rendering a chart. Each day of the week is represented with
 * corresponding expenses for 'fb' (Facebook) and 'g' (Google) channels, as well
 * as the total sum of expenses for that day.
 *
 * @example
 * const expenses = [
 *  { channel: 'fb', value: 100, date: new Date('2021-01-01') },
 *  { channel: 'g', value: 200, date: new Date('2021-01-02') },
 *  { channel: 'fb', value: 300, date: new Date('2021-01-02') }
 * ]
 * const result = createChartData(expenses)
 * // [
 * //   { name: 'Monday', fb: 100, g: 0, sum: 100 },
 * //   { name: 'Tuesday', fb: 300, g: 200, sum: 500 },
 * //   { name: 'Wednesday', fb: 0, g: 0, sum: 0 },
 * //   { name: 'Thursday', fb: 0, g: 0, sum: 0 },
 * //   { name: 'Friday', fb: 0, g: 0, sum: 0 },
 * //   { name: 'Saturday', fb: 0, g: 0, sum: 0 },
 * //   { name: 'Sunday', fb: 0, g: 0, sum: 0 }
 * // ]
 */
export const createChartData = (expenses: IExpense[]) => {
  const days = DAYS.map((name) => ({ name, fb: 0, g: 0, sum: 0 }))

  for (const e of expenses) {
    // getDay() returns 0-6, 0 is Monday
    const day = getDay(e.date)
    const obj = days[day]
    if (!obj) {
      continue
    }
    switch (e.channel) {
      case 'fb':
        obj.fb += e.value
        break
      case 'g':
        obj.g += e.value
        break
    }
    obj.sum += e.value
  }
  return days
}
