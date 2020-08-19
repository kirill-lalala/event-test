import { reducer as formReducer, FormReducer } from 'redux-form';
import { configureStore, createStore, combineReducers } from '@reduxjs/toolkit';

const reducer = combineReducers({
  form: formReducer,
});

export const store = configureStore({
  reducer,
  devTools: process.env.NODE_ENV !== 'production',
});
