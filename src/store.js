import { configureStore } from "@reduxjs/toolkit";
import productDetailsReducer from "./features/Product-list/productDetailSlice";
import favoriteProductReducer from "./features/Favorites/favoriteSlice";
import searchReducer from "./features/admin/page/searchSlice";

const store = configureStore({
  reducer: {
    productDetails: productDetailsReducer,
    favoriteProducts: favoriteProductReducer,
    search: searchReducer,
  },
});

export default store;
