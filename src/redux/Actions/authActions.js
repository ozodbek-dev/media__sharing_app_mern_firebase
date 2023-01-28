import axios from 'axios'
import { loginFail, loginRequest, loginSuccess, registerFail, registerRequest, registerSuccess } from "../Slices/authSlice";

export const registerUser = (body)=>async(dispatch)=>{
  try {
    dispatch(registerRequest());
    const {data} = await axios.post(`/api/auth/signup`,body,{
      headers:{
        "Content-Type":"application/json"
      }
    });
    dispatch(registerSuccess(data))
  } catch (err) {
    dispatch(registerFail(err.message))
  }
}

export const loginUser = (body)=>async(dispatch)=>{
  try {
    dispatch(loginRequest());
    const {data} = await axios.post(`/api/auth/signin`,body,{
      headers:{
        "Content-Type":"application/json"
      }
    });
    dispatch(loginSuccess(data))
  } catch (err) {
    dispatch(loginFail(err.message))
  }
}

export const logoutUser = ()=>async(dispatch)=>{
  try {
    dispatch(loginRequest());
    const {data} = await axios.post(`/api/auth/logout`);
    dispatch(loginSuccess(data))
  } catch (err) {
    dispatch(loginFail(err.message))
  }
}