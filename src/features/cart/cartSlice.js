import { createSlice } from '@reduxjs/toolkit';
import { createSelector } from 'reselect';

const initialState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: initialState,
  reducers: {
    addItem: (state, action) => {
      //payload : newItem
      state.cartItems.push(action.payload);
    },
    deleteItem: (state, action) => {
      //payload : pizzaId
      state.cart = state.cartItems.filter(
        (pizzaItem) => pizzaItem.id !== action.payload,
      );
    },
    increaseItemQuantity: (state, action) => {
      const pizza = state.cartItems.find(
        (pizzaItem) => pizzaItem.pizzaId === action.payload,
      );
      pizza.quantity++;
      pizza.totalPrice = pizza.quantity * pizza.unitPrice;
    },
    decreaseItemQuantity: (state, action) => {
      const pizza = state.cartItems.find(
        (pizzaItem) => pizzaItem.pizzaId === action.payload,
      );
      pizza.quantity--;
      pizza.totalPrice = pizza.quantity * pizza.unitPrice;
    },
    clearCart: (state, action) => {
      state.cartItems = [];
    },
  },
});

export default cartSlice.reducer;

export const {
  addItem,
  deleteItem,
  increaseItemQuantity,
  decreaseItemQuantity,
  clearCart,
} = cartSlice.actions;

export const cartSelector = (store) => store.cart;

export const getTotalCartPrice = createSelector([cartSelector], (cartState) =>
  cartState.cartItems.reduce((acc, curr) => acc + curr.totalPrice, 0),
);

export const getTotalCartQuantity = createSelector(
  [cartSelector],
  (cartState) => {
    return cartState.cartItems.reduce((acc, curr) => acc + curr.quantity, 0);
  },
);