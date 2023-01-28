import { Lock, Mail } from '@mui/icons-material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { loginUser } from '../../../redux/Actions/authActions'
import { clearError } from '../../../redux/Slices/authSlice'
import Input from './Input'
import { FormContainer, SignInContainer } from './SignIn.styles'
import SignInUpMethods from './SignInUpMethods'

function Signincontent() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { loading, isLoggedIn, user, error } = useSelector(
    (state) => state.user,
  )

  const [userData, setUserData] = useState({
    email: '',
    password: '',
  })

  const eventHandler = (e) => {
    e.preventDefault()
    setUserData({ ...userData, [e.target.name]: e.target.value })
    console.log(userData)
  }

  const submitHandler = (e) => {
    e.preventDefault()

    const myForm = new FormData()
    myForm.set('email', userData.email)
    myForm.set('password', userData.password)
    dispatch(loginUser(myForm))
  }
  const fromItems = [
    {
      type: 'email',
      label: 'Email',
      name: 'email',
      icon: <Mail />,
      value: userData.email,
      required: true,
    },
    {
      type: 'password',
      label: 'Password',
      name: 'password',
      value: userData.password,
      required: true,
      icon: <Lock />,
      visible: false,
    },
    {
      type: 'submit',
      label: 'Submit',
      disabled: true,
    },
  ]

  useEffect(() => {
    if (error) {
      console.log(error)
      dispatch(clearError())
    }
    if (isLoggedIn) {
      navigate('/')
      console.log('You logged in successfully!')
    }
  }, [error, isLoggedIn, navigate, dispatch])

  return (
    <SignInContainer>
      <FormContainer autoComplete="off" onSubmit={submitHandler}>
        {fromItems.map((item) => (
          <Input options={item} key={item.label} eventHandler={eventHandler} />
        ))}
        <SignInUpMethods />
        <p>
          <Link to="/signup">Register</Link>
        </p>
      </FormContainer>
    </SignInContainer>
  )
}

export default Signincontent
