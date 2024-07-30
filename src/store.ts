import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./utils/api/apiSlice";
import searchReducer from "./components/Search/searchSlice";
import selectedSlice from "./components/Details/selectedFilmSlice";

export const store = configureStore({
  reducer: {
    api: apiSlice.reducer,
    search: searchReducer,
    selected: selectedSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
