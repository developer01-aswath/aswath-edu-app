import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   isAuthenticated: false,
   role: null, // 'organization', 'branch', 'teacher', 'student'
};

const authSlice = createSlice({
   name: "auth",
   initialState,
   reducers: {
       login: (state, action) => {
           state.isAuthenticated = true;
           state.role = action.payload.role;
       },
       logout: (state) => {
           state.isAuthenticated = false;
           state.role = null;
       },
   },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
