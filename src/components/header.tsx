import { Stack, Text, Heading, Icon } from '@chakra-ui/react'
import { Link } from '@chakra-ui/next-js'
import { GiBrain } from 'react-icons/gi'

export default function Header () {
  return (
    <Stack
      spacing={4}
      direction='row'
      bg='gray.100'
      p={3}
      borderRadius={10}
      alignItems='center'
    >
      <Text>
        <Link
          href='/'
          color='gray.500'
          >
          <Icon
            as={GiBrain}
            color='gray.300'
            boxSize={7}
          />
        </Link>
      </Text>
      <Heading
        fontWeight='light'
        fontSize='2xl'
        color='gray.400'
      >
        BRAIN
      </Heading>
    </Stack>
  )
}
