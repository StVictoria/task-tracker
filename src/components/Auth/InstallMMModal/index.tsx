import { Button } from '@mui/material'
import { FC } from 'react'
import MMTooltip from '../../_common/MMToltip'
import Modal from '../../_common/Modal'
import s from '../styles.module.sass'

interface IInstallMMModal {
  isOpen: boolean
  onClose: () => void
}

const InstallMMModal: FC<IInstallMMModal> = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen}>
      <div className={s.modalText}>
        <div className={s.aboutMM}>
          <p>This app uses MetaMask as login service.</p>
          <MMTooltip />
        </div>
        <p>
          Please{' '}
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
      </div>
      <Button fullWidth variant='outlined' onClick={onClose}>
        OK
      </Button>
    </Modal>
  )
}

export default InstallMMModal
