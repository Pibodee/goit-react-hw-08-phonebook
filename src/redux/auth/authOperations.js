import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

const setToken = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const unsetToken = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const register = createAsyncThunk(
  'auth/signup',
  async (userdata, { rejectWithValue }) => {
    try {
      const response = await axios.post('/users/signup', userdata);
      setToken(response.data.token);
      return response.data;
    } catch (e) {
      console.log(e.message);
      return rejectWithValue(e.message);
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/login',
  async (userdata, { rejectWithValue }) => {
    try {
      const response = await axios.post('/users/login', userdata);
      setToken(response.data.token);
      return response.data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const logOut = createAsyncThunk(
  'auth/logOut',
  async (_, { rejectWithValue }) => {
    try {
      await axios.post('/users/logout');
      unsetToken();
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, { getState, rejectWithValue }) => {
    try {
      const state = getState();

      if (!state.auth.token) {
        return rejectWithValue();
      }

      setToken(state.auth.token);
      const response = await axios.get('/users/current');
      return response.data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);
