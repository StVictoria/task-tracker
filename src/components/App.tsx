import { FC, useEffect } from 'react'
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom'
import Auth from './Auth'
import s from './App.module.sass'
import Main from './Main'
import { ethers } from 'ethers'

const App: FC = () => {
  const navigate = useNavigate()

  useEffect(() => {
    if (!window.ethereum) {
      navigate('/auth')
    } else {
      checkExistingAccount()
    }
  }, [])

  const checkExistingAccount = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const accounts = await provider.listAccounts()
    if (accounts[0]) {
      console.log('there is user')
    } else {
      navigate('/auth')
    }
  }

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
