import { Facebook, GitHub, Google } from '@mui/icons-material';
import React from 'react';
import AutthMethodBtn from './AuthMethodBtn';
import { SignInUpMethodsContainer } from './SignIn.styles';


function SignInUpMethods() {


  const methods = [
    {
      icon:<Google/>,
      method:"google"
    },
    {
      icon:<Facebook/>,
      method:"facebook"
    },
    {
      icon:<GitHub/>,
      method:"github"
    },
  ]

  const clickHandler = (e)=>{
    e.preventDefault();
console.log(e.target.name)
  }
  return <SignInUpMethodsContainer>

{
  methods.map(item=>(
    <AutthMethodBtn key={item.method} {...item} func={clickHandler} />
  ))
}

  </SignInUpMethodsContainer>;
}

export default SignInUpMethods;