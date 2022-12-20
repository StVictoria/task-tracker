import { Drawer, List, ListItem, ListItemButton } from '@mui/material'
import { FC } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { IMenu, menu } from '../../static/menu'
import Account from '../Account'
import s from './styles.module.sass'

const Main: FC = () => {
  const location = useLocation()

  // const navigate= useNavigate()
  // const noAuth = true
  // useEffect(() => {
  //   if (noAuth) navigate('/auth')
  // }, [])

  const renderMenu = () =>
    menu.map((item: IMenu) => (
      <ListItem
        key={item.id}
        disablePadding
        selected={item.to === location.pathname}
        className={s.SidebatListItem}
      >
        <ListItemButton
          component={() => (
            <a href={item.to} className={s.SidebarListItemLink}>
              <item.icon color='primary' />
              <p className={s.SidebarItemTitle}>{item.title}</p>
            </a>
          )}
        />
      </ListItem>
    ))

  return (
    <div>
      <Drawer
        anchor='left'
        variant='persistent'
        open={true}
        className={s.Sidebar}
      >
        <div>
          <h2 className={s.Logo}>Task Tracker</h2>
          <div className={s.SidebarDivider} />
          <List>{renderMenu()}</List>
        </div>
        <footer className={s.AuthorInfo}>
          Crafted by{' '}
          <a href='https://github.com/StVictoria' className={s.AuthorLink}>
            StVictoria
          </a>
          , 2022
        </footer>
      </Drawer>
      <Routes>
        <Route index element={<Account />} />
      </Routes>
    </div>
  )
}

export default Main