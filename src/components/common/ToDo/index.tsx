import { Checkbox, IconButton } from '@mui/material'
import clsx from 'clsx'
import { FC, memo } from 'react'
import s from './styles.module.sass'
import DeleteIcon from '@mui/icons-material/Delete'
import { useStore } from 'effector-react'
import { $myList, IToDo, setMyList } from '../../../effector/userInfo'

interface IToDoProps {
  id: number
  isUseful: boolean
  coins: number
  title: string
}

const ToDo: FC<IToDoProps> = ({ id, isUseful, coins, title }) => {
  const myList = useStore($myList)

  const handleDeleteToDo = () => {
    const newList: IToDo[] = myList.filter((item) => item.id !== id)
    setMyList(newList)
  }

  return (
    <div className={s.listItem}>
      <div className={s.listItemLeft}>
        <Checkbox />
        <p title={title}>{title}</p>
      </div>

      <p className={clsx(s.coins, { [s.notUseful]: !isUseful })}>
        {isUseful ? '+' : '-'}
        {coins}
      </p>
      <IconButton aria-label='delete' onClick={handleDeleteToDo}>
        <DeleteIcon />
      </IconButton>
    </div>
  )
}

export default memo(ToDo)
