import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
    name: "order",
    initialState: {
        selectedOrder : null,
    },
    reducers: {
        addToSelectedOrder: (state, action) => {
            console.log(action.payload)
            state.selectedOrder = action.payload
        },
        removeFromSelectedOrder: (state, action) => {
            state.selectedOrder = null
        }
    }
})

export default orderSlice.reducer
export const {addToSelectedOrder, removeFromSelectedOrder} = orderSlice.actions