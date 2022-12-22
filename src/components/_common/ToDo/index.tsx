import { Checkbox, IconButton } from '@mui/material'
import clsx from 'clsx'
import { FC, memo, useState } from 'react'
import s from './styles.module.sass'
import DeleteIcon from '@mui/icons-material/Delete'
import { useStore } from 'effector-react'
import { $myList, IToDo, setMyList } from '../../../effector/userInfo'
import Modal from '../Modal'

interface IToDoProps {
  id: number
  isUseful: boolean
  coins: string | number
  title: string
}

const ToDo: FC<IToDoProps> = ({ id, isUseful, coins, title }) => {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
  const [isCheckModalOpen, setIsCheckModalOpen] = useState(false)

  const myList = useStore($myList)

  const handleDeleteToDo = () => {
    setIsDeleteModalOpen(true)
  }

  const onDelete = () => {
    const newList: IToDo[] = myList.filter((item) => item.id !== id)
    setMyList(newList)
    setIsDeleteModalOpen(false)
  }

  return (
    <div className={s.listItem}>
      <div className={s.listItemLeft}>
        <Checkbox checked={false} onChange={() => setIsCheckModalOpen(true)} />
        <p title={title}>{title}</p>
      </div>

      <p className={clsx(s.coins, { [s.notUseful]: !isUseful })}>
        {isUseful ? '+' : '-'}
        {coins}
      </p>
      <IconButton aria-label='delete' onClick={handleDeleteToDo}>
        <DeleteIcon />
      </IconButton>

      <Modal
        text='Are you sure you want to delete todo?'
        onSubmit={onDelete}
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
      />
      <Modal
        text='Have you really done this?'
        onSubmit={() => {}}
        isOpen={isCheckModalOpen}
        onClose={() => setIsCheckModalOpen(false)}
      />
    </div>
  )
}

export default memo(ToDo)
