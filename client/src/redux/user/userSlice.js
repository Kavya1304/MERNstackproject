import { createSlice } from "@reduxjs/toolkit";

const initialState={
    currentUser: null,
    error:null,
    loading: false,
};

const userSlice=createSlice({
    name:'user',
    initialState,
    reducers:{
        siginInStart:(state)=>{
            state.loading=true;
        },
        signInSuccess:(state,action) =>{
            state.currentUser=action.payload;
            state.loading =false;
            state.error=null;
        },
        siginInFailure:(state,action)=>{
            state.error=action.payload;
            state.loading=false;
        },
    }
});


export const{signInSuccess,siginInStart,siginInFailure}=userSlice.actions;

export default userSlice.reducer;