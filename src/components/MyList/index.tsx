import { Checkbox, IconButton, Paper } from '@mui/material'
import React, { FC } from 'react'
import s from './styles.module.sass'
import DeleteIcon from '@mui/icons-material/Delete'
import clsx from 'clsx'
import SectionTitle from '../SectionTitle'

const todoList = [
  { id: 0, title: 'Buy food', useful: true, coins: 100 },
  { id: 1, title: 'Take a dog for a walk', useful: true, coins: 100 },
  { id: 2, title: 'Watch movie', useful: false, coins: 300 },
  { id: 3, title: 'Play with kids', useful: true, coins: 200 },
  { id: 4, title: 'Find a job', useful: true, coins: 2000 },
  {
    id: 5,
    title: 'Hang out Hang out Hang out Hang out Hang out Hang outHang out',
    useful: false,
    coins: 45000,
  },
]

const MyList: FC = () => {
  const renderList = (list: any) =>
    list.map((item: any) => (
      <div className={s.listItem}>
        <div className={s.listItemLeft}>
          <Checkbox />
          <p title={item.title}>{item.title}</p>
        </div>

        <p className={clsx(s.coins, { [s.notUseful]: !item.useful })}>
          {item.useful ? '+' : '-'}
          {item.coins}
        </p>
        <IconButton aria-label='delete'>
          <DeleteIcon />
        </IconButton>
      </div>
    ))
  return (
    <>
      <SectionTitle title='My List' />
      <Paper className={s.list}>{renderList(todoList)}</Paper>
    </>
  )
}

export default MyList
