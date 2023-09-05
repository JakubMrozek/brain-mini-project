// import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import { getMonday, getSunday, getNextMonday, getPreviousMonday } from '~/utils/date'

describe('utils', () => {
  describe('chart', () => {
    describe('getMonday function', () => {
      it('should return the correct Monday date when given a date', () => {
        const inputDate = new Date('2023-09-05T00:00:00.000Z') // Tuesday
        const result = getMonday(inputDate)
        expect(result.toISOString()).toBe('2023-09-04T00:00:00.000Z')
      })
    })
  })

  describe('getSunday function', () => {
    it('should return the correct Sunday date when given a Monday date', () => {
      const inputMonday = new Date('2023-09-04T00:00:00.000Z') // Monday
      const result = getSunday(inputMonday)
      expect(result.toISOString()).toBe('2023-09-10T00:00:00.000Z')
    })
  })

  describe('getNextMonday function', () => {
    it('should return the correct next Monday date when given a Monday date', () => {
      const inputMonday = new Date('2023-09-04T00:00:00.000Z') // Monday
      const result = getNextMonday(inputMonday)
      expect(result.toISOString()).toBe('2023-09-11T00:00:00.000Z')
    })
  })

  describe('getPreviousMonday function', () => {
    it('should return the correct previous Monday date when given a Monday date', () => {
      const inputMonday = new Date('2023-09-04T00:00:00.000Z') // Monday
      const result = getPreviousMonday(inputMonday)
      expect(result.toISOString()).toBe('2023-08-28T00:00:00.000Z')
    })
  })

})
