import { FormControl, FormLabel, RadioGroup, Stack, Radio } from '@chakra-ui/react'

interface IFormChannel {
  channel: string
  setChannel: (channel: string) => void
}

export default function FormChannel ({ channel, setChannel }: IFormChannel) {
  return (
    <FormControl>
      <FormLabel>
        Channel
      </FormLabel>
        <RadioGroup
          onChange={setChannel}
          value={channel}
        >
        <Stack
          direction='row'
        >
          <Radio
            value='fb'
          >
            Facebook
          </Radio>
          <Radio
            value='g'
          >
            Google
          </Radio>
        </Stack>
      </RadioGroup>
    </FormControl>
  )
}
