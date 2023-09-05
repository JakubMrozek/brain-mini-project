// import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import { validateForm } from '~/utils/validate'

describe('utils', () => {
  describe('validate', () => {
    describe('validateForm', () => {

      it('should return valid data when all fields are correct', () => {
        const result = validateForm('fb', 100, new Date('2023-09-03'))
        expect(result).toEqual({ channel: 'fb', value: 100, date: new Date('2023-09-03') })
      })

      it('should throw an error if channel is not "fb" or "g"', () => {
        expect(() => validateForm('invalid_channel', 100, new Date())).toThrow()
      })

      it('should throw an error if expense is less than or equal to 0', () => {
        expect(() => validateForm('fb', 0, new Date())).toThrow()
      })

      it('should throw an error if date is not a valid Date object', () => {
        expect(() => validateForm('fb', 100, new Date('invalid_date'))).toThrow()
      })

      it('should throw an error if channel is missing', () => {
        // @ts-expect-error Testing invalid input
        expect(() => validateForm(undefined, 100, new Date())).toThrow()
      })

      it('should throw an error if expense is missing', () => {
        expect(() => validateForm('fb', undefined, new Date())).toThrow()
      })

      it('should throw an error if date is missing', () => {
        expect(() => validateForm('fb', 100, undefined)).toThrow()
      })
    })
  })
})
