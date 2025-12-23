import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const getAssets = createAsyncThunk(
  'assets/getAssets',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get('https://rest.coincap.io/v3/assets', {
        headers: {
          Authorization:
            ' Bearer 68578b5946048ffe84d46bbfa8969d1d23d8502d9841805069acb9935a4072ba',
        },
      })
      return res.data.data
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.error?.message || error.message
      )
    }
  }
)
