import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from './utils/api/apiSlice';
import searchReducer from './components/Search/searchSlice';

export const store = configureStore({
  reducer: {
    api: apiSlice.reducer,
    search: searchReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
