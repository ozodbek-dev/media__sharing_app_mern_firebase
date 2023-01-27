import { Mail, Visibility, VisibilityOff } from '@mui/icons-material'
import React, { useState } from 'react'
import { InputContainer } from './SignIn.styles'
function Input({ options,eventHandler }) {
  const [visible, setVisible] = useState(false)
  const visibleHandler = (e) => setVisible((prev) => !prev)

  const { type, label, icon,required } = options
  return (
    <InputContainer>
      {type !== 'submit' ? (
        <input
          type={type !== 'password' ? type : visible ? 'text' : 'password'}
          placeholder={label}
          onChange={eventHandler}
          autoComplete="off"
          required={required}
        />
      ) : (
        <input type="submit" value={label}  />
      )}

      {icon && icon}
      {type === 'password' && (
        <span onClick={visibleHandler}>
          {!visible ? <Visibility /> : <VisibilityOff />}
        </span>
      )}
    </InputContainer>
  )
}

export default Input
