import { Drawer, List, ListItem, ListItemButton } from '@mui/material'
import { FC, useState } from 'react'
import { IMenu, menu } from '../../static/menu'
import Account from '../Account'
import MyList from '../MyList'
import s from './styles.module.sass'

const Main: FC = () => {
  const [currentSection, setCurrentSection] = useState('account')

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
        selected={item.to === currentSection}
        className={s.sidebarListItem}
        onClick={() => setCurrentSection(item.to)}
      >
        <ListItemButton>
          <item.icon color='primary' />
          <p className={s.sidebarLinkTitle}>{item.title}</p>
        </ListItemButton>
      </ListItem>
    ))

  return (
    <>
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
          <a href='https://github.com/StVictoria' className={s.authorLink}>
            StVictoria
          </a>
          , 2022
        </footer>
      </Drawer>
      <main className={s.main}>
        {currentSection === 'account' && <Account />}
        {currentSection === 'my-list' && <MyList />}
        {/* {currentSection === 'suggestions' && <Suggestions />} */}
      </main>
    </>
  )
}

export default Main
