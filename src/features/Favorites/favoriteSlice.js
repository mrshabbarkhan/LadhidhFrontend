import { createSlice } from "@reduxjs/toolkit";

const favoriteSlice = createSlice({
  name: "favorite",
  initialState: {
    favoriteProducts: [],
  },
  reducers: {
    addToFavorite(state, action) {
      state.favoriteProducts = [action.payload, ...state.favoriteProducts];
    },
    removeFromFavorite(state, action) {
      state.favoriteProducts = state.favoriteProducts.filter(
        (item) => item._id !== action.payload._id
      );
    },
  },
});

export const { addToFavorite, removeFromFavorite } = favoriteSlice.actions;
export default favoriteSlice.reducer;
