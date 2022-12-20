import { FC } from 'react'
import s from './styles.module.sass'

const Account: FC = () => {
  return <div className={s.AccountWrapper}>
    <h2>Account</h2>
    <p>Total: 1200</p>
  </div>
}

export default Account
