import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./authSlice";

const rootReducer = combineReducers({
    auth: authReducer,
    // Add other reducers here as they are created
});

export default rootReducer;