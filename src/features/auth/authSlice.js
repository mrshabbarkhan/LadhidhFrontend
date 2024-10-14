import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    otpToken: null,
    initialNumber: null,
  },
  reducers: {
    setOtpToken: (state, action) => {
      state.otpToken = action.payload;
    },
    setNumber: (state, action) => {
      state.initialNumber = action.payload;
    },
  },
});

export default authSlice.reducer;
export const { setOtpToken, setNumber } = authSlice.actions;
