import { configureStore } from '@reduxjs/toolkit';

import multiViewReducer from './multiView/multiViewSlice';
import streamReducer from './stream/streamSlice';

export const store = configureStore({
  reducer: {
    multiView: multiViewReducer,
    stream: streamReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
