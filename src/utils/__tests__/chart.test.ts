// import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import { getDay, createChartData } from '~/utils/chart'

describe('utils', () => {
  describe('chart', () => {
    describe('getDay', () => {

      it('should return the correct day index (0-6) for a given date', () => {
        // Test for Monday (0 is Monday)
        expect(getDay(new Date('2023-08-28'))).toBe(0)

        // Test for Tuesday (1 is Tuesday)
        expect(getDay(new Date('2023-08-29'))).toBe(1)

        // Test for Sunday (6 is Sunday)
        expect(getDay(new Date('2023-09-03'))).toBe(6)
      })

    })

    describe('createChartData', () => {

      it('should generate chart data with correct structure', () => {
        const expenses = [
          { id: '1', channel: 'fb', value: 100, date: new Date('2023-08-28') },
          { id: '2', channel: 'g', value: 200, date: new Date('2023-08-29') },
          { id: '3', channel: 'fb', value: 300, date: new Date('2023-08-29') }
        ]

        const chartData = createChartData(expenses)

        // Expect the result to be an array with 7 objects (for each day of the week)
        expect(chartData.length).toBe(7)

        // Expect the first object to have the name 'Monday' and fb value 100
        expect(chartData[0]).toEqual({ name: 'Monday', fb: 100, g: 0, sum: 100 })

        // Expect the second object to have the name 'Tuesday' and fb value 300 and g value 200
        expect(chartData[1]).toEqual({ name: 'Tuesday', fb: 300, g: 200, sum: 500 })

        // Expect the rest of the objects to have zero values for fb, g, and sum
        expect(chartData[6]).toEqual({ name: 'Sunday', fb: 0, g: 0, sum: 0 })
      })

    })
  })
})
