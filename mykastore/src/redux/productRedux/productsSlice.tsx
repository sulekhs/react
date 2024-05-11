import { createSlice } from "@reduxjs/toolkit";
import { ProductType } from "../../pages/Home/Home";

const initialState: ProductType[] = [];

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    initializeProducts: (state, action) => {
      return action.payload;
    }
  }
});

export const { initializeProducts } = productsSlice.actions;
export default productsSlice.reducer;
