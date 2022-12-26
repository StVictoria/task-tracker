import { FC, useEffect } from 'react'
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom'
import Auth from './Auth'
import s from './App.module.sass'
import Main from './Main'
import { $account, getAccountFx } from '../effector/auth'
import { useStore } from 'effector-react'

const App: FC = () => {
  const account = useStore($account)

  const navigate = useNavigate()

  useEffect(() => {
    if (!window.ethereum) {
      navigate('/auth')
    } else {
      getAccountFx()
    }
  }, [])

  useEffect(() => {
    if (account) navigate('/auth')
  }, [account])

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
