import { FC, useState } from 'react'
import Account from '../Account'
import MyList from '../MyList'
import Sidebar from '../Sidebar'
import s from './styles.module.sass'

const Main: FC = () => {
  const [currentSection, setCurrentSection] = useState('account')

  return (
    <>
      <Sidebar
        currentSection={currentSection}
        setCurrentSection={setCurrentSection}
      />
      <main className={s.main}>
        {currentSection === 'account' && <Account />}
        {currentSection === 'my-list' && <MyList />}
        {/* {currentSection === 'suggestions' && <Suggestions />} */}
      </main>
    </>
  )
}

export default Main

