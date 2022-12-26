import { Button } from '@mui/material'
import { FC } from 'react'
import Modal from '../../Modal'
import s from '../styles.module.sass'

interface IConfirmModal {
  text: string
  isOpen: boolean
  onSubmit: () => void
  onClose: () => void
}

const ConfirmModal: FC<IConfirmModal> = ({
  text,
  isOpen,
  onSubmit,
  onClose,
}) => {
  return (
    <Modal isOpen={isOpen}>
      <p className={s.modalText}>{text}</p>
      <Button fullWidth variant='contained' onClick={onSubmit}>
        yes
      </Button>
      <Button fullWidth variant='outlined' onClick={onClose}>
        cancel
      </Button>
    </Modal>
  )
}

export default ConfirmModal
