import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./utils/api/apiSlice";
import searchReducer from "./components/Search/searchSlice";
import selectedSlice from "./components/Details/selectedFilmSlice";
import itemCounterSlice from "./components/itemCounter/itemCounterSlice";

export const store = configureStore({
  reducer: {
    api: apiSlice.reducer,
    search: searchReducer,
    selected: selectedSlice,
    itemCounter: itemCounterSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
