import { Paper } from '@mui/material'
import { FC } from 'react'
import s from './styles.module.sass'
import { $myList, IToDo } from '../../models/userInfo'
import { useStore } from 'effector-react'
import ToDoForm from '../ToDoForm'
import ToDo from '../_common/ToDo'
import SectionTitle from '../_common/SectionTitle'

const MyList: FC = () => {
  const myList = useStore($myList)

  const renderList = (list: any) =>
    list.map((item: IToDo) => (
      <ToDo
        key={item.id}
        id={item.id}
        title={item.title}
        coins={+(item.coins)}
        isUseful={item.useful}
      />
    ))
  return (
    <>
      <SectionTitle title='My List' />
      <div className={s.myList_content}>
        <ToDoForm />
        {myList.length !== 0 ? (
          <Paper className={s.myList}>{renderList(myList)}</Paper>
        ) : (
          <p className={s.myList_noToDos}>You don't have any to do yet</p>
        )}
      </div>
    </>
  )
}

export default MyList
