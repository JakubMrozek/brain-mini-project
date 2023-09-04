import type { TooltipProps } from 'recharts'
import type { ValueType, NameType } from 'recharts/types/component/DefaultTooltipContent'
import { useIntl } from 'react-intl'
import { Heading, Stack, Text, chakra } from '@chakra-ui/react'
import { getCurrency } from '~/utils/format'

interface IPayload {
  sum: number
  fb: number
  g: number
}

export default function CustomTooltip ({ payload, label }: TooltipProps<ValueType, NameType>) {
  const intl = useIntl()
  if (!payload?.[0]?.payload) {
    return null
  }
  const { payload: { sum, fb, g }} = payload[0] as { payload: IPayload }
  return (
    <Stack
      bg='white'
      p={3}
      borderRadius={10}
      borderWidth={1}
      borderColor='gray.300'
    >
      <Heading
        fontSize='md'
      >
        {label}
      </Heading>
      <Text>
        <chakra.strong
          color='gray.500'
        >
          Summary
        </chakra.strong>: {getCurrency(intl, sum)}
      </Text>
      <Text>
        <chakra.strong
          color='blue.500'
        >
          Facebook
        </chakra.strong>: {getCurrency(intl, fb)}
      </Text>
      <Text>
        <chakra.strong
          color='teal'
        >
          Google
        </chakra.strong>: {getCurrency(intl, g)}
      </Text>
    </Stack>
  )
}
