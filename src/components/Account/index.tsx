import { FC } from 'react'
import SectionTitle from '../SectionTitle'
import s from './styles.module.sass'

const Account: FC = () => {
  return <div className={s.AccountWrapper}>
    <SectionTitle title='Account' />
    <p>Total: 1200</p>
  </div>
}

export default Account
