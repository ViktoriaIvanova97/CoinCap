import { createSlice } from '@reduxjs/toolkit'
import { getAssets, getAssetHistory } from '../../api/coincapApi'

const initialState = {
  list: [],
  history: [],
  status: 'idle',
  error: null,
}
const assetsSlice = createSlice({
  name: 'assets',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAssets.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.list = action.payload
      })
      .addCase(getAssetHistory.fulfilled, (state, action) => {
        state.loading = false
        state.history = action.payload
      })
      .addMatcher(
        (action) =>
          action.type === getAssets.pending.type ||
          action.type === getAssetHistory.pending.type,
        (state) => {
          state.status = 'loading'
          state.error = null
        }
      )
      .addMatcher(
        (action) =>
          action.type === getAssets.rejected.type ||
          action.type === getAssetHistory.rejected.type,
        (state, action) => {
          state.status = 'failed'
          state.error = action.payload
        }
      )
  },
})

export default assetsSlice.reducer
