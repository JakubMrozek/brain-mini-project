import { cleanDataBeforeSave, type IInsertExpense } from '~/utils/db'
import { useState } from 'react'
import { useDisclosure, Button, useToast } from '@chakra-ui/react'
import { AddIcon } from '@chakra-ui/icons'
import { getToastError, getToastOk } from '~/utils/notification'
import { validateForm } from '~/utils/validate'
import FormModal from './form-modal'
import { getFormError } from '~/utils/error'

interface IButtonAdd {
  insertExpense: IInsertExpense
}

export default function ButtonAdd ({ insertExpense }: IButtonAdd) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const toast = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const [channel, setChannel] = useState('fb')
  const [value, setValue] = useState<number>()
  const [date, setDate] = useState<Date | undefined>(new Date())

  const resetToDefault = () => {
    setChannel('fb')
    setValue(undefined)
    setDate(new Date())
  }

  const onCancel = () => {
    resetToDefault()
    onClose()
  }

  const onSubmit = async () => {
    setIsSubmitting(true)
    try {
      const data = cleanDataBeforeSave(validateForm(channel, value, date))
      await insertExpense(data)
      resetToDefault()
      onClose()
      toast(getToastOk('Created', 'A new expense item has been created.'))
    } catch (e) {
      toast(
        getToastError(
          'Error',
          getFormError(e, 'Failed to insert the expense item. Please try again later or contact support.')
        )
      )
    }
    setIsSubmitting(false)
  }

  return (
    <>
      <Button
        colorScheme='teal'
        leftIcon={<AddIcon />}
        onClick={onOpen}
        borderRadius={10}
      >
        Add Expense
      </Button>
      <FormModal
        date={date}
        value={value}
        channel={channel}
        setDate={setDate}
        setValue={setValue}
        setChannel={setChannel}
        isOpen={isOpen}
        onCancel={onCancel}
        onSubmit={onSubmit}
        isSubmitting={isSubmitting}
      />
    </>
  )
}
