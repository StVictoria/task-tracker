import { List, Paper } from '@mui/material'
import { useStore } from 'effector-react'
import { FC } from 'react'
import { $bank, $history, IToDo } from '../../models/userInfo'
import SectionTitle from '../_common/SectionTitle'
import ToDo from '../_common/ToDo'
import s from './styles.module.sass'

const Account: FC = () => {
  const bank = useStore($bank)
  const history = useStore($history)

  const renderHistory = () =>
    history.map((item: IToDo) => (
      <ToDo
        isHistoryItem
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
      <h3 className={s.account_bank}>
        <span className={s.account_bankInfo}>In bank:</span> {bank} coins
      </h3>

      <Paper className={s.account_historyWrapper}>
        {history.length ? (
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
