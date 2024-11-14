import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    localCart: null,
    appliedCoupan: null,
  },
  reducers: {
    addLocalCart: (state, actions) => {
      state.localCart = actions.payload;
    },
    addToApplidCoupan: (state, actions) => {
      state.appliedCoupan = actions.payload;
    },
  },
});

export default cartSlice.reducer;
export const { addLocalCart, addToApplidCoupan } = cartSlice.actions;
