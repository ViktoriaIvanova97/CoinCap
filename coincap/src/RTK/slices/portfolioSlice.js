import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  currency: [],
}
const portfolioSlice = createSlice({
  name: 'portfolio',
  initialState,
  reducers: {
    addCurrency: (state, action) => {
      state.currency.push(action.payload)
    },
    handleRemove: (state, action) => {
      state.currency = state.currency.filter((item) => item.id !== action.payload)
    },
  },
  extraReducers: (builder) => {
    builder
  },
})

export const { addCurrency, handleRemove } = portfolioSlice.actions
export default portfolioSlice.reducer
