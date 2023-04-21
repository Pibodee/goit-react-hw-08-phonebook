import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { contactsReduser } from './contacts/contactsSlice';
import { filterReducer } from './contacts/filterSlice';

const rootReducer = combineReducers({
  contacts: contactsReduser,
  filter: filterReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
