import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: { name: null, email: null },
    token: null,
    isLogged: false,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: {},
})

export default authSlice.reducer