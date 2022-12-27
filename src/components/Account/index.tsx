import { List, Paper } from '@mui/material'
import { useStore } from 'effector-react'
import { FC } from 'react'
import { $bank, $myList, IToDo } from '../../effector/userInfo'
import SectionTitle from '../_common/SectionTitle'
import ToDo from '../_common/ToDo'
import s from './styles.module.sass'

const Account: FC = () => {
  const bank = useStore($bank)
  const list = useStore($myList)

  const renderHistory = () =>
    list.map((item: IToDo) => (
      <ToDo
        noCheckbox
        noDelete
        key={item.id}
        id={item.id}
        title={item.title}
        coins={+item.coins}
        isUseful={item.useful}
      />
    ))

  return (
    <>
      <SectionTitle title='Account' />
      <h3>
        <span className={s.account_bankInfo}>In bank:</span> {bank} coins
      </h3>

      <Paper className={s.account_historyWrapper}>
        {false ? (
          <>
            <h3 className={s.account_historyTitle}>History</h3>
            <List className={s.account_history}>{renderHistory()}</List>
          </>
        ) : (
          <p className={s.account_noHistory}>You don't have history yet</p>
        )}
      </Paper>
    </>
  )
}

export default Account
