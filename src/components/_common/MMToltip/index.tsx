import { FC } from 'react'
import s from './styles.module.sass'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline'

const MMTooltip: FC = () => {
  return (
    <div className={s.mmTooltip_wrapper}>
      <div className={s.mmTooltip_icon}>
        <HelpOutlineIcon color='primary' />
      </div>
      <div className={s.mmTooltip_text}>
        <p>
          We don't use any account information other than your address and do
          not initiate any transactions.
        </p>
        <p>
          The use of MetaMask in this case is aimed at simplifying the login
          system.
        </p>
        <p>
          <b>
            <u>Important:</u>
          </b>{' '}
          if you have forgotten the data from the MetaMask, you won't regain
          access to your account
        </p>
      </div>
    </div>
  )
}

export default MMTooltip
