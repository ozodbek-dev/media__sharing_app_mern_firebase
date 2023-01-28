import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name:"user_request",
  initialState:{
    loading:true,
  }, 
  reducers:{
    loadUser: (state)=>{
          state.user = {name:"ozodbek"}
          state.loading=false
    },
  }
});

export const {loadUser} = userSlice.actions;
export default userSlice.reducer;