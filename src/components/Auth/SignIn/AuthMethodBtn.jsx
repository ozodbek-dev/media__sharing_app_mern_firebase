import React from 'react';
import { AuthMethodBtnContainer } from './SignIn.styles';


function AutthMethodBtn({icon, method,func}) {
  return <AuthMethodBtnContainer type='button' name={method} onClick={func}>
    {icon}
  </AuthMethodBtnContainer>;
}

export default AutthMethodBtn;