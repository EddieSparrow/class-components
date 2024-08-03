import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SearchState {
  inputValue: string;
  page: number;
  limit: number;
}

const initialState: SearchState = {
  inputValue: "",
  page: 1,
  limit: 10,
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setPage(state, action: PayloadAction<number>) {
      state.page = action.payload;
    },
    setInputValue(state, action: PayloadAction<string>) {
      state.inputValue = action.payload;
    },
    setLimit(state, action: PayloadAction<number>) {
      state.limit = action.payload;
    },
  },
});

export const { setPage, setInputValue, setLimit } = searchSlice.actions;
export default searchSlice.reducer;
