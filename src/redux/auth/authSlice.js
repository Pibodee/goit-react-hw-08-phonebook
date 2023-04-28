import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { register, logIn, logOut, refreshUser } from './authOperations';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: { name: '', email: '' },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
    isLoading: false,
    error: null,
  },
  extraReducers: builder =>
    builder
      .addCase(logOut.fulfilled, state => {
        state.user = { name: '', email: '' };
        state.token = null;
        state.isLoggedIn = false;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user.name = action.payload.name;
        state.user.email = action.payload.email;
        state.isLoggedIn = true;
        state.isLoading = false;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.pending, state => {
        state.isLoading = true;
        state.error = null;
        state.isRefreshing = true;
      })
      .addCase(refreshUser.rejected, state => {
        state.isLoading = false;
        state.isRefreshing = false;
      })
      .addMatcher(
        isAnyOf(register.pending, logIn.pending, logOut.pending),
        state => {
          state.isLoading = true;
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(register.fulfilled, logIn.fulfilled),
        (state, action) => {
          state.user.name = action.payload.user.name;
          state.user.email = action.payload.user.email;
          state.token = action.payload.token;
          state.isLoggedIn = true;
          state.isLoading = false;
        }
      )
      .addMatcher(
        isAnyOf(register.rejected, logIn.rejected, logOut.rejected),
        (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
          console.log(action.payload);
        }
      ),
});

export const authReducer = authSlice.reducer;
