import { createSlice } from '@reduxjs/toolkit'
import { getAssets } from '../../api/coincapApi'


const initialState = {
  list: [],
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
      .addMatcher(
        (action) => action.type === getAssets.pending.type,
        (state) => {
          state.status = 'loading'
          state.error = null
        }
      )
      .addMatcher(
        (action) => action.type === getAssets.rejected.type,
        (state, action) => {
          state.status = 'failed'
          state.error = action.payload
        }
      )
  },
})

export default assetsSlice.reducer
