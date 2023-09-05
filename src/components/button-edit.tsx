import type { IExpense } from '~/types/app'
import { type IUpdateExpense, cleanDataBeforeSave } from '~/utils/db'
import { useState } from 'react'
import { useDisclosure, Button, useToast } from '@chakra-ui/react'
import { EditIcon } from '@chakra-ui/icons'
import { getToastError, getToastOk } from '~/utils/notification'
import { validateForm } from '~/utils/validate'
import FormModal from './form-modal'
import { getFormError } from '~/utils/error'

interface IButtonEdit extends IExpense {
  updateExpense: IUpdateExpense
}

export default function ButtonEdit ({ id, updateExpense, ...props }: IButtonEdit) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const toast = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const [channel, setChannel] = useState(props.channel)
  const [value, setValue] = useState<number | undefined>(props.value)
  const [date, setDate] = useState<Date | undefined>(props.date)

  const onSubmit = async () => {
    setIsSubmitting(true)
    try {
      const data = cleanDataBeforeSave(validateForm(channel, value, date))
      await updateExpense({ id, ...data })
      onClose()
      toast(getToastOk('Edited', 'The expense item has been updated.'))
    } catch (e) {
      toast(
        getToastError(
          'Error',
          getFormError(e, 'Failed to update the expense item. Please try again later or contact support.')
        )
      )
    }
    setIsSubmitting(false)
  }

  return (
    <>
      <Button
        variant='link'
        leftIcon={<EditIcon />}
        onClick={onOpen}
      >
        Edit
      </Button>
      <FormModal
        date={date}
        value={value}
        channel={channel}
        setDate={setDate}
        setValue={setValue}
        setChannel={setChannel}
        isOpen={isOpen}
        onCancel={onClose}
        onSubmit={onSubmit}
        isSubmitting={isSubmitting}
      />
    </>
  )
}
