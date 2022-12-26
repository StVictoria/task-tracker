import { Button } from '@mui/material'
import { ethers } from 'ethers'
import { FC, useEffect, useState } from 'react'
import Modal from '../_common/Modal'
import s from './styles.module.sass'

const Auth: FC = () => {
  const [isInstallMMModalOpen, setIsInstallMMModalOpen] = useState(false)

  useEffect(() => {
    if (!window.ethereum) {
      setIsInstallMMModalOpen(true)
    } else {
      checkExistingAccount()
    }
  }, [])

  const checkExistingAccount = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const accounts = await provider.listAccounts()
    if (accounts[0]) {
      console.log('there is user')
    } else {
      console.log('no user')
    }
  }

  return (
    <div className={s.authWrapper}>
      <h1>Welcome to Task Tracker</h1>
      <p className={s.loginDescr}>
        To start you need to log in with{' '}
        <a
          className={s.metamaskLink}
          href='https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn'
          target='_blank'
          rel='noreferrer'
        >
          MetaMask
        </a>
      </p>
      <Button
        variant='contained'
        onClick={
          window.ethereum
            ? () => console.log('connect')
            : () => setIsInstallMMModalOpen(true)
        }
      >
        Connect
      </Button>
      <Modal isOpen={isInstallMMModalOpen}>
        <p className={s.installMMModalText}>
          It seems you still don't have MetaMask. <br /> Please{' '}
          <a
            href='https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn'
            target='_blank'
            rel='noreferrer'
            className={s.metamaskModalLink}
          >
            <b>
              <u>install it</u>
            </b>
          </a> and refresh the page before new try
        </p>
        <Button
          fullWidth
          variant='outlined'
          onClick={() => setIsInstallMMModalOpen(false)}
        >
          OK
        </Button>
      </Modal>
    </div>
  )
}

export default Auth
