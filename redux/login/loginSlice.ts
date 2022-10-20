import { createSlice } from "@reduxjs/toolkit";


const loginSlice = createSlice({
  name:'loginState',
  initialState:{ value:false },
  reducers:{
    setting:(state,action)=>{
      state.value = action.payload;
    }
  }
})

export default loginSlice;
export const { setting } = loginSlice.actions;