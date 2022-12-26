import clsx from 'clsx'
import { FC } from 'react'
import s from './styles.module.sass'

interface IModal {
  isOpen: boolean
  children: any
}

const Modal: FC<IModal> = ({ isOpen, children }) => {
  return (
    <div className={clsx(s.modalWrapper, { [s.hidden]: !isOpen })}>
      <div className={s.modal}>{children}</div>
    </div>
  )
}

export default Modal
