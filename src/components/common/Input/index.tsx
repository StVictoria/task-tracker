import { TextField } from '@mui/material'
import { FC } from 'react'

interface IInput {
  label: string
  maxLength?: number
  minLength?: number
}

const Input: FC<IInput> = ({ label, ...inputProps }) => {
  return (
    <TextField
      label={label}
      variant='outlined'
      size='small'
      fullWidth
      inputProps={{ ...inputProps }}
    />
  )
}

export default Input
