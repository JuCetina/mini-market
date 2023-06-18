import { ADD_TO_CART, CLEAR_CART, REMOVE_FROM_CART } from "../types"

export const addToCart = (id) => ({ type: ADD_TO_CART, payload: id})

export const removeFromCart = (id) => ({ type: REMOVE_FROM_CART, payload: id})

export const clearCart = () => ({ type: CLEAR_CART })