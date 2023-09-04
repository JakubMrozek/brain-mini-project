import { useRef } from 'react'
import { Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Stack } from '@chakra-ui/react'
import FormValue from './form-value'
import FormChannel from './form-channel'
import FormDate from './form-date'

interface IFormModal {
  date?: Date
  value?: number
  channel: string
  isOpen: boolean
  setDate: (date?: Date) => void
  setValue: (value?: number) => void
  setChannel: (channel: string) => void
  onCancel: () => void
  onSubmit: () => Promise<void>
}

export default function FormModal ({ date, setDate, value, setValue, channel, setChannel, isOpen, onCancel, onSubmit }: IFormModal) {
  const initialRef = useRef(null)
  const finalRef = useRef(null)

  return (
    <Modal
      initialFocusRef={initialRef}
      finalFocusRef={finalRef}
      isOpen={isOpen}
      onClose={onCancel}
    >
      <ModalOverlay />
      <ModalContent>
        <form
          onSubmit={e => {
            e.preventDefault()
            void onSubmit()
          }}
        >
        <ModalHeader>
          Add Expense
        </ModalHeader>
        <ModalCloseButton />
          <ModalBody
            pb={6}
          >
            <Stack
              spacing={5}
            >
              <FormValue
                initialRef={initialRef}
                value={value}
                setValue={setValue}
              />
              <FormChannel
                channel={channel}
                setChannel={setChannel}
              />
              <FormDate
                date={date}
                setDate={setDate}
              />
            </Stack>
          </ModalBody>
          <ModalFooter>
            <Button
              mr={3}
              onClick={onCancel}
            >
              Cancel
            </Button>
            <Button
              colorScheme='teal'
              type='submit'
              isDisabled={!date || !value || !channel}
            >
              Save
            </Button>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  )
}
