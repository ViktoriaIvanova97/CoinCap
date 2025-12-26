import { configureStore, combineReducers } from '@reduxjs/toolkit'
import assetsReducer from './slices/assetsSlice'
import portfolioReducer from './slices/portfolioSlice'

const rootReducer = combineReducers({
  assets: assetsReducer,
  currency: portfolioReducer,
})

export const store = configureStore({
  reducer: rootReducer,
})
