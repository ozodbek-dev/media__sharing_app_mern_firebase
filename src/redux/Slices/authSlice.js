import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "user",
  initialState: {
    isLoggedIn: false,
    authType: undefined,
  },
  reducers: {
    loadUserRequest: (state, { payload }) => {
      state.loading = true;
    },
    loadUserSuccess: (state, { payload }) => {
      state.loading = false;
      state.isLoggedIn=true;
      state.user = payload
    },
    loadUserFail: (state, { payload }) => {
      state.loading = false;
      state.error = payload
    },
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
    authMethodRequest: (state, { payload }) => {
      state.loading = true;
    },

    authMethodSuccess: (state, { payload }) => {
      state.loading = false;
      state.isLoggedIn = true;
      state.user = payload;
    },
    authMethodFail: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
   
    logoutRequest: (state) => {
      state.loading = true;
    },
    logoutSuccess: (state, { payload }) => {
      state.loading = false;
      state.isLoggedIn = !payload.success;
      state.user = undefined;
    },
    logoutFail: (state, { payload }) => {
      state.error = payload;
      state.loading = false;
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
  logoutRequest,
  loginSuccess,
  logoutSuccess,
  loginFail,
  authMethodRequest,
  authMethodSuccess,
  authMethodFail,
  loadUserRequest,loadUserSuccess,loadUserFail,
  logoutFail
} = authSlice.actions;
export default authSlice.reducer;
