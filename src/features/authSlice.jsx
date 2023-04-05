import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
name:"auth",
initialState:{
    currentUser:null,
    loading:false,
    error:false,
    token:null
},
reducers:{
    fetchStart:(state)=>{
        state.loading = true;
        state.error = false
      },
      loginSuccess: (state,{payload}) =>{
               state.loading = false
               state.currentUser= payload?.user
               state.token=null
            },
       logoutSuccess: (state,{payload}) =>{
                state.loading = false
                state.currentUser= null
                state.token= payload.key
             },
         registerSuccess:(state,{payload})=>{
            state.loading = false;
               state.currentUser= payload?.user.userName 
               state.error = false
         },
         fetchFail:(state)=>{
            state.loading = false
          state.error = true
        }   
}
})
export const {fetchStart,fetchFail,loginSuccess,logoutSuccess,registerSuccess} = authSlice.actions

export default authSlice.reducer