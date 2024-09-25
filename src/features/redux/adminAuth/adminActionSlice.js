
import adminServices from "./adminActionService";

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const adminActionSlice = createSlice({
  name: "adminAuth",
  initialState: {
    isLoading: false,
    isSuccess: false,
    isError: false,
    refetchFlag : false,
    dashboard: [],
    products: [],
    categories: [],
    banners: [],
    users: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(allUsers.pending, (state, action) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.isError = false;
      })
      .addCase(allUsers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.users = action.payload;
      })
      .addCase(allUsers.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.users = [];
      })
      .addCase(addNewProduct.pending, (state) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.isError = false;
        state.refetchFlag = true
      })
      .addCase(addNewProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.refetchFlag = false;
        state.products = [action.payload, ...state.products];
      })
      .addCase(addNewProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.refetchFlag = false;
      })
      .addCase(removeProduct.pending, (state) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.isError = false;
        state.refetchFlag = false
      })
      .addCase(removeProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.refetchFlag = true
      })
      .addCase(removeProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.refetchFlag = false;
      })
      .addCase(allProducts.pending, (state) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.isError = false;
      })
      .addCase(allProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.products = action.payload
        state.refetchFlag = false
      })
      .addCase(allProducts.rejected, (state) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
      })
      .addCase(fetchBanners.pending, (state) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.isError = false;
        state.refetchFlag = false
      })
      .addCase(fetchBanners.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.banners = action.payload
        state.refetchFlag = false;
      })
      .addCase(fetchBanners.rejected, (state) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.refetchFlag = false;
      })
      .addCase(addNewBanner.pending, (state) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.isError = false;
        state.refetchFlag = false
      })
      .addCase(addNewBanner.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.refetchFlag = true
      })
      .addCase(addNewBanner.rejected, (state) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.refetchFlag = false
      })
      .addCase(removeBanner.pending, (state) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.isError = false;
        state.refetchFlag = false
      })
      .addCase(removeBanner.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.refetchFlag = true
      })
      .addCase(removeBanner.rejected, (state) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.refetchFlag = false
      })
      .addCase(addCategories.pending, (state) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.isError = false;
        state.refetchFlag = false
      })
      .addCase(addCategories.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.refetchFlag = true
        state.categories = [...state.categories, action.payload];
      })
      .addCase(addCategories.rejected, (state) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.refetchFlag = false
      })
      .addCase(removeCategory.pending, (state) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.isError = false;
        state.refetchFlag = false
      })
      .addCase(removeCategory.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.refetchFlag = true
      })
      .addCase(removeCategory.rejected, (state) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.refetchFlag = false
      })
      .addCase(editSingleCategory.pending, (state) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.isError = false;
        state.refetchFlag = false
      })
      .addCase(editSingleCategory.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.refetchFlag = true
      })
      .addCase(editSingleCategory.rejected, (state) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.refetchFlag = false
      })
      .addCase(fetchAllCategory.pending, (state) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.isError = false;
      })
      .addCase(fetchAllCategory.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.categories = action.payload;
      })
      .addCase(fetchAllCategory.rejected, (state) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
      })
  },
});

export const allUsers = createAsyncThunk("FETCH/ALLUSERS", async () => {
  try {
    return await adminServices.getAllUsers();
  } catch (error) {
    console.log(error);
  }
});

export const allProducts = createAsyncThunk(
  "GET/ALLPRODUCTS",
  async () => {
    try {
      return await adminServices.getAllProducts();
    } catch (error) {
      console.log(error);
    }
  }
);

export const addNewProduct = createAsyncThunk(
  "POST/PRODUCTS",
  async (formData, thunkAPI) => {
    console.log(formData)
    try {
      return await adminServices.addProducts(formData);
    } catch (error) {
      console.log(error);

      return thunkAPI.rejectWithValue("Something went wrong")
    }
  }
);

export const editSingleProduct = createAsyncThunk(
  "PUT/PRODUCTS",
  async ({id, data},thunkAPI) => {
    try {
      return await adminServices.editProducts(id, data);
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue("Something went wrong")
    }
  }
);


export const removeProduct = createAsyncThunk(
  "DELETE/PRODUCTS",
  async (id) => {
    try {
      return await adminServices.deleteProducts(id);
    } catch (error) {
      console.log(error);
    }
  }
);

export const addNewBanner = createAsyncThunk("ADD/BANNER", async (data) => {
  try {
    return await adminServices.addBanner(data)
  } catch (error) {
    console.log(error.response.data)
  }
})


export const fetchBanners = createAsyncThunk("FETCH/BANNER", async () => {
  try {
    return await adminServices.getAllBanners()
  } catch (error) {
    console.log(error.response.data)
  }
})


export const removeBanner = createAsyncThunk('REMOVE/BANNER', async (id, thunkAPI) => {
  try {
    return await adminServices.deleteBanner(id)
  } catch (error) {
     
    console.log(error)
    return thunkAPI.rejectWithValue(error.response.data)
  }
})

//  CATEGORY
export const addCategories = createAsyncThunk('Add/CATEGORY', async (formData, thunkAPI) => {
  try {
    return await adminServices.addCategory(formData)
  } catch (error) {
    console.log(error)
    return thunkAPI.rejectWithValue(error.response.data)
  }
})


export const fetchAllCategory = createAsyncThunk('GET/CATEGORY', async (_, thunkAPI) => {
  try {
    return await adminServices.getAllCategory()
  } catch (error) {
    console.log(error)
    return thunkAPI.rejectWithValue(error.response.data)
  }
})


export const removeCategory = createAsyncThunk('REMOVE/CATEGORY', async (id, thunkAPI) => {
  try {
    return await adminServices.deleteCategory(id)
  } catch (error) {
    console.log(error)
    return thunkAPI.rejectWithValue(error.response.data)
  }
})

export const editSingleCategory = createAsyncThunk('EDIT/CATEGORY', async ({ id, data }, thunkAPI) => {
  try {
    return await adminServices.editCategory(id,data)
  } catch (error) {
    console.log(error)
    return thunkAPI.rejectWithValue(error.response.data)
  }
})

export default adminActionSlice.reducer;
