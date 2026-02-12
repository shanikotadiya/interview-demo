import { combineReducers } from '@reduxjs/toolkit';
import authReducer from './authReducer.js';

// Register all feature reducers here
const rootReducer = combineReducers({
  auth: authReducer
});

export default rootReducer;

