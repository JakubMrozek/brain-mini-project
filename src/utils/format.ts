import type { IntlShape } from 'react-intl'

export const getCurrency = (intl: IntlShape, value: number) => {
  return intl.formatNumber(value, { style: 'currency', currency: 'USD' })
}
