import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  initialValue: 10,
  dataProduct: [
    {category: "Fruits", price: "$1", stocked: true, name: "Apple"},
    {category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit"},
    {category: "Fruits", price: "$2", stocked: false, name: "Passionfruit"},
    {category: "Vegetables", price: "$2", stocked: true, name: "Spinach"},
    {category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin"},
    {category: "Vegetables", price: "$1", stocked: true, name: "Peas"}
  ],
}

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setinitialValue: (state, payload) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.initialValue = payload
    },    
  },
})

// Action creators are generated for each case reducer function
export const { setinitialValue } = productSlice.actions

export default productSlice.reducer