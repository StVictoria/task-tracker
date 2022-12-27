import { Button } from '@mui/material'
import { FC } from 'react'
import Modal from '../../_common/Modal'
import s from '../styles.module.sass'

interface IErrorModal {
  isOpen: boolean
  onClose: () => void
}

const ErrorModal: FC<IErrorModal> = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen}>
      <p className={s.modalText}>
        Open your MetaMask to complete authentication and click "connect" again
      </p>
      <Button fullWidth variant='outlined' onClick={onClose}>
        OK
      </Button>
    </Modal>
  )
}

export default ErrorModal
