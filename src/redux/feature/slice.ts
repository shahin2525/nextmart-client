import { IProduct } from "@/types";
import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
export interface TIProductQuantity extends IProduct {
  orderQuantity: number;
}

interface InitialState {
  products: TIProductQuantity[];
}

const initialState: InitialState = {
  products: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,

  reducers: {
    addProduct: (state, action) => {
      const productToAdd = state.products.find(
        (product) => product._id === action.payload._id
      );
      if (productToAdd) {
        productToAdd.orderQuantity += 1;
        return;
      }
      state.products.push({ ...action.payload, orderQuantity: 1 });
    },

    incrementProduct: (state, action) => {
      const cartProductToIncrement = state.products.find(
        (product) => product._id === action.payload
      );
      if (cartProductToIncrement) {
        cartProductToIncrement.orderQuantity += 1;
        return;
      }
    },
    decrementProduct: (state, action) => {
      const cartProductToIncrement = state.products.find(
        (product) => product._id === action.payload
      );
      if (cartProductToIncrement && cartProductToIncrement.orderQuantity > 1) {
        cartProductToIncrement.orderQuantity -= 1;
        return;
      }
    },
    removeProduct: (state, action) => {
      state.products = state.products.filter(
        (product) => product._id !== action.payload
      );
    },
  },
});

//* Products

export const orderedProductsSelector = (state: RootState) => {
  return state.cart.products;
};

export const { addProduct, incrementProduct, decrementProduct, removeProduct } =
  cartSlice.actions;

export default cartSlice.reducer;
