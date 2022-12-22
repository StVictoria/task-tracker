import { Button, FormControlLabel, Paper } from '@mui/material'
import { FC } from 'react'
import Input from '../common/Input'
import s from './styles.module.sass'
import { Checkbox } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import { useForm } from 'effector-forms'
import { todoForm } from '../../effector/todoForm'

const ToDoForm: FC = () => {
  const { fields } = useForm(todoForm)

  const handleChange = (e: any, field: 'todoName' | 'coins' | 'isUseful') => {
    const { value } = e.target
    // strings
    if (field === 'todoName') {
      fields[field].onChange(value)
    }
    // numbers
    if (field === 'coins') {
      fields[field].onChange(value)
    }
    // booleans
    if (field === 'isUseful') {
      fields[field].onChange(!fields[field].value)
    }
  }

  return (
    <Paper>
      <form className={s.formWrapper}>
        <div className={s.inputs}>
          <div className={`${s.inputWrapper} ${s.todoNameField}`}>
            <Input
              label='Todo Name'
              name='todoName'
              value={fields.todoName.value}
              maxLength={120}
              onChange={(e) => handleChange(e, 'todoName')}
            />
          </div>
          <div className={`${s.inputWrapper} ${s.coinsField}`}>
            <Input
              label='Coins'
              name='coins'
              value={fields.coins.value}
              maxLength={5}
              onChange={(e) => handleChange(e, 'coins')}
            />
          </div>
          <div className={`${s.isUsefulField} ${s.inputWrapper}`}>
            <FormControlLabel
              label='Is it useful?'
              className={s.checkboxWrapper}
              control={
                <Checkbox
                  checked={fields.isUseful.value}
                  name='isUseful'
                  onChange={(e) => handleChange(e, 'isUseful')}
                />
              }
            />
          </div>
        </div>

        <footer className={s.actions}>
          <Button>Clear</Button>
          <Button variant='contained' startIcon={<AddIcon />}>
            Add
          </Button>
        </footer>
      </form>
    </Paper>
  )
}

export default ToDoForm
