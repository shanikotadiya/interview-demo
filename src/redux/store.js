import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers/index.js';
import { loggerMiddleware } from '../middleware/loggerMiddleware.js';

export const store = configureStore({
  reducer: rootReducer,
  // Disable redux-thunk and use only our custom middlewares
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(loggerMiddleware)
});

