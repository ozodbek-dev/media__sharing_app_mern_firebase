import { Lock, Mail } from '@mui/icons-material'
import React from 'react'
import { Link } from 'react-router-dom'
import Input from './Input'
import { FormContainer, SignInContainer } from './SignIn.styles'
import SignInUpMethods from './SignInUpMethods'



function Signincontent() {




  const eventHandler = (e)=>{
    console.log(e.target.value)
  }

  const submitHandler = e =>{
    e.preventDefault()
  console.log('submited')
  }
  const fromItems = [
    {
      type:"email",
      label:'Email',
      icon:<Mail/>,
      required:true,
    },
    {
      type:"password",
      label:'Password',
      required:true,
      icon: <Lock/>,
      visible:false,
    },
    {
      type:"submit",
      label:"Submit",
      disabled:true,
    }
  ]

  return (
    <SignInContainer>
      <FormContainer autoComplete="off" onSubmit={submitHandler}>
        {
          fromItems.map((item)=>(
            <Input options={item} key={item.label} eventHandler={eventHandler} />
          ))
        }
        <SignInUpMethods/>
        <p>
           <Link to="/signup">Register</Link>
        </p>
      </FormContainer>

      
      
    </SignInContainer>
  )
}

export default Signincontent
