import { Checkbox, IconButton } from '@mui/material'
import clsx from 'clsx'
import { FC, memo, useState } from 'react'
import s from './styles.module.sass'
import DeleteIcon from '@mui/icons-material/Delete'
import { useStore } from 'effector-react'
import {
  $bank,
  $history,
  $myList,
  IToDo,
  setBank,
  setHistory,
  setMyList,
} from '../../../models/userInfo'
import ConfirmModal from './ConfirmModal'
import {
  USER_BANK,
  USER_HISTORY,
  USER_LIST,
} from '../../../constants/LOCALSTORAGE_KEYS'

interface IToDoProps {
  isHistoryItem?: boolean
  id: number
  isUseful: boolean
  coins: number
  title: string
}

const ToDo: FC<IToDoProps> = ({
  isHistoryItem,
  id,
  isUseful,
  coins,
  title,
}) => {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState<boolean>(false)
  const [isCheckModalOpen, setIsCheckModalOpen] = useState<boolean>(false)

  const myList: IToDo[] = useStore($myList)
  const history: IToDo[] = useStore($history)
  const bank: number = useStore($bank)

  const isNotEnoughMoney: boolean = !isUseful && bank - coins < 0

  const handleDeleteToDo = () => {
    setIsDeleteModalOpen(true)
  }

  const handleCheckToDo = () => {
    // set bank
    const newBank = isUseful ? bank + coins : bank - coins
    localStorage.setItem(USER_BANK, newBank.toString())
    setBank(newBank)

    // close modal
    setIsDeleteModalOpen(false)

    // update user list
    const newList: IToDo[] = myList.filter((item) => item.id !== id)
    localStorage.setItem(USER_LIST, JSON.stringify(newList))

    // update history
    const removedItem = myList.filter((item) => item.id === id)[0]
    const newHistory = removedItem
      ? [removedItem, ...history]
      : [...history]
    localStorage.setItem(USER_HISTORY, JSON.stringify(newHistory))
    setMyList(newList)
    setHistory(newHistory)
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
        title={isNotEnoughMoney && !isHistoryItem ? 'Not enough money' : undefined}
      >
        {!isHistoryItem && (
          <Checkbox
            disabled={isNotEnoughMoney}
            checked={false}
            onChange={() => setIsCheckModalOpen(true)}
          />
        )}
        <p
          className={`${isNotEnoughMoney && !isHistoryItem ? s.todo_titleDisabled : ''}`}
          title={title}
        >
          {title}
        </p>
      </div>

      <p
        className={clsx(s.todo_coins, {
          [s.notUseful]: !isUseful,
          [s.disabled]: isNotEnoughMoney && !isHistoryItem,
        })}
      >
        {isUseful ? '+' : '-'}
        {coins}
      </p>
      {!isHistoryItem && (
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
