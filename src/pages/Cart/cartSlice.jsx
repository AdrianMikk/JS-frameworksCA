import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cartItems: [],
    cartTotal: 0,
    cartTotalAmount: 0
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            state.cartItems.push(action.payload);
            state.cartTotal += 1;
            state.cartTotalAmount += action.payload.price;
        },
        removeFromCart: (state, action) => {
            const updatedCart = state.cartItems.filter(item => item.id !== action.payload);
            state.cartItems = updatedCart;
            state.cartTotal -= 1;
            state.cartTotalAmount -= action.payload.price;
        }
    }
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
