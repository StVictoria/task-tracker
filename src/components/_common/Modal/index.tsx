import { Button } from '@mui/material'
import clsx from 'clsx'
import { FC } from 'react'
import s from './styles.module.sass'

interface IModal {
  text: string
  isOpen: boolean
  onSubmit: () => void
  onClose: () => void
}

const Modal: FC<IModal> = ({ text, isOpen, onSubmit, onClose }) => {
  return (
    <div className={clsx(s.modalWrapper, { [s.hidden]: !isOpen })}>
      <div className={s.modal}>
        <p className={s.text}>{text}</p>
        <Button fullWidth variant="contained" onClick={onSubmit}>yes</Button>
        <Button fullWidth variant="outlined" onClick={onClose}>cancel</Button>
      </div>
    </div>
  )
}

export default Modal
