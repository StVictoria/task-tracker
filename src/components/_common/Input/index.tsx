import { TextField } from '@mui/material'
import { FC } from 'react'

interface IInput {
  label: string
  name: string
  value: any
  error?: string
  maxLength?: number
  minLength?: number
  onChange: (e: any) => void
}

const Input: FC<IInput> = ({
  label,
  name,
  value,
  error,
  onChange,
  ...inputProps
}) => {
  return (
    <TextField
      label={label}
      variant='outlined'
      size='small'
      name={name}
      value={value}
      error={!!error}
      fullWidth
      onChange={onChange}
      inputProps={{ ...inputProps }}
    />
  )
}

export default Input
