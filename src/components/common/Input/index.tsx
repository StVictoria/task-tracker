import { TextField } from '@mui/material'
import { FC } from 'react'

interface IInput {
  label: string
  name: string
  value: any
  maxLength?: number
  minLength?: number
  onChange: (e: any) => void
}

const Input: FC<IInput> = ({ label, name, value, onChange, ...inputProps }) => {
  return (
    <TextField
      label={label}
      variant='outlined'
      size='small'
      name={name}
      value={value}
      fullWidth
      onChange={onChange}
      inputProps={{ ...inputProps }}
    />
  )
}

export default Input
