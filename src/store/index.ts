import {reducer as formReducer} from 'redux-form';
import {combineReducers, configureStore} from '@reduxjs/toolkit';

const reducer = combineReducers({
  form: formReducer,
});

export const store = configureStore({
  reducer,
  devTools: process.env.NODE_ENV !== 'production',
});
