import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material'
import { FC } from 'react'
import { Route, Routes } from 'react-router-dom'
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
  // const navigate= useNavigate()
  // const noAuth = true
  // useEffect(() => {
  //   if (noAuth) navigate('/auth')
  // }, [])

  const renderMenu = () =>
    menu.map((item: IMenu) => (
      <ListItem key={item.id} disablePadding>
        <ListItemButton>
            <item.icon />
          <ListItemText primary={item.title} />
        </ListItemButton>
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
        <List>{renderMenu()}</List>
      </Drawer>
      <Routes>
        <Route index element={<Account />} />
      </Routes>
    </div>
  )
}

export default Main
