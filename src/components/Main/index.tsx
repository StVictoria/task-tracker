import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material'
import { FC } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Account from '../Account'
import s from './styles.module.sass'
import InboxIcon from '@mui/icons-material/MoveToInbox'
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined'
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined'
import TipsAndUpdatesOutlinedIcon from '@mui/icons-material/TipsAndUpdatesOutlined'

interface IMenu {
  id: number
  title: string
  icon: any
  to: string
}

const menu: IMenu[] = [
  {
    id: 0,
    title: 'Account',
    icon: AccountBalanceWalletOutlinedIcon,
    to: '/account',
  },
  {
    id: 1,
    title: 'My to-do list',
    icon: FormatListBulletedOutlinedIcon,
    to: '/my-list',
  },
  {
    id: 2,
    title: 'Suggestions',
    icon: TipsAndUpdatesOutlinedIcon,
    to: '/suggestions',
  },
]

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
        ></ListItemButton>
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
          Crafted by <a href='https://github.com/StVictoria' className={s.AuthorLink}>StVictoria</a>,
          2022
        </footer>
      </Drawer>
      <Routes>
        <Route index element={<Account />} />
      </Routes>
    </div>
  )
}

export default Main
