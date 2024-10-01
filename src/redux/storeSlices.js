import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productData: [],
};

export const storeSlice = createSlice({
  name: "store",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingProduct = state.productData.find((item) => {
        item.id === action.payload.id;
      });

      if (existingProduct) {
        existingProduct.quantity += action.payload.quantity;
      } else {
        state.productData.push(action.payload);
      }
    },

    increaseQuantity: (state, action) => {
      const existingProduct = state.productData.find((item) => {
        item.id === action.payload.id;
      });

      existingProduct && existingProduct.quantity++;
    },

    decreasingQuantity: (state, action) => {
      const existingProduct = state.productData.find((item) => {
        item.id === action.payload.id;
      });
      if (existingProduct?.quantity === 1) {
        existingProduct.quantity = 1;
      } else {
        existingProduct && existingProduct.quantity--;
      }
    },

    deleteProduct: (state, action) => {
      state.productData = state.productData.filter(
        (item) => item.id !== action.payload
      );
    },

    resetCart: (state, action) => {
      state.productData = [];
    },
  },
});

export const {
  addToCart,
  increaseQuantity,
  decreasingQuantity,
  deleteProduct,
  resetCart,
} = storeSlice.actions;

export default storeSlice.reducer;
