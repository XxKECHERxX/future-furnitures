import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
  name: 'cartList',
  initialState: {
    list: [],
    totalQuantity: 0,
    totalPrice: 0,
  },
  reducers: {
    addToCart(state, action) {
      const newItem = action.payload

      const itemAdded = state.list.find((item) => newItem.id === item.id)

      if (itemAdded) {
        itemAdded.quantity++
        itemAdded.amount += itemAdded.price
      } else {
        state.list.push({
          id: newItem.id,
          name: newItem.name,
          fileName: newItem.fileName,
          price: newItem.price,
          quantity: newItem.quantity,
          amount: newItem.amount,
        })
      }

      state.totalQuantity++
      state.totalPrice += newItem.price
    },
    removeFromCart(state, action) {
      const existItem = state.list.find((item) => item.id === action.payload.id)

      existItem.quantity--
      existItem.amount -= existItem.price
      state.totalQuantity--
      state.totalPrice -= existItem.price

      if (existItem.quantity < 1) {
        state.list = state.list.filter((item) => item.id !== existItem.id)
      }
    },
    deleteFromCart(state, action) {
      const existItem = state.list.find((item) => item.id === action.payload.id)

      state.list = state.list.filter((item) => item.id !== existItem.id)
      state.totalQuantity -= existItem.quantity
      state.totalPrice -= existItem.amount
    },
  },
})

export const { addToCart, removeFromCart, deleteFromCart } = cartSlice.actions

export default cartSlice.reducer
