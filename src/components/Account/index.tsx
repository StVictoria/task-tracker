import { useStore } from 'effector-react'
import { FC } from 'react'
import { $bank } from '../../effector/userInfo'
import SectionTitle from '../_common/SectionTitle'
import s from './styles.module.sass'

const Account: FC = () => {
  const bank = useStore($bank)

  return (
    <div className={s.AccountWrapper}>
      <SectionTitle title='Account' />
      <p>Total: {bank}</p>
    </div>
  )
}

export default Account
