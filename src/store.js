import { configureStore } from "@reduxjs/toolkit";
import productDetailsReducer from "./features/Product-list/productDetailSlice";
import favoriteProductReducer from "./features/Favorites/favoriteSlice";
import searchReducer from "./features/admin/page/searchSlice";
import cartReducer from "./features/Cart/cartSlice"
import orderReducer from "./features/Order/orderSlice"

const store = configureStore({
  reducer: {
    productDetails: productDetailsReducer,
    favoriteProducts: favoriteProductReducer,
    search: searchReducer,
    cart: cartReducer,
    order : orderReducer,
  },
});

export default store;
