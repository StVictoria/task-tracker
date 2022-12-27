import { FC, useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu'
import s from './styles.module.sass'
import Logo from '../../../../assets/logo.svg'
import { Drawer, IconButton } from '@mui/material'

interface IMobileMenu {
  children: any
}

const MobileMenu: FC<IMobileMenu> = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <div className={s.menuWrapper}>
      <div className={s.menuContainer}>
        <div className={s.menuLogoWrapper}>
          <img src={Logo} className={s.logoMobile} alt='Task Tracker' />
        </div>
        <IconButton onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          <MenuIcon className={s.menuIcon} />
        </IconButton>
      </div>
      <Drawer
        anchor='top'
        variant='persistent'
        open={isMobileMenuOpen}
        className={s.menu}
      >
        {children}
      </Drawer>
    </div>
  )
}

export default MobileMenu
