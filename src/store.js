import { configureStore } from "@reduxjs/toolkit";
import productDetailsReducer from "./features/Product-list/productDetailSlice";
import favoriteProductReducer from "./features/Favorites/favoriteSlice";
import searchReducer from "./features/admin/page/searchSlice";
import cartReducer from "./features/Cart/cartSlice"

const store = configureStore({
  reducer: {
    productDetails: productDetailsReducer,
    favoriteProducts: favoriteProductReducer,
    search: searchReducer,
    cart : cartReducer
  },
});

export default store;
