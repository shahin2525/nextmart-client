import { IProduct } from "@/types";
import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
export interface TIProductQuantity extends IProduct {
  orderQuantity: number;
}

interface InitialState {
  products: TIProductQuantity[];
  city: string;
  shippingAddress: string;
}

const initialState: InitialState = {
  products: [],
  city: "",
  shippingAddress: "",
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
    updateCity: (state, action) => {
      state.city = action.payload;
    },
    updateShippingAddress: (state, action) => {
      state.shippingAddress = action.payload;
    },
  },
});

//* Products

export const orderedProductsSelector = (state: RootState) => {
  return state.cart.products;
};
// payments
export const subTotalSelector = (state: RootState) => {
  return state.cart.products.reduce((acc, product) => {
    if (product?.offerPrice) {
      return acc + product?.offerPrice * product?.orderQuantity;
    } else {
      return acc + product?.price * product?.orderQuantity;
    }
  }, 0);
};

// address
export const citySelector = (state: RootState) => {
  return state.cart.city;
};
export const shippingAddressSelector = (state: RootState) => {
  return state.cart.shippingAddress;
};
export const {
  addProduct,
  incrementProduct,
  decrementProduct,
  removeProduct,
  updateCity,
  updateShippingAddress,
} = cartSlice.actions;

export default cartSlice.reducer;
