import { FC, useEffect } from 'react'
import { Drawer, List, ListItem, ListItemButton } from '@mui/material'
import { IMenu, menu } from '../../static/menu'
import s from './styles.module.sass'
import { useStore } from 'effector-react'
import { $account } from '../../effector/auth'
import { $bank } from '../../effector/userInfo'
import Logo from '../../assets/logo.svg'

interface ISidebar {
  currentSection: string
  setCurrentSection: (currentSection: string) => void
}

const Sidebar: FC<ISidebar> = ({ currentSection, setCurrentSection }) => {
  const account = useStore($account)
  const bank = useStore($bank)

  const renderMenu = () =>
    menu.map((item: IMenu) => (
      <ListItem
        key={item.id}
        disablePadding
        selected={item.to === currentSection}
        className={s.sidebarListItem}
        onClick={() => setCurrentSection(item.to)}
      >
        <ListItemButton className={s.sidebarButton}>
          <item.icon color='primary' />
          <p className={s.sidebarLinkTitle}>{item.title}</p>
        </ListItemButton>
      </ListItem>
    ))

  return (
    <Drawer
      anchor='left'
      variant='persistent'
      open={true}
      className={s.sidebar}
    >
      <div>
        <div className={s.logoWrapper}>
          <img src={Logo} className={s.logo} alt='Task Tracker' />
        </div>

        <div className={s.divider} />
        <div className={s.userInfo}>
          <p>Account: {account}</p>
          <p>Bank: {bank}</p>
        </div>
        <div className={s.divider} />
        <List className={s.sidebarList}>{renderMenu()}</List>
      </div>
      <footer className={s.authorInfo}>
        Crafted by{' '}
        <a
          href='https://github.com/StVictoria'
          target='_blank'
          rel='noreferrer'
          className={s.authorLink}
        >
          StVictoria
        </a>
        , 2022
      </footer>
    </Drawer>
  )
}

export default Sidebar
