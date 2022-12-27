import { FC, useEffect } from 'react'
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom'
import Auth from './Auth'
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
    if (!account) navigate('/auth')
  }, [account])

  return (
    <>
      <Routes>
        <Route index element={<Main />} />
        <Route path='auth' element={<Auth />} />
        <Route path='*' element={<Navigate replace to='/' />} />
      </Routes>
    </>
  )
}

export default App
