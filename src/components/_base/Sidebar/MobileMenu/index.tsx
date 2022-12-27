import { FC } from 'react'
import MenuIcon from '@mui/icons-material/Menu'
import s from './styles.module.sass'
import Logo from '../../../../assets/logo.svg'
import { Drawer, IconButton } from '@mui/material'

interface IMobileMenu {
  isOpen: boolean
  children: any
  toggleMenu: () => void
}

const MobileMenu: FC<IMobileMenu> = ({ isOpen, children, toggleMenu }) => {
  return (
    <div className={s.mobileMenu_wrapper}>
      <div className={s.mobileMenu_container}>
        <div>
          <img src={Logo} className={s.mobileMenu_logo} alt='Task Tracker' />
        </div>
        <IconButton onClick={toggleMenu}>
          <MenuIcon className={s.mobileMenu_menuIcon} />
        </IconButton>
      </div>
      <Drawer
        anchor='top'
        variant='persistent'
        open={isOpen}
        className={s.mobileMenu}
      >
        {children}
      </Drawer>
    </div>
  )
}

export default MobileMenu
