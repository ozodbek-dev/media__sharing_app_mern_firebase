import React from 'react'
import { SignInBtnContainer } from './SignIn.styles'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const SignInBtn = () => {
  return (
    <SignInBtnContainer to="/signin">
      <AccountCircleIcon/>
      <span>Sign in</span>
    </SignInBtnContainer>
  )
}

export default SignInBtn