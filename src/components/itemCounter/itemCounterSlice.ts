import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  count: 0,
};

const itemCounterSlice = createSlice({
  name: "itemCounter",
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload;
    },
    setCount(state, action) {
      state.count = action.payload;
    },
  },
});

export const { setItems, setCount } = itemCounterSlice.actions;
export default itemCounterSlice.reducer;
