import { createSlice } from "@reduxjs/toolkit";
import { ProductType } from "../../pages/Home/Home";

type CartDataType = {
    products: ProductType[];
    total: number;
    quantity:number;
  };
  
  const initialState: CartDataType = {
    products: [],
    total: 0,
    quantity:0
  };

const subtract = (n1: number, n2: number) =>
  (n1-n2);

const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
        addProduct: ( state, action ) => {
            state.quantity += 1;
            state.products.push(action.payload)
            state.total += action.payload.price * action.payload.quantity;
        },
        removeFromCart: (state, action) => {
            const productId = action.payload;
            const productIndex = state.products.findIndex(
              (product) => product.id === productId
            );
      
            if (productIndex > -1) {
              const product = state.products[productIndex];
              state.total = subtract(state.total, product.price);
              state.products.splice(productIndex, 1);
            }
      
            return state;
        },
        reset: (state) => {
            state.products = [];
            state.quantity = 0;
            state.total = 0;
        },
    },
});

export const { addProduct, removeFromCart, reset } = cartSlice.actions;
export default cartSlice.reducer;