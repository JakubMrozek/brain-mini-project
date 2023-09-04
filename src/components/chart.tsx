import type { IExpense } from '~/types/app'
import { Box, useMediaQuery } from '@chakra-ui/react'
import { BarChart, Bar, LabelList, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { useIntl } from 'react-intl'
import { createChartData } from '~/utils/chart'
import { getCurrency } from '~/utils/format'
import CustomTooltip from './tooltip'

interface ChartProps {
  expenses: IExpense[]
  monday: Date
}

export default function Chart ({ expenses }: ChartProps) {
  const intl = useIntl()
  const days = createChartData(expenses)
  const [isLargerThan700] = useMediaQuery('(min-width: 700px)')

  return (
    <Box
      w='100%'
      h='255px'
    >
      <ResponsiveContainer>
        <BarChart
          data={days}
          margin={{
            top: 30,
          }}
        >
          <CartesianGrid
            strokeDasharray='3 3'
          />
          <XAxis
            dataKey='name'
            tickFormatter={(value: string) => isLargerThan700 ? value: value.slice(0, 2)}
          />
          <YAxis />
          <Tooltip
            content={<CustomTooltip />}
          />
          <Legend
            formatter={(value: string) => value === 'fb' ? 'Facebook' : 'Google'}
          />
          <Bar
            dataKey='fb'
            stackId='a'
            fill='var(--chakra-colors-blue-400)'
          />
          <Bar
            dataKey='g'
            stackId='a'
            fill='var(--chakra-colors-teal-500)'
          >
            {isLargerThan700 && (
              <LabelList
                position='top'
                formatter={(value: number) => getCurrency(intl, value)}
              />
            )}
          </Bar>
        </BarChart>
        </ResponsiveContainer>
      </Box>
  )
}
