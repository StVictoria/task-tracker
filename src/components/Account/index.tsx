import { useStore } from 'effector-react'
import { FC } from 'react'
import { $account } from '../../effector/userInfo'
import SectionTitle from '../SectionTitle'
import s from './styles.module.sass'

const Account: FC = () => {
  const account = useStore($account)

  return (
    <div className={s.AccountWrapper}>
      <SectionTitle title='Account' />
      <p>Total: {account}</p>
    </div>
  )
}

export default Account
