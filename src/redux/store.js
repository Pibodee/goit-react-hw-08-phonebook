import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { contactsReduser } from './contactsSlice';
import { filterReducer } from './filterSlice';


const rootReducer = combineReducers({
  contacts: contactsReduser,
  filter: filterReducer,
});


export const store = configureStore({
  reducer: rootReducer})

