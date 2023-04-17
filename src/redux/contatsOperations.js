import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://643287aad0127730d2d4343c.mockapi.io';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get('/contacts');
      const {data} = response;
      return data;
    } catch (e) {
      rejectWithValue(e.message);
    }
  }
);

export const addContact = createAsyncThunk(`contacts/addContact`,
  async (contact, { rejectWithValue }) => {
    try {
      const response = await axios.post('/contacts', contact);
      return response.data
    } catch (e) {
    return  rejectWithValue(e.message)
  }
  }) 


export const deleteContact = createAsyncThunk(`contacts/deleteContact`,
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.delete(`/contacts/${id}`);
      return response.data
    } catch (e) {
      return rejectWithValue(e.message)
  }
})
