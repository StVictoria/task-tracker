import { Checkbox, IconButton } from '@mui/material'
import clsx from 'clsx'
import { FC, memo, useState } from 'react'
import s from './styles.module.sass'
import DeleteIcon from '@mui/icons-material/Delete'
import { useStore } from 'effector-react'
import {
  $bank,
  $myList,
  IToDo,
  setBank,
  setMyList,
} from '../../../effector/userInfo'
import ConfirmModal from './ConfirmModal'

interface IToDoProps {
  noCheckbox?: boolean
  noDelete?: boolean
  id: number
  isUseful: boolean
  coins: number
  title: string
}

const ToDo: FC<IToDoProps> = ({
  noCheckbox,
  noDelete,
  id,
  isUseful,
  coins,
  title,
}) => {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
  const [isCheckModalOpen, setIsCheckModalOpen] = useState(false)

  const myList = useStore($myList)
  const bank = useStore($bank)

  const isNotEnoughMoney = !isUseful && bank - coins < 0

  const handleDeleteToDo = () => {
    setIsDeleteModalOpen(true)
  }

  const handleCheckToDo = () => {
    setBank(isUseful ? bank + coins : bank - coins)
    setIsDeleteModalOpen(false)
    const newList: IToDo[] = myList.filter((item) => item.id !== id)
    setMyList(newList)
  }

  const onDelete = () => {
    const newList: IToDo[] = myList.filter((item) => item.id !== id)
    setMyList(newList)
    setIsDeleteModalOpen(false)
  }

  return (
    <div className={s.todo}>
      <div
        className={s.todo_leftSide}
        title={isNotEnoughMoney ? 'Not enough money' : undefined}
      >
        {!noCheckbox && (
          <Checkbox
            disabled={isNotEnoughMoney}
            checked={false}
            onChange={() => setIsCheckModalOpen(true)}
          />
        )}
        <p
          className={`${isNotEnoughMoney ? s.todo_titleDisabled : ''}`}
          title={title}
        >
          {title}
        </p>
      </div>

      <p
        className={clsx(s.todo_coins, {
          [s.notUseful]: !isUseful,
          [s.disabled]: isNotEnoughMoney,
        })}
      >
        {isUseful ? '+' : '-'}
        {coins}
      </p>
      {!noDelete && (
        <IconButton aria-label='delete' onClick={handleDeleteToDo}>
          <DeleteIcon />
        </IconButton>
      )}

      <ConfirmModal
        text='Are you sure you want to delete todo?'
        onSubmit={onDelete}
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
      />
      <ConfirmModal
        text='Have you really done this?'
        onSubmit={handleCheckToDo}
        isOpen={isCheckModalOpen}
        onClose={() => setIsCheckModalOpen(false)}
      />
    </div>
  )
}

export default memo(ToDo)
