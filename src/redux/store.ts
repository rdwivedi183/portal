// src/app/store.ts
import { configureStore } from '@reduxjs/toolkit';
import themeReducer from '../redux/themeSlice';

const store = configureStore({
  reducer: {
    theme: themeReducer,
    // add other reducers here
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
