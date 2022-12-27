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
    <div className={s.menuWrapper}>
      <div className={s.menuContainer}>
        <div className={s.menuLogoWrapper}>
          <img src={Logo} className={s.logoMobile} alt='Task Tracker' />
        </div>
        <IconButton onClick={toggleMenu}>
          <MenuIcon className={s.menuIcon} />
        </IconButton>
      </div>
      <Drawer
        anchor='top'
        variant='persistent'
        open={isOpen}
        className={s.menu}
      >
        {children}
      </Drawer>
    </div>
  )
}

export default MobileMenu
