import { Box, Stack, IconButton, chakra } from '@chakra-ui/react'
import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons'
import { FormattedDate } from 'react-intl'
import { getSunday, getPreviousMonday, getNextMonday } from '~/utils/date'

interface ICalendar {
  monday: Date
  setMonday: (date: Date) => void
}

export default function Calendar ({ monday, setMonday }: ICalendar) {
  const onClickPrevious = () => {
    setMonday(getPreviousMonday(monday))
  }

  const onClickNext = () => {
    setMonday(getNextMonday(monday))
  }

  const sunday = getSunday(monday)

  return (
    <Stack
      direction='row'
      justify='center'
      alignItems='center'
    >
      <Box>
        <IconButton
          aria-label='Previuos'
          icon={<ArrowBackIcon />}
          onClick={onClickPrevious}
        />
      </Box>
      <Stack
        fontSize={{ base: 'md', sm: 'lg', md: 'xl' }}
        direction={{ base: 'column', sm: 'row' }}
        justify='center'
        alignItems='center'
      >
        <Box>
          <chakra.strong
            whiteSpace='nowrap'
          >
            <FormattedDate
              value={monday}
              year='numeric'
              month='short'
              day='numeric'
            />
          </chakra.strong>
        </Box>
        <Box>
          {'—'}
        </Box>
        <Box>
          <chakra.strong
            whiteSpace='nowrap'
          >
            <FormattedDate
              value={sunday}
              year='numeric'
              month='short'
              day='numeric'
            />
          </chakra.strong>
        </Box>
      </Stack>
      <Box>
        <IconButton
          aria-label='Next'
          icon={<ArrowForwardIcon />}
          onClick={onClickNext}
        />
      </Box>
    </Stack>
  )
}
