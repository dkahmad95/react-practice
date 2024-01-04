import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
  name: "Products",
  initialState: {
    Products: [],
    isFetching: false,
    error: false,
  },
  reducers: {
    // Get Products
    getProductsStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    getProductsSuccess: (state, action) => {
      state.isFetching = false;
      state.Products = action.payload;
    },
    getProductsFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    }
   
  },
});

export const {  getProductsStart, getProductsSuccess, getProductsFailure} = productsSlice.actions;
export default productsSlice.reducer;