import axios from "axios";
import {
  authMethodFail,
  authMethodRequest,
  authMethodSuccess,
  loadUserFail,
  loadUserRequest,
  loadUserSuccess,
  loginFail,
  loginRequest,
  loginSuccess,
  logoutFail,
  logoutRequest,
  logoutSuccess,
  registerFail,
  registerRequest,
  registerSuccess,
} from "../Slices/authSlice";

export const registerUser = (body) => async (dispatch) => {
  try {
    dispatch(registerRequest());
    const { data } = await axios.post(`/api/auth/signup`, body, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    dispatch(registerSuccess(data));
    sessionStorage.setItem("user", JSON.stringify(data));
  } catch (err) {
    dispatch(registerFail(err.message));
  }
};

export const loginUser = (body) => async (dispatch) => {
  try {
    dispatch(loginRequest());
    const { data } = await axios.post(`/api/auth/signin`, body, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    dispatch(loginSuccess(data));
    sessionStorage.setItem("user", JSON.stringify(data));
  } catch (err) {
    dispatch(loginFail(err.message));
  }
};

export const logoutUser = () => async (dispatch) => {
  try {
    dispatch(logoutRequest());
    const { data } = await axios.get(`/api/auth/logout`);
    dispatch(logoutSuccess(data));
    sessionStorage.clear();
  } catch (err) {
    dispatch(logoutFail(err.message));
  }
};

export const userAuthMethod = (body, authType) => async (dispatch) => {
  console.log(body);
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    dispatch(authMethodRequest());
    let resData;
    if (authType === "google") {
      const { data } = await axios.post(`/api/auth/google`, body, config);
      resData = data;
    }
    if (authType === "facebook") {
      const { data } = await axios.post(`/api/auth/facebook`, body, config);
      resData = data;
    }
    if (authType === "github") {
      const { data } = await axios.post(`/api/auth/github`, body, config);
      resData = data;
    }
    sessionStorage.setItem('user',JSON.stringify(resData))
    dispatch(authMethodSuccess(await resData));
  } catch (err) {
    dispatch(authMethodFail(err.message));
  }
};

export const loadUserAction = () => async (dispatch) => {
  try {
    dispatch(loadUserRequest())
    
    const user = JSON.parse(sessionStorage.getItem("user"));
    console.log(user)

    dispatch(loadUserSuccess(user));
  } catch (err) {
    dispatch(loadUserFail(err.message))
  }
 
};
