import { configureStore } from '@reduxjs/toolkit';
import { api } from './api';
import authReducer from "../../fetuses/auth/slice"
export const store = configureStore({
  reducer: {
    auth:authReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
  devTools: process.env.NODE_ENV !== 'production',
});