import { Button } from '@mui/material'
import { FC } from 'react'
import s from './styles.module.sass'

const Auth: FC = () => {
  return (
    <div className={s.AuthWrapper}>
      <h1>Welcome to Task Tracker</h1>
      <p className={s.LoginDescr}>
        To start you need to log in with{' '}
        <a
          className={s.MetamaskLink}
          href='https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn'
          target='_blank'
          rel='noreferrer'
        >
          MetaMask
        </a>
      </p>
      <Button variant='contained'>Connect</Button>
    </div>
  )
}

export default Auth
