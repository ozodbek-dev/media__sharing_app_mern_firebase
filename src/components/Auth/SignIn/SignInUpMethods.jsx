import { Facebook, GitHub, Google } from '@mui/icons-material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  facebookProvider,
  githubProvider,
  googleProvider,
} from '../../../config/authMethods'
import { userAuthMethod } from '../../../redux/Actions/authActions'
import firebaseAuth from '../service/auth'
import AutthMethodBtn from './AuthMethodBtn'
import { SignInUpMethodsContainer } from './SignIn.styles'

function SignInUpMethods() {
  const dispatch = useDispatch()
  const { user, loading, error } = useSelector((state) => state.user)

  const methods = [
    {
      icon: <Google />,
      method: 'google',
    },
    {
      icon: <Facebook />,
      method: 'facebook',
    },
    {
      icon: <GitHub />,
      method: 'github',
    },
  ]

  const clickHandler = async (e) => {
    e.preventDefault();
    let body  = {}
    if (e.target.name === 'facebook') {
      const res = await firebaseAuth(facebookProvider)
      console.log(res.email)
      const {email,displayName,photoURL, ...others} = res;
      body = {
        email,
        name: displayName,
        img:photoURL,
        ...others,
      }
      dispatch(userAuthMethod(body, 'facebook'))
    }
    if (e.target.name === 'github') {
      const res = await firebaseAuth(githubProvider)
      console.log(res)
      const {email,displayName,photoURL, ...others} = res;

      body = {
        email:email,
        name: displayName,
        img:photoURL,
        ...others,
      }
      dispatch(userAuthMethod(body, 'github'))
    }
    if (e.target.name === 'google') {
      const res = await firebaseAuth(googleProvider)
      const {email,displayName,photoURL, ...others} = res;

      body = {
        email,
        name: displayName,
        img:photoURL,
        ...others,
      }
      dispatch(userAuthMethod(body, 'google'))
    }
  }
  return (
    <SignInUpMethodsContainer>
      {methods.map((item) => (
        <AutthMethodBtn key={item.method} {...item} func={clickHandler} />
      ))}
    </SignInUpMethodsContainer>
  )
}

export default SignInUpMethods
