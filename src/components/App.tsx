import { FC, useEffect } from 'react'
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom'
import Auth from './Auth'
import Main from './Main'
import { $account, getAccountFx } from '../models/auth'
import { useStore } from 'effector-react'
import { USER_ID, USER_LIST } from '../constants/LOCALSTORAGE_VALUES'
import { IToDo, setMyList } from '../models/userInfo'

const App: FC = () => {
  // const account = useStore($account)

  // const navigate = useNavigate()

  // useEffect(() => {
  //   if (!window.ethereum) {
  //     navigate('/auth')
  //   } else {
  //     getAccountFx()
  //   }
  // }, [])

  // useEffect(() => {
  //   if (!account) navigate('/auth')
  // }, [account])

  useEffect(() => {
    if (localStorage.getItem(USER_LIST)) {
      const userList: IToDo[] = JSON.parse(
        localStorage.getItem(USER_LIST) || '[]'
      )
      setMyList(userList)
    }
  }, [])

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
