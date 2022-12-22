import { FC } from 'react'
import { Drawer, List, ListItem, ListItemButton } from '@mui/material'
import { IMenu, menu } from '../../static/menu'
import s from './styles.module.sass'

interface ISidebar {
  currentSection: string
  setCurrentSection: (currentSection: string) => void
}

const Sidebar: FC<ISidebar> = ({ currentSection, setCurrentSection }) => {
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
        <h1 className={s.logo}>Task Tracker</h1>
        <div className={s.divider} />
        <List>{renderMenu()}</List>
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
