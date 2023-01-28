import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "user",
  initialState: {
    isLoggedIn: false,
  },
  reducers: {
    registerRequest: (state) => {
      state.loading = true;
    },
    registerSuccess: (state, { payload }) => {
      state.isLoggedIn = true;
      state.loading = false;
      state.user = payload;
    },
    registerFail: (state, { payload }) => {
      state.error = payload;
      state.loading = false;
    },
    loginRequest: (state) => {
      state.loading = true;
    },
    loginSuccess: (state, { payload }) => {
      state.isLoggedIn = true;
      state.loading = false;
      state.user = payload;
    },
    loginFail: (state, { payload }) => {
      state.error = payload;
      state.loading = false;
    },
    logoutRequest: state=>{
      state.loading=true
    },
    logoutSuccess: state=>{
      state.loading=false;
      state.user = undefined;
    },
    clearError: (state) => {
      state.loading = false;
      state.error = null;
    },
  },
});

export const {
  registerRequest,
  registerSuccess,
  registerFail,
  loginRequest,
  clearError,
  loginSuccess,
  loginFail,
} = authSlice.actions;
export default authSlice.reducer;
