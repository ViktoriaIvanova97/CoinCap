import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const API_TOKEN = import.meta.env.VITE_TOKEN
const API_ASSETS = import.meta.env.VITE_ASSETS

export const getAssets = createAsyncThunk(
  'assets/getAssets',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get(`${API_ASSETS}`, {
        headers: {
          Authorization:
            `Bearer ${API_TOKEN}`,
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
export const getAssetHistory = createAsyncThunk(
  'assets/getAssetHistory',
  async ({ id, interval = 'h1' }, thunkAPI) => {
    try {
      const res = await axios.get(
        `${API_ASSETS}/${id}/history`,
        {
          params: { interval },
          headers: {
            Authorization:
            `Bearer ${API_TOKEN}`,
          },
        }
      )
      return res.data.data
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.error?.message || error.message
      )
    }
  }
)
