import { FC, useEffect, useState } from 'react'
import { Drawer, List, ListItem, ListItemButton } from '@mui/material'
import { IMenu, menu } from '../../../static/menu'
import s from './styles.module.sass'
import { useStore } from 'effector-react'
import { $account } from '../../../models/auth'
import { $bank } from '../../../models/userInfo'
import Logo from '../../../assets/logo.svg'
import MobileMenu from './MobileMenu'

interface ISidebar {
  currentSection: string
  setCurrentSection: (currentSection: string) => void
}

const Sidebar: FC<ISidebar> = ({ currentSection, setCurrentSection }) => {
  const [isMobile, setIsMobile] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const account = useStore($account)
  const bank = useStore($bank)

  useEffect(() => {
    if (document.documentElement.clientWidth < 960) {
      setIsMobile(true)
    }
  }, [])

  const renderMenu = () =>
    menu.map((item: IMenu) => (
      <ListItem
        key={item.id}
        disablePadding
        selected={item.to === currentSection}
        className={s.menu_listItem}
        onClick={() => {
          setIsMobileMenuOpen(false)
          setCurrentSection(item.to)
        }}
      >
        <ListItemButton className={s.menu_listItemButton}>
          <item.icon color='primary' className={s.menu_listItemIcon} />
          <p className={s.menu_listItemTitle}>{item.title}</p>
        </ListItemButton>
      </ListItem>
    ))

  const renderSidebarContent = () => (
    <>
      {!isMobile && (
        <div className={s.menu_logoWrapper}>
          <img src={Logo} className={s.menu_logo} alt='Task Tracker' />
        </div>
      )}

      <div className={s.menu_divider} />
      <div className={s.menu_userInfo}>
        {/* <p>Account: {account || 'user'}</p> */}
        <p>Bank: {bank}</p>
      </div>
      <div className={s.menu_divider} />
      <List className={s.menu_list}>{renderMenu()}</List>

      <footer className={s.menu_authorInfo}>
        Crafted by{' '}
        <a
          href='https://github.com/StVictoria'
          target='_blank'
          rel='noreferrer'
          className={s.menu_authorLink}
        >
          StVictoria
        </a>
        , 2022
      </footer>
    </>
  )

  return (
    <>
      <MobileMenu
        isOpen={isMobileMenuOpen}
        children={renderSidebarContent()}
        toggleMenu={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      />
      <Drawer anchor='left' variant='persistent' open={true} className={s.menu}>
        {renderSidebarContent()}
      </Drawer>
    </>
  )
}

export default Sidebar
