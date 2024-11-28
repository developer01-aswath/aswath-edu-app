import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   isAuthenticated: false,
   role: null, // 'organization', 'branch', 'teacher', 'student'
   userId:null,
   token:null
};

const authSlice = createSlice({
   name: "auth",
   initialState,
   reducers: {
       login: (state, action) => {
        console.log(state,action)
           state.isAuthenticated = true;
           state.role = action.payload.role;
           state.userId = action.payload.id;
           state.token = action.payload.token;
       },
       logout: (state) => {
           state.isAuthenticated = false;
           state.role = null;
           state.userId = null;
           state.token = null;
       },
   },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
