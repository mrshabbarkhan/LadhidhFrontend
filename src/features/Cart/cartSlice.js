import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        localCart: null,
    },
    reducers: {
        addLocalCart: (state, actions) => {
            state.localCart = actions.payload
        }
    }
})

export default cartSlice.reducer
export const {addLocalCart} = cartSlice.actions