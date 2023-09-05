import type { IDeleteExpense } from '~/utils/db'
import { useRef } from 'react'
import { useDisclosure, Button, AlertDialog, AlertDialogOverlay, AlertDialogContent, AlertDialogBody, AlertDialogHeader, AlertDialogFooter, useToast } from '@chakra-ui/react'
import { DeleteIcon } from '@chakra-ui/icons'
import { getToastError, getToastOk } from '~/utils/notification'

interface IButtonDelete {
  id: string
  deleteExpense: IDeleteExpense
}

export default function ButtonDelete ({ id, deleteExpense }: IButtonDelete) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const cancelRef = useRef<HTMLButtonElement>(null)
  const toast = useToast()

  const onDelete = async () => {
    try {
      await deleteExpense(id)
      onClose()
      toast(getToastOk('Deleted', 'The expense item has been deleted.'))
    } catch (err) {
      toast(getToastError('Error', 'Failed to delete the expense item. Please try again later or contact support.'))
    }
  }
  return (
    <>
      <Button
        variant='link'
        leftIcon={<DeleteIcon />}
        onClick={onOpen}
      >
        Delete
      </Button>
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader
              fontSize='lg'
              fontWeight='bold'
            >
              Delete Expense
            </AlertDialogHeader>
            <AlertDialogBody>
              Are you sure? You cannot undo this action afterwards.
            </AlertDialogBody>
            <AlertDialogFooter>
              <Button
                ref={cancelRef}
                onClick={onClose}
              >
                Cancel
              </Button>
              <Button
                colorScheme='red'
                onClick={() => void onDelete()} ml={3}
              >
                Delete
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  )
}

