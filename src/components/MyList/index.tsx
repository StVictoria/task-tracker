import { Paper } from '@mui/material'
import { FC } from 'react'
import s from './styles.module.sass'
import SectionTitle from '../common/SectionTitle'
import ToDo from '../common/ToDo'
import { $myList, IToDo } from '../../effector/userInfo'
import { useStore } from 'effector-react'
import ToDoForm from '../ToDoForm'

const MyList: FC = () => {
  const myList = useStore($myList)

  const renderList = (list: any) =>
    list.map((item: IToDo) => (
      <ToDo
        id={item.id}
        title={item.title}
        coins={item.coins}
        isUseful={item.useful}
      />
    ))
  return (
    <>
      <SectionTitle title='My List' />
      <div className={s.contentWrapper}>
        <ToDoForm />
        <Paper className={s.list}>{renderList(myList)}</Paper>
      </div>
    </>
  )
}

export default MyList
