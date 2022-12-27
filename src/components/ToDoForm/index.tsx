import { Button, FormControlLabel, Paper } from '@mui/material'
import { FC } from 'react'
import Input from '../_common/Input'
import s from './styles.module.sass'
import { Checkbox } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import { useForm } from 'effector-forms'
import { todoForm, clearToDoForm } from '../../effector/todoForm'

const ToDoForm: FC = () => {
  const { fields, submit } = useForm(todoForm)

  const handleChange = (e: any, field: 'todoName' | 'coins' | 'isUseful') => {
    const { value } = e.target
    const trimmedValue = value.trimStart().replace(/ +(?= )/g, '')
    // strings
    if (field === 'todoName') {
      fields[field].onChange(trimmedValue)
    }
    // numbers
    if (field === 'coins') {
      if (value.match('^[0-9]+$') || value.length < 1)
        fields[field].onChange(trimmedValue)
    }
    // booleans
    if (field === 'isUseful') {
      fields[field].onChange(!fields[field].value)
    }
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()
    submit()
  }

  return (
    <Paper>
      <form className={s.todoForm_wrapper} onSubmit={handleSubmit}>
        <div className={s.todoForm_inputs}>
          <div className={`${s.todoForm_inputWrapper} ${s.todoForm_nameField}`}>
            <Input
              label='Todo Name'
              name='todoName'
              value={fields.todoName.value}
              error={fields.todoName.firstError?.errorText}
              maxLength={120}
              onChange={(e) => handleChange(e, 'todoName')}
            />
          </div>
          <div
            className={`${s.todoForm_inputWrapper} ${s.todoForm_coinsField}`}
          >
            <Input
              label='Coins'
              name='coins'
              value={fields.coins.value}
              error={fields.coins.firstError?.errorText}
              maxLength={5}
              onChange={(e) => handleChange(e, 'coins')}
            />
          </div>
          <div className={s.todoForm_inputWrapper}>
            <FormControlLabel
              label='Is it useful?'
              className={s.todoForm_checkboxWrapper}
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

        <footer className={s.todoForm_actions}>
          <Button onClick={() => clearToDoForm()}>Clear</Button>
          <Button variant='contained' startIcon={<AddIcon />} type='submit'>
            Add
          </Button>
        </footer>
      </form>
    </Paper>
  )
}

export default ToDoForm
