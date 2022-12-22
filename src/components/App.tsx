import { FC } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Auth from './Auth'
import s from './App.module.sass'
import Main from './Main'

const App: FC = () => {
  return (
    <div className={s.App}>
      <Routes>
        <Route index element={<Main />} />
        <Route path='auth' element={<Auth />} />
        <Route path='*' element={<Navigate replace to='/' />} />
      </Routes>
    </div>
  )
}

export default App
