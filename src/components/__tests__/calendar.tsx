import '@testing-library/jest-dom'
import { render, fireEvent } from '@testing-library/react'
import { IntlProvider } from 'react-intl'
import Calendar from '../calendar'

describe('components', () => {
  describe('Calendar', () => {
    it('renders correctly', () => {
      const monday = new Date('2023-09-04')
      const setMonday = jest.fn()

      const { getByLabelText, getByText } = render(
        <IntlProvider locale='en'>
          <Calendar monday={monday} setMonday={setMonday} />
        </IntlProvider>
      )

      expect(getByLabelText('Previous')).toBeInTheDocument()
      expect(getByLabelText('Next')).toBeInTheDocument()

      expect(getByText('Sep 4, 2023')).toBeInTheDocument()
      expect(getByText('Sep 10, 2023')).toBeInTheDocument()

      fireEvent.click(getByLabelText('Previous'))
      expect(setMonday).toHaveBeenCalledWith(new Date('2023-08-28T00:00:00.000Z'))

      fireEvent.click(getByLabelText('Next'))
      expect(setMonday).toHaveBeenCalledWith(new Date('2023-09-11T00:00:00.000Z'))
    })
  })
})
