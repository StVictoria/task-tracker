import { FC } from 'react'
import { Route, Routes } from 'react-router-dom'
import Auth from '../Auth'
import s from './App.module.sass'

const App: FC = () => {
  return (
    <div className={s.App}>
      <Routes>
        <Route path='/auth' element={<Auth />} />
        {/* <Route path="/account" element={ <Account/> } /> */}
      </Routes>
    </div>
  )
}

export default App
