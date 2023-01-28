import { Face, Lock, Mail } from '@mui/icons-material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { registerUser } from '../../../redux/Actions/authActions'
import { clearError } from '../../../redux/Slices/authSlice'
import Input from '../SignIn/Input'
import { FormContainer, SignInContainer } from '../SignIn/SignIn.styles'
import SignInUpMethods from '../SignIn/SignInUpMethods'

function SignUpContent() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { loading, isLoggedIn, user, error } = useSelector(
    (state) => state.user,
  )

  const [userData, setUserData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  })
  const eventHandler = (e) => {
    e.preventDefault()
    setUserData({ ...userData, [e.target.name]: e.target.value })
    console.log(userData)
  }

  const submitHandler = (e) => {
    e.preventDefault()

    const myForm = new FormData()
    myForm.set('name', userData.name)
    myForm.set('email', userData.email)
    myForm.set('password', userData.password)

    if (userData.password !== userData.confirmPassword) {
      console.log('Password and Confirm password must be equal')
    }

    dispatch(registerUser(myForm))
  }
  const fromItems = [
    {
      type: 'text',
      label: 'Name',
      name: 'name',
      icon: <Face />,
      required: true,
      value: userData.name,
    },
    {
      type: 'email',
      label: 'Email',
      name: 'email',
      icon: <Mail />,
      required: true,
      value: userData.email,
    },
    {
      type: 'password',
      label: 'Password',
      name: 'password',
      required: true,
      icon: <Lock />,
      value: userData.password,
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

  useEffect(() => {
    if (error) {
      console.log(error)
      dispatch(clearError())
    }
    if (isLoggedIn) {
      navigate('/')
      console.log('You register successfully!')
    }
  }, [error, isLoggedIn, navigate, dispatch])

  return (
    <SignInContainer>
      <FormContainer
        encType="multipart/form-data"
     onSubmit={submitHandler}
      >
        {fromItems.map((item) => (
          <Input options={item} key={item.label} eventHandler={eventHandler} />
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
