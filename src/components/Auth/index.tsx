import { Button } from '@mui/material'
import { useStore } from 'effector-react'
import { ethers } from 'ethers'
import { FC, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { $account, getAccountFx } from '../../models/auth'
import MMTooltip from '../_common/MMToltip'
import ErrorModal from './ErrorModal'
import InstallMMModal from './InstallMMModal'
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
      getAccountFx()
    } catch (e) {
      setIsErrorModalOpen(true)
    }
  }

  return (
    <div className={s.auth_wrapper}>
      <h1>Welcome to Task Tracker</h1>
      <div className={s.auth_loginDescrWrapper}>
        <p className={s.auth_loginDescr}>
          To start you need to log in with{' '}
          <a
            className={s.auth_metamaskLink}
            href='https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn'
            target='_blank'
            rel='noreferrer'
          >
            MetaMask
          </a>
        </p>
        <MMTooltip />
      </div>
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
      <InstallMMModal
        isOpen={isInstallMMModalOpen}
        onClose={() => setIsInstallMMModalOpen(false)}
      />
      <ErrorModal
        isOpen={isErrorModalOpen}
        onClose={() => setIsErrorModalOpen(false)}
      />
    </div>
  )
}

export default Auth
