import React, { createContext, useContext, useReducer } from 'react';

// Action types
const ADD_TO_CART = 'ADD_TO_CART';

// Reducer function
const cartReducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      console.log('Adding item to cart', action.payload)
      // Add the item to the cart
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };
    default:
      return state;
  }
};

// Initial state
const initialState = {
  cartItems: [],
};

// Create the context
const CartContext = createContext();

// Custom hook to use the cart context
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

// CartProvider component
export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  // Action creators
  const addToCart = (item) => {
    dispatch({ type: ADD_TO_CART, payload: { ...item, quantity: 1 } });
  };

  return (
    <CartContext.Provider value={{ cart: state.cartItems, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};
