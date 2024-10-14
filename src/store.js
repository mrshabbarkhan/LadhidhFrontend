import { configureStore } from "@reduxjs/toolkit";
import favoriteProductReducer from "./features/Favorites/favoriteSlice";
import searchReducer from "./features/admin/page/searchSlice";
import cartReducer from "./features/Cart/cartSlice";
import orderReducer from "./features/Order/orderSlice";
import authReducer from "./features/auth/authSlice";

const store = configureStore({
  reducer: {
    favoriteProducts: favoriteProductReducer,
    search: searchReducer,
    cart: cartReducer,
    order: orderReducer,
    auth: authReducer,
  },
});

export default store;
