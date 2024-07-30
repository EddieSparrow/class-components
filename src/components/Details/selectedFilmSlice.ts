import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Movies } from "../../types/FilmContextInterface";

interface SelectedFilmState {
  selectedFilm: Movies | null;
}

const initialState: SelectedFilmState = {
  selectedFilm: null,
};

const selectedFilmSlice = createSlice({
  name: "selected",
  initialState,
  reducers: {
    setSelectedFilm(state, action: PayloadAction<Movies | null>) {
      if (state) {
        state.selectedFilm = action.payload;
      }
    },
  },
});

export const { setSelectedFilm } = selectedFilmSlice.actions;
export default selectedFilmSlice.reducer;
