import { Face, Lock, Mail } from '@mui/icons-material'
import React from 'react'
import { Link } from 'react-router-dom'
import Input from '../SignIn/Input'
import { FormContainer, SignInContainer } from '../SignIn/SignIn.styles'
import SignInUpMethods from '../SignIn/SignInUpMethods'

function SignUpContent() {
  const eventHandler = (e) => {
   e.preventDefault();

  }

  const submitHandler = (e) => {
   e.preventDefault();
    alert('submited')
  }
  const fromItems = [
    {
      type: 'text',
      label: 'Name',
      name: 'Name',
      icon: <Face />,
      required: true,
    },
    {
      type: 'email',
      label: 'Email',
      name: 'email',
      icon: <Mail />,
      required: true,
    },
    {
      type: 'password',
      label: 'Password',
      name: 'password',
      required: true,
      icon: <Lock />,
    },
    {
      type: 'password',
      label: 'Confirm Password',
      name: 'confirmPassword',
      required: true,
      icon: <Lock />,
    },
    {
      type: 'submit',
      label: 'Submit',
      disabled: true,
    },
  ]


  return (
    <SignInContainer>
      <FormContainer autoComplete="off" onSubmit={submitHandler}>
        {fromItems.map((item) => (
          <Input options={item} key={item.label} />
        ))}
        <SignInUpMethods />
        <p>
          Already have an account ? <Link to="/signin">Sign In</Link>
        </p>
      </FormContainer>
    </SignInContainer>
  )
}

export default SignUpContent
