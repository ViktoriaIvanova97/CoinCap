import { configureStore, combineReducers } from '@reduxjs/toolkit'
import assetsReducer from './slices/assetsSlice'

const rootReducer = combineReducers({
  assets: assetsReducer,
})

export const store = configureStore({
  reducer: rootReducer,
})
