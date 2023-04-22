import { createSlice } from "@reduxjs/toolkit";
import { register } from "./authOperations";

const initialState = {
    user: { name: null, email: null },
    token: null,
    isLogged: false,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: builder => 
        builder
            .addCase(register.fulfilled, (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLogged = true;
            }) 
})

export default authSlice.reducer