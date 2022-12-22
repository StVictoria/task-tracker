import { Button, FormControlLabel, Paper } from '@mui/material'
import { FC } from 'react'
import Input from '../common/Input'
import s from './styles.module.sass'
import { Checkbox } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'

const ToDoForm: FC = () => {
  return (
    <Paper>
      <form className={s.formWrapper}>
        <div className={s.inputs}>
          <div className={`${s.inputWrapper} ${s.todoNameField}`}>
            <Input label='Todo Name' maxLength={120} />
          </div>
          <div className={`${s.inputWrapper} ${s.coinsField}`}>
            <Input label='Coins' maxLength={5} />
          </div>
          <div className={`${s.isUsefulField} ${s.inputWrapper}`}>
            <FormControlLabel className={s.checkboxWrapper}
              control={<Checkbox checked={true} />}
              label='Is it useful?'
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
