import { Button } from '@mui/material'
import { useStore } from 'effector-react'
import { ethers } from 'ethers'
import { FC, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { $account, getAccountFx } from '../../effector/auth'
import Modal from '../_common/Modal'
import s from './styles.module.sass'

const Auth: FC = () => {
  const [isInstallMMModalOpen, setIsInstallMMModalOpen] = useState(false)
  const [isErrorModalOpen, setIsErrorModalOpen] = useState(false)

  const account = useStore($account)

  const navigate = useNavigate()

  useEffect(() => {
    if (!window.ethereum) {
      setIsInstallMMModalOpen(true)
    } else {
      getAccountFx()
    }
  }, [])

  useEffect(() => {
    if (account) navigate('/')
  }, [account])

  

  const connectToMetaMask = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    try {
      await provider.send('eth_requestAccounts', [])
      navigate('/')
    } catch (e) {
      setIsErrorModalOpen(true)
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
            ? connectToMetaMask
            : () => setIsInstallMMModalOpen(true)
        }
      >
        Connect
      </Button>
      <Modal isOpen={isInstallMMModalOpen}>
        <p className={s.modalText}>
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
          </a>{' '}
          and refresh the page before new try
        </p>
        <Button
          fullWidth
          variant='outlined'
          onClick={() => setIsInstallMMModalOpen(false)}
        >
          OK
        </Button>
      </Modal>
      <Modal isOpen={isErrorModalOpen}>
        <p className={s.modalText}>
          Open your MetaMask to complete authentication and click "connect"
          again
        </p>
        <Button
          fullWidth
          variant='outlined'
          onClick={() => setIsErrorModalOpen(false)}
        >
          OK
        </Button>
      </Modal>
    </div>
  )
}

export default Auth
