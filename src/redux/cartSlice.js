// redux/cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: [],
  totalQuantity: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      const item = state.cartItems.find((product) => product.id === action.payload.id);
      if (!item) {
        state.cartItems.push({ ...action.payload, quantity: 1 });
      } else {
        item.quantity++;
      }
      state.totalQuantity++;
    },
    removeFromCart(state, action) {
      const item = state.cartItems.find((product) => product.id === action.payload.id);
      if (item) {
        item.quantity--;
        if (item.quantity === 0) {
          state.cartItems = state.cartItems.filter((product) => product.id !== action.payload.id);
        }
        state.totalQuantity--;
      }
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
